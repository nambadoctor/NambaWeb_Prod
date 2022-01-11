import { Action } from "../../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import { ServiceProviderBasicReducer_Types } from "../../Reducers/Common/ServiceProviderBasicReducer";
import IServiceProviderBasic from "../../Types/IncomingDataModels/ServiceProviderBasic";
import { CheckForDefaultOrg } from "../OrganisationActions";
import { RootState } from "../../store";
import { getCall } from "../../Http/http-helpers";
import { GetServiceProviderBasicEndPoint } from "../../Helpers/EndPointHelpers";
import SetTrackTrace from "../../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";

export const SetServiceProviderBasicAction = (serviceProviderBasic: IServiceProviderBasic): Action => ({
    type: ServiceProviderBasicReducer_Types.SET_SERVICE_PROVIDER_BASIC,
    payload: serviceProviderBasic
});

export const GetServiceProviderBasic = (): ThunkAction<void, RootState, null, Action> => async dispatch => {

    SetTrackTrace("Get Service Provider Basic Start", "GetServiceProviderBasic", SeverityLevel.Information);

    const response = await getCall({} as IServiceProviderBasic, GetServiceProviderBasicEndPoint(), "Action-GetServiceProviderBasic");

    SetTrackTrace("Get Service Provider Basic Response" + response.data, "GetServiceProviderBasic", SeverityLevel.Information);

    SetTrackTrace("Dispatch Set Service Provider Basic" + response.data, "GetServiceProviderBasic", SeverityLevel.Information);
    dispatch(SetServiceProviderBasicAction(response.data));

    SetTrackTrace("Dispatch Check For Default Orgs", "GetServiceProviderBasic", SeverityLevel.Information);
    dispatch(CheckForDefaultOrg());
};
