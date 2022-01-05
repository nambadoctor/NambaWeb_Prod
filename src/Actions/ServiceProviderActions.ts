import { Action } from "../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import IServiceProvider from "../Types/ClientDataModels/ServiceProvider";
import { Current_Service_Provider_State_Types } from "../Reducers/CurrentServiceProviderReducer";
import { GetAllAppointments } from "./AppointmentActions";
import { GetServiceProviderProfileEndPoint } from "../Helpers/EndPointHelpers";
import { GetAllCustomersForServiceProviderInOrg } from "./CustomerActions";
import getCall from "../Http/http-helpers";

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

    let response = await getCall({} as IServiceProvider, GetServiceProviderProfileEndPoint(serviceProviderBasicId!, selectedOrganisationId!))

    dispatch(SetCurrentServiceProvider(response.data))
    dispatch(GetAllAppointments());
    dispatch(GetAllCustomersForServiceProviderInOrg());
};
