import { Action } from "../../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import http from "../../http-common";
import { GetUserType_Types } from "../../Reducers/Common/ServiceProviderBasicReducer";
import GetAuthHeader from "./GetHeaderHelper";
import IServiceProviderBasic from "../../Types/ClientDataModels/ServiceProviderBasic";
import { CheckForDefaultOrg } from "../OrganisationActions";
import { RootState } from "../../store";

function setServiceProviderBasicAction(serviceProviderBasic: IServiceProviderBasic) {
    return {
        type: GetUserType_Types.SET_LOCAL_USER_TYPES,
        payload: serviceProviderBasic
    };
}

export const SetServiceProviderBasic = (serviceProviderBasic: IServiceProviderBasic): Action => (setServiceProviderBasicAction(serviceProviderBasic));

export const GetServiceProviderBasic = (): ThunkAction<void, RootState, null, Action> => async dispatch => {
    let headersVals = await GetAuthHeader();

    http
        .get<IServiceProviderBasic>("/serviceprovider", { headers: headersVals })
        .then(response => {
            //TODO: ADD NULL CHECK FOR RESPONSE [SPID and ORGs]
            //ADD NULL CHECKS FOR ALL SERVICE CALLS! SEE IF IT IS POSSIBLE TO DO IN AXIOS LAYER
            dispatch(SetServiceProviderBasic(response.data));
            dispatch(CheckForDefaultOrg())
        })
        .catch(err => {
            //TODO: HANDLE ERROR [IN CLIENT AND LOGGING]
            console.log(err)
        });
};
