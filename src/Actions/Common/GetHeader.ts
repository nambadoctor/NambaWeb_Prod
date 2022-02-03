import { SeverityLevel } from '@microsoft/applicationinsights-web';
import GetFirebaseIdToken from '../../Auth/FirebaseUserInfoHelper';
import SetTrackTrace from '../../Telemetry/SetTrackTrace';

async function GetAuthHeader(): Promise<{
    'Content-type': string;
    Authorization: string;
}> {
    SetTrackTrace(
        'Start Get Auth Header',
        'GetAuthHeader',
        SeverityLevel.Information,
    );

    var userToken = await GetFirebaseIdToken();

    SetTrackTrace(
        'Retrieved Auth Header',
        'GetAuthHeader',
        SeverityLevel.Information,
    );

    return {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + userToken,
    };
}

export default GetAuthHeader;
