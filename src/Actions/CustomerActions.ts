import { ThunkAction } from "redux-thunk";
import { Customer_Types } from "../Reducers/CustomersReducer";
import { GetCustomerFromPhoneNumber, GetServiceProviderCustomersInOrganisationEndPoint, SetCustomerEndPoint, SetCustomerWithAppointment } from "../Helpers/EndPointHelpers";
import { RootState } from "../store";
import { Action } from "../Types/ActionType";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { SetAddPatientCustomerProfile, SetAddPatientIsCheckingForCustomer, SetAddPatientIsCustomerExists, SetAddPatientIsDoneCallSuccess, SetAddPatientIsInvalidNumber, SetAddPatientIsMakingDoneCall } from "./AddPatientActions";
import { getCall, putCall } from "../Http/http-helpers";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { GetAllAppointments } from "./AppointmentActions";
import makeEmptyValueCustomerSetRequestData from "../Helpers/CustomerHelper";
import { ICustomerProfileOutgoing } from "../Types/OutgoingDataModels/PatientCreationAndAppointmentBookRequest";
import ICustomerProfileWithAppointmentOutgoingData from "../Types/OutgoingDataModels/CustomerProfileWithAppointmentOutgoing";
import { SetLinearLoadingBarToggle } from "./Common/UIControlActions";

function setCustomersHelper(customers: ICustomerIncomingData[]) {
    return {
        type: Customer_Types.SET_CUSTOMER_LIST,
        payload: customers
    };
}

export const SetCustomers = (customers: Array<ICustomerIncomingData>): Action => (setCustomersHelper(customers));

export const GetAllCustomersForServiceProviderInOrg = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Get All Customers For Service Provider In Org Action", "GetAllCustomersForServiceProviderInOrg", SeverityLevel.Information);

    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    SetTrackTrace("Current Service Provider: " + currentServiceProvider, "GetAllCustomersForServiceProviderInOrg", SeverityLevel.Information);

    let response = await getCall({} as Array<ICustomerIncomingData>, GetServiceProviderCustomersInOrganisationEndPoint(currentServiceProvider.organisationId, [currentServiceProvider.serviceProviderId]), "GetAllCustomersForServiceProviderInOrg")

    SetTrackTrace("Dispatch Set Customers List Action", "GetAllCustomersForServiceProviderInOrg", SeverityLevel.Information);
    dispatch(SetCustomers(response.data));
};

//NEED TO INTEGRATE WITH SERVICE CALL
export const CheckIfCustomerExists = (phoneNumber: string, organisationId: string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

    SetTrackTrace("Enter Check If Customer Exists with Phone Number Action PhNumber:" + phoneNumber + "OrgId: " + organisationId, "CheckIfCustomerExists", SeverityLevel.Information);

    try {

        let response = await getCall({} as ICustomerProfileOutgoing, GetCustomerFromPhoneNumber(phoneNumber, organisationId), "CheckIfCustomerExists")

        dispatch(SetAddPatientIsCheckingForCustomer(false))

        if (response.data) {
            dispatch(SetAddPatientIsCustomerExists(true))
            dispatch(SetAddPatientCustomerProfile(response.data))
        } else {
            dispatch(SetAddPatientIsCustomerExists(false))
            dispatch(SetAddPatientIsInvalidNumber(false))
            dispatch(SetAddPatientCustomerProfile(makeEmptyValueCustomerSetRequestData()))
        }

    } catch (error) {
        dispatch(SetAddPatientIsCheckingForCustomer(false))
        dispatch(SetAddPatientIsInvalidNumber(true))
        throw error;
    }
};

export const SetCustomerAndBookAppointment = (appointmentRequest: ICustomerProfileWithAppointmentOutgoingData): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    dispatch(SetLinearLoadingBarToggle(true))

    SetTrackTrace("Enter Set Customer and Book Appointment Action", "SetCustomerAndBookAppointment", SeverityLevel.Information);

    SetTrackTrace("Current appointment request: " + appointmentRequest, "SetCustomerAndBookAppointment", SeverityLevel.Information);

    let response = await putCall({} as any, SetCustomerWithAppointment(), appointmentRequest, "SetCustomerAndBookAppointment")

    dispatch(SetLinearLoadingBarToggle(false))

    if (response) {
        dispatch(SetAddPatientCustomerProfile(makeEmptyValueCustomerSetRequestData()))
        dispatch(SetAddPatientIsMakingDoneCall(false))
        dispatch(SetAddPatientIsDoneCallSuccess(false))
        dispatch(GetAllAppointments())
        dispatch(GetAllCustomersForServiceProviderInOrg())
    } else {
        dispatch(SetAddPatientIsDoneCallSuccess(false))
    }
};

export const SetCustomer = (customerRequest: ICustomerProfileOutgoing): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

    dispatch(SetLinearLoadingBarToggle(true))

    SetTrackTrace("Enter Set Customer Action", "SetCustomer", SeverityLevel.Information);

    SetTrackTrace("Current customer request: " + customerRequest, "SetCustomer", SeverityLevel.Information);

    let response = await putCall({} as any, SetCustomerEndPoint(), customerRequest, "SetCustomer")

    dispatch(SetLinearLoadingBarToggle(false))

    if (response) {
        dispatch(SetAddPatientCustomerProfile(response.data))
        dispatch(SetAddPatientIsMakingDoneCall(false))
        dispatch(GetAllCustomersForServiceProviderInOrg())
    } else {
        dispatch(SetAddPatientIsDoneCallSuccess(false))
    }
};

