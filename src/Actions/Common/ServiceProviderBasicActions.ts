import { Action } from "../../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import http from "../../http-common";
import { GetUserType_Types, ServiceProviderBasicState } from "../../Reducers/Common/ServiceProviderBasicReducer";
import GetAuthHeader from "./GetHeaderHelper";
import IServiceProviderBasic from "../../Types/ClientDataModels/ServiceProviderBasic";

function setServiceProviderBasicAction(serviceProviderBasic: IServiceProviderBasic) {
    return {
        type: GetUserType_Types.SET_LOCAL_USER_TYPES,
        payload: serviceProviderBasic
    };
}

export const setServiceProviderBasic = (serviceProviderBasic: IServiceProviderBasic): Action => (setServiceProviderBasicAction(serviceProviderBasic));

export const GetServiceProviderBasic = (): ThunkAction<void, ServiceProviderBasicState, null, Action> => async dispatch => {
    let headersVals = await GetAuthHeader();
    let response = await http.get<IServiceProviderBasic>("/ServiceProvider", {headers : headersVals});
    dispatch(setServiceProviderBasic(response.data));
};
