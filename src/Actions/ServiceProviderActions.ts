import { Action } from "../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import IServiceProvider from "../Types/IncomingDataModels/ServiceProvider";
import { Current_Service_Provider_State_Types } from "../Reducers/CurrentServiceProviderReducer";
import { GetAllAppointments } from "./AppointmentActions";
import { GetServiceProviderProfileEndPoint } from "../Helpers/EndPointHelpers";
import { GetAllCustomersForServiceProviderInOrg } from "./CustomerActions";
import { getCall } from "../Http/http-helpers";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { SetFatalError, SetLinearLoadingBarToggle } from "./Common/UIControlActions";

function setCurrentServiceProviderAction(serviceProvider: IServiceProvider) {
    return {
        type: Current_Service_Provider_State_Types.SET_CURRENT_SERVICE_PROVIDER,
        payload: serviceProvider
    };
}

export const SetCurrentServiceProvider = (serviceProvider: IServiceProvider): Action => (setCurrentServiceProviderAction(serviceProvider));

export const GetCurrentServiceProvider = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Get Service Provider", "GetCurrentServiceProvider", SeverityLevel.Information);
    var serviceProviderBasicId = getState().ServiceProviderBasicState.serviceProvider?.serviceProviderId
    var selectedOrganisationId = getState().OrgState.selectedOrganisation?.organisationId

    if (serviceProviderBasicId) {
        SetTrackTrace("Retrieved SP Basic Id: " + serviceProviderBasicId, "GetCurrentServiceProvider", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved SP Basic Id DOES NOT EXIST: " + serviceProviderBasicId, "GetCurrentServiceProvider", SeverityLevel.Error);
    }

    if (selectedOrganisationId) {
        SetTrackTrace("Retrieved Selected Organisation Id: " + serviceProviderBasicId, "GetCurrentServiceProvider", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Selected Organisation Id DOES NOT EXIST: " + selectedOrganisationId, "GetCurrentServiceProvider", SeverityLevel.Error);
    }

    try {
        let response = await getCall({} as IServiceProvider, GetServiceProviderProfileEndPoint(serviceProviderBasicId!, selectedOrganisationId!), "GetCurrentServiceProvider")

        dispatch(SetLinearLoadingBarToggle(false))

        SetTrackTrace("Dispatch Set Current Service Provider" + response.data, "GetCurrentServiceProvider", SeverityLevel.Information);
        dispatch(SetCurrentServiceProvider(response.data))

        SetTrackTrace("Dispatch Get All Appointments" + response.data, "GetCurrentServiceProvider", SeverityLevel.Information);
        dispatch(GetAllAppointments());

        SetTrackTrace("Dispatch Get All Customers For Service Provider In Org" + response.data, "GetCurrentServiceProvider", SeverityLevel.Information);
        dispatch(GetAllCustomersForServiceProviderInOrg());
    } catch (error) {
        dispatch(SetFatalError("Cannot get service provider!"))
    }
};
