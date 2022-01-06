import { Action } from "../../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import http from "../../Http/http-common";
import { GetUserType_Types } from "../../Reducers/Common/ServiceProviderBasicReducer";
import GetAuthHeader from "./GetHeaderHelper";
import IServiceProviderBasic from "../../Types/IncomingDataModels/ServiceProviderBasic";
import { CheckForDefaultOrg } from "../OrganisationActions";
import { RootState } from "../../store";
import {getCall} from "../../Http/http-helpers";
import { GetServiceProviderBasicEndPoint } from "../../Helpers/EndPointHelpers";
import SetTrackTrace from "../../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";

function getActionToSetServiceProviderBasic(serviceProviderBasic: IServiceProviderBasic) {
    return {
        type: GetUserType_Types.SET_LOCAL_USER_TYPES,
        payload: serviceProviderBasic
    };
}

export const SetServiceProviderBasic = (serviceProviderBasic: IServiceProviderBasic): Action => (getActionToSetServiceProviderBasic(serviceProviderBasic));

export const GetServiceProviderBasic = (): ThunkAction<void, RootState, null, Action> => async dispatch => {

    SetTrackTrace("Get Service Provider Basic Start", "GetServiceProviderBasic", SeverityLevel.Information);

    const response = await getCall({} as IServiceProviderBasic, GetServiceProviderBasicEndPoint(), "Action-GetServiceProviderBasic");

    SetTrackTrace("Get Service Provider Basic Response" + response.data, "GetServiceProviderBasic", SeverityLevel.Information);

    SetTrackTrace("Dispatch Set Service Provider Basic" + response.data, "GetServiceProviderBasic", SeverityLevel.Information);
    dispatch(SetServiceProviderBasic(response.data));

    SetTrackTrace("Dispatch Check For Default Orgs", "GetServiceProviderBasic", SeverityLevel.Information);
    dispatch(CheckForDefaultOrg());
};
