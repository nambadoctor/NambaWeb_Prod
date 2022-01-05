import { Action } from "../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import http from "../Http/http-common";
import GetAuthHeader from "../Actions/Common/GetHeaderHelper";
import { RootState } from "../store";
import IServiceProvider from "../Types/ClientDataModels/ServiceProvider";
import { Current_Service_Provider_State_Types } from "../Reducers/CurrentServiceProviderReducer";
import { GetAllAppointments } from "./AppointmentActions";
import { GetServiceProviderProfileEndPoint } from "../Helpers/EndPointHelpers";
import { GetAllCustomersForServiceProviderInOrg } from "./CustomerActions";

function setCurrentServiceProviderAction(serviceProvider: IServiceProvider) {
    return {
        type: Current_Service_Provider_State_Types.SET_CURRENT_SERVICE_PROVIDER,
        payload: serviceProvider
    };
}

export const SetCurrentServiceProvider = (serviceProvider: IServiceProvider): Action => (setCurrentServiceProviderAction(serviceProvider));

export const GetCurrentServiceProvider = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    var serviceProviderBasicId = getState().ServiceProviderBasicState.serviceProvider?.serviceProviderId
    var selectedOrganisationId = getState().OrgState.selectedOrganisation?.organisationId

    //TODO: Handle empty service providerId or empty selected organsiation

    let headersVals = await GetAuthHeader();

    http
        .get<IServiceProvider>(GetServiceProviderProfileEndPoint(serviceProviderBasicId!, selectedOrganisationId!), { headers: headersVals })
        .then(response => {
            dispatch(SetCurrentServiceProvider(response.data))
            dispatch(GetAllAppointments());
            dispatch(GetAllCustomersForServiceProviderInOrg());
        })
        .catch(err => {
            //TODO: HANDLE ERROR [IN CLIENT AND LOGGING]
            console.log("ERROR GETTING SERVICE PROVIDER PROFILE: " + err)
        });
};
