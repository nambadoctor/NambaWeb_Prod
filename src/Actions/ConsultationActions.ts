import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { ThunkAction } from "redux-thunk";
import { GetAppointmentForServiceProvider, GetCustomerForServiceProvider } from "../Helpers/EndPointHelpers";
import { getCall } from "../Http/http-helpers";
import { ConsultationTypes_Types } from "../Reducers/ConsultationReducer";
import { RootState } from "../store";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { Action } from "../Types/ActionType";
import IAppointmentData from "../Types/IncomingDataModels/Appointment";
import ICustomerData from "../Types/IncomingDataModels/Customer";
import IPrescriptionIncomingData from "../Types/IncomingDataModels/PrescriptionIncoming";
import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";

function setSelectedAppointmentAction(appointment: IAppointmentData) {
    return {
        type: ConsultationTypes_Types.SET_CURRENT_APPOINTMENT,
        payload: appointment
    };
}

function setSelectedCustomerAction(customer: ICustomerData) {
    return {
        type: ConsultationTypes_Types.SET_CURRENT_CUSTOMER,
        payload: customer
    };
}

function setReportsAction(reports: IReportIncomingData) {
    return {
        type: ConsultationTypes_Types.SET_CURRENT_CUSTOMER_REPORTS,
        payload: reports
    };
}

function setPrescriptionsAction(prescriptions: IPrescriptionIncomingData) {
    return {
        type: ConsultationTypes_Types.SET_CURRENT_CUSTOMER_PRESCRIPTIONS,
        payload: prescriptions
    };
}

export const SetSelectedAppointmentForConsultation = (appointment: IAppointmentData): Action => (setSelectedAppointmentAction(appointment));
export const SetSelectedCustomerForConsultation = (customer: ICustomerData): Action => (setSelectedCustomerAction(customer));
export const SetReportsForConsultation = (reports: IReportIncomingData): Action => (setReportsAction(reports));
export const SetPrescriptionsForConsultation = (prescriptions: IPrescriptionIncomingData): Action => (setPrescriptionsAction(prescriptions));

//Get consultation appointment
export const GetAppointmentForConsultation = (appointmentId: string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Get Appointment Action", "GetAppointmentForConsultation", SeverityLevel.Information);
    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    if (currentServiceProvider) {
        SetTrackTrace("Retrieved Current Service Provider: " + currentServiceProvider, "GetAppointmentForConsultation", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Current Service Provider DOES NOT EXIST: " + currentServiceProvider, "GetAppointmentForConsultation", SeverityLevel.Error);
    }

    //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
    let response = await getCall({} as Array<IAppointmentData>, GetAppointmentForServiceProvider(appointmentId, currentServiceProvider.serviceProviderId), "GetAllAppointments");

    SetTrackTrace("Dispatch Set Selected Appointment" + response.data, "GetAppointmentForConsultation", SeverityLevel.Information);
    dispatch(SetSelectedAppointmentForConsultation(response.data));
};

//Get consultation customer
export const GetCustomerForConsultation = (customerId: string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Get Customer Action", "GetCustomerForConsultation", SeverityLevel.Information);
    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    if (currentServiceProvider) {
        SetTrackTrace("Retrieved Current Service Provider: " + currentServiceProvider, "GetCustomerForConsultation", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Current Service Provider DOES NOT EXIST: " + currentServiceProvider, "GetCustomerForConsultation", SeverityLevel.Error);
    }

    //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
    let response = await getCall({} as Array<IAppointmentData>, GetCustomerForServiceProvider(customerId, currentServiceProvider.organisationId), "GetCustomerForConsultation");

    SetTrackTrace("Dispatch Set Selected Customer" + response.data, "GetCustomerForConsultation", SeverityLevel.Information);
    dispatch(SetSelectedCustomerForConsultation(response.data));
};