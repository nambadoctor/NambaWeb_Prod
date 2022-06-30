import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { getAuth } from 'firebase/auth';
import jwt_decode from 'jwt-decode';
import SetTrackTrace from '../telemetry/SetTrackTrace';

var idToken: string = '';

const GetIDTokenExpiryDate = (idToken: string) => {
    SetTrackTrace(
        'Start Get Expiry date from ID token',
        'GetIDTokenExpiryDate',
        SeverityLevel.Information,
    );
    var decoded = jwt_decode(String(idToken)) as {};

    SetTrackTrace(
        'Recieved decoded dictionary from id token: ' + decoded,
        'GetIDTokenExpiryDate',
        SeverityLevel.Information,
    );

    var expiryTimeStamp = 0;
    Object.keys(decoded).forEach((key) => {
        if (key === 'exp') {
            expiryTimeStamp = (decoded as any)[key]; //type exposed with "any" type
        }
    });

    SetTrackTrace(
        'Get expiry timestamp from id token response: ' + expiryTimeStamp,
        'GetIDTokenExpiryDate',
        SeverityLevel.Information,
    );

    const expiryDate = new Date(expiryTimeStamp * 1000);

    return expiryDate;
};

const RefreshIdToken = async (): Promise<string> => {
    SetTrackTrace(
        'Start Id Token Refresh',
        'RefreshIdToken',
        SeverityLevel.Information,
    );
    return new Promise<string>((resolve) => {
        getAuth()
            .currentUser!.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                SetTrackTrace(
                    'Id Token Refresh SUCCESS',
                    'RefreshIdToken',
                    SeverityLevel.Information,
                );
                idToken = String(idToken);
                resolve(String(idToken));
            })
            .catch(function (error) {
                SetTrackTrace(
                    'Id Token Refresh FAIL: ' + error,
                    'RefreshIdToken',
                    SeverityLevel.Error,
                );
                resolve(String(error));
            });
    });
};

async function GetFirebaseIdToken() {
    if (idToken) {
        SetTrackTrace(
            'Id Token Exists',
            'GetFirebaseIdToken',
            SeverityLevel.Information,
        );
        const currentDateTime = new Date();
        const tokenExpiryTime = GetIDTokenExpiryDate(idToken);

        if (tokenExpiryTime < currentDateTime) {
            SetTrackTrace(
                'Id Token Expired, refreshing token',
                'GetFirebaseIdToken',
                SeverityLevel.Warning,
            );
            idToken = await RefreshIdToken();
        }
    } else {
        SetTrackTrace(
            'Id Token Empty, refreshing token',
            'GetFirebaseIdToken',
            SeverityLevel.Warning,
        );
        idToken = await RefreshIdToken();
    }

    SetTrackTrace(
        'Returning Id Token',
        'GetFirebaseIdToken',
        SeverityLevel.Information,
    );
    return idToken;
}

function clearAuthToken() {
    idToken = '';
}

export { GetFirebaseIdToken, clearAuthToken };
