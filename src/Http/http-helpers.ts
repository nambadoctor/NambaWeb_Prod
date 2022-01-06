import http from "./http-common";
import GetHeadersHelper from "../Actions/Common/GetHeaderHelper";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import axios from "axios";

const baseURL: string = "https://localhost:5001/api/provider/"

async function getCall(returnType: any, endPoint: string, caller: string) {

    SetTrackTrace("Entered HTTP Get call method" + caller, "HTTPGetCall", SeverityLevel.Information);

    let headersContent = await GetHeadersHelper();

    SetTrackTrace("Recieved Header Token: " + headersContent, "", SeverityLevel.Information);

    let response = await http.get<typeof returnType>(endPoint, { headers: headersContent });

    SetTrackTrace("Recieved HTTP Response" + response, "HTTPGetCall", SeverityLevel.Information);

    //TODO: Add handling and logging for invalid response

    return response;
}

async function putCall(returnType: any, endPoint: string, payload: any, caller: string) {

    SetTrackTrace("Entered HTTP Put call method" + caller, "HTTPPutCall", SeverityLevel.Information);

    let headersContent = await GetHeadersHelper();

    SetTrackTrace("Recieved Header Token: " + headersContent, "", SeverityLevel.Information);

    var jsonPayload = JSON.stringify(payload)

    console.log("PAYLOAD: " + jsonPayload)

    let response = await http.put<typeof returnType>(endPoint, jsonPayload, { headers: headersContent });

    SetTrackTrace("Recieved HTTP PUT Response" + response, "HTTPPutCall", SeverityLevel.Information);

    //TODO: Add handling and logging for invalid response

    return response;
}

export { getCall, putCall }