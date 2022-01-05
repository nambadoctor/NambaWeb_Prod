import http from "./http-common";
import GetHeadersHelper from "../Actions/Common/GetHeaderHelper";

export default async function getCall(returnType: any, endPoint: string) {
    let headersContent = await GetHeadersHelper();
    let response = await http.get<typeof returnType>(endPoint, { headers: headersContent });

    return response;
}