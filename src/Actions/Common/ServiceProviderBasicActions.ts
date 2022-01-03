import { Action } from "../../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import http from "../../http-common";
import { GetUserType_Types } from "../../Reducers/Common/ServiceProviderBasicReducer";
import GetAuthHeader from "./GetHeaderHelper";
import IServiceProviderBasic from "../../Types/ClientDataModels/ServiceProviderBasic";
import { CheckForDefaultOrg } from "../OrganisationActions";
import { RootState } from "../../store";

function getActionToSetServiceProviderBasic(serviceProviderBasic: IServiceProviderBasic) {
    return {
        type: GetUserType_Types.SET_LOCAL_USER_TYPES,
        payload: serviceProviderBasic
    };
}

export const SetServiceProviderBasic = (serviceProviderBasic: IServiceProviderBasic): Action => (getActionToSetServiceProviderBasic(serviceProviderBasic));

export const GetServiceProviderBasic = (): ThunkAction<void, RootState, null, Action> => async dispatch => {
    let headersVals = await GetAuthHeader();

    http
        .get<IServiceProviderBasic>("/serviceprovider", { headers: headersVals })
        .then(response => {
            if (response.data != null) {
                if (!response.data.serviceProviderId) {
                    //LOG: SPBasic response has no SP_ID {SpID}
                }

                if (!response.data.organisations) {
                    //LOG: SPBasic response has no organisations {Orgs.length}
                }

                dispatch(SetServiceProviderBasic(response.data));
            } else {
                //LOG: Data response is null
            }
        })
        .catch(err => {
            //TODO: SEND TO CENTRALIZED ERROR HANDLING CLASS
        });
};
