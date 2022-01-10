import { ThunkAction } from "redux-thunk";
import http from "../Http/http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import { Customer_Types } from "../Reducers/CustomersReducer";
import { GetCustomerFromPhoneNumber, GetServiceProviderCustomersInOrganisationEndPoint, SetCustomerWithAppointment } from "../Helpers/EndPointHelpers";
import { RootState } from "../store";
import { Action } from "../Types/ActionType";
import ICustomerData from "../Types/IncomingDataModels/Customer";
import { SetAddPatientCustomerProfile, SetAddPatientIsCheckingForCustomer, SetAddPatientIsCustomerExists, SetAddPatientIsDoneCallSuccess, SetAddPatientIsInvalidNumber, SetAddPatientIsMakingDoneCall } from "./AddPatientActions";
import { getCall, putCall } from "../Http/http-helpers";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { GetAllAppointments } from "./AppointmentActions";
import makeEmptyValueCustomerSetRequestData from "../Helpers/CustomerHelper";
import { ICustomerProfileOutgoing } from "../Types/OutgoingDataModels/PatientCreationAndAppointmentBookRequest";
import ICustomerProfileWithAppointmentOutgoingData from "../Types/OutgoingDataModels/CustomerProfileWithAppointmentOutgoing";

function setCustomersHelper(customers: ICustomerData[]) {
    return {
        type: Customer_Types.SET_LOCAL_CUSTOMER_LIST,
        payload: customers
    };
}

export const SetCustomers = (customers: Array<ICustomerData>): Action => (setCustomersHelper(customers));

export const GetAllCustomersForServiceProviderInOrg = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Get All Customers For Service Provider In Org Action", "GetAllCustomersForServiceProviderInOrg", SeverityLevel.Information);

    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    SetTrackTrace("Current Service Provider: " + currentServiceProvider, "GetAllCustomersForServiceProviderInOrg", SeverityLevel.Information);

    let response = await getCall({} as Array<ICustomerData>, GetServiceProviderCustomersInOrganisationEndPoint(currentServiceProvider.organisationId, [currentServiceProvider.serviceProviderId]), "GetAllCustomersForServiceProviderInOrg")

    SetTrackTrace("Dispatch Set Customers List Action", "GetAllCustomersForServiceProviderInOrg", SeverityLevel.Information);
    dispatch(SetCustomers(response.data));
};

//NEED TO INTEGRATE WITH SERVICE CALL
export const CheckIfCustomerExists = (phoneNumber: string, organisationId: string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

    SetTrackTrace("Enter Check If Customer Exists with Phone Number Action PhNumber:" + phoneNumber + "OrgId: " + organisationId, "CheckIfCustomerExists", SeverityLevel.Information);

    let response = await getCall({} as ICustomerProfileOutgoing, GetCustomerFromPhoneNumber(phoneNumber, organisationId), "CheckIfCustomerExists")

    if (response.data) {
        dispatch(SetAddPatientIsCheckingForCustomer(false))
        dispatch(SetAddPatientIsCustomerExists(true))
        dispatch(SetAddPatientCustomerProfile(response.data))
    } else if (response.status == 204) {
        dispatch(SetAddPatientIsCheckingForCustomer(false))
        dispatch(SetAddPatientIsInvalidNumber(true))
    } else {
        dispatch(SetAddPatientIsCheckingForCustomer(false))
        dispatch(SetAddPatientIsCustomerExists(false))
        dispatch(SetAddPatientIsInvalidNumber(false))
        dispatch(SetAddPatientCustomerProfile(makeEmptyValueCustomerSetRequestData()))
    }
};

export const SetCustomerAndBookAppointment = (appointmentRequest: ICustomerProfileWithAppointmentOutgoingData): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Set Customer and Book Appointment Action", "SetCustomerAndBookAppointment", SeverityLevel.Information);

    SetTrackTrace("Current appointment request: " + appointmentRequest, "SetCustomerAndBookAppointment", SeverityLevel.Information);

    let response = await putCall({} as any, SetCustomerWithAppointment(), appointmentRequest, "SetCustomerAndBookAppointment")

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
