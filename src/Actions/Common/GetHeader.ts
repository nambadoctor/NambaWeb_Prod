import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { GetFirebaseIdToken } from '../../auth/FirebaseUserInfoHelper';
import SetTrackTrace from '../../telemetry/SetTrackTrace';

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
