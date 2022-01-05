import http from "./http-common";
import GetHeadersHelper from "../Actions/Common/GetHeaderHelper";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";

export default async function getCall(returnType: any, endPoint: string, caller:string) {

    SetTrackTrace("Entered HTTP Get call method" + caller, "HTTPGetCall", SeverityLevel.Information);

    let headersContent = await GetHeadersHelper();

    SetTrackTrace("Recieved Header Token: " + headersContent, "", SeverityLevel.Information)

    let response = await http.get<typeof returnType>(endPoint, { headers: headersContent });

    return response;
}