import { Action } from "../../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import http from "../../Http/http-common";
import { GetUserType_Types } from "../../Reducers/Common/ServiceProviderBasicReducer";
import GetAuthHeader from "./GetHeaderHelper";
import IServiceProviderBasic from "../../Types/ClientDataModels/ServiceProviderBasic";
import { CheckForDefaultOrg } from "../OrganisationActions";
import { RootState } from "../../store";
import getCall from "../../Http/http-helpers";
import { GetServiceProviderBasicEndPoint } from "../../Helpers/EndPointHelpers";

function getActionToSetServiceProviderBasic(serviceProviderBasic: IServiceProviderBasic) {
    return {
        type: GetUserType_Types.SET_LOCAL_USER_TYPES,
        payload: serviceProviderBasic
    };
}

export const SetServiceProviderBasic = (serviceProviderBasic: IServiceProviderBasic): Action => (getActionToSetServiceProviderBasic(serviceProviderBasic));

export const GetServiceProviderBasic = (): ThunkAction<void, RootState, null, Action> => async dispatch => {
    const response = await getCall({} as IServiceProviderBasic, GetServiceProviderBasicEndPoint());

    dispatch(SetServiceProviderBasic(response.data));
    dispatch(CheckForDefaultOrg());
};
