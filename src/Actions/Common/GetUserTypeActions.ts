import { Action } from "../../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import http from "../../http-common";
import { GetUserType_Types, ServiceProviderBasicState } from "../../Reducers/Common/ServiceProviderBasicReducer";
import GetAuthHeader from "./GetHeaderHelper";
import IServiceProviderBasic from "../../Types/ClientDataModels/ServiceProviderBasic";

function setUserTypeAction(userType: IServiceProviderBasic) {
    return {
        type: GetUserType_Types.SET_LOCAL_USER_TYPES,
        payload: userType
    };
}

export const setUserType = (userType: IServiceProviderBasic): Action => (setUserTypeAction(userType));

export const GetUserType = (): ThunkAction<void, ServiceProviderBasicState, null, Action> => async dispatch => {
    let headersVals = await GetAuthHeader();
    let response = await http.get<IServiceProviderBasic>("/ServiceProvider", {headers : headersVals});
    dispatch(setUserType(response.data));
};
