import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { ThunkAction } from "redux-thunk";
import { getIndexOfAppointment } from "../Helpers/AppointmentHelpers";
import { GetAppointmentForServiceProvider, GetCustomerForServiceProvider } from "../Helpers/EndPointHelpers";
import { getCall } from "../Http/http-helpers";
import { ConsultationTypes_Types } from "../Reducers/ConsultationReducer";
import { RootState } from "../store";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { Action } from "../Types/ActionType";
import IAppointmentData from "../Types/IncomingDataModels/Appointment";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import IPrescriptionIncomingData from "../Types/IncomingDataModels/PrescriptionIncoming";
import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";
import { SetFatalError, SetLinearLoadingBarToggle, SetNonFatalError } from "./Common/UIControlActions";
import { GetPrescriptions } from "./PrescriptionActions";
import { GetReports } from "./ReportActions";

function setSelectedAppointmentAction(appointment: IAppointmentData) {
    return {
        type: ConsultationTypes_Types.SET_CURRENT_APPOINTMENT,
        payload: appointment
    };
}

function setSelectedCustomerAction(customer: ICustomerIncomingData) {
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

function setPreviousAppointmentAction(appointment: IAppointmentData) {
    return {
        type: ConsultationTypes_Types.SET_PREVIOUS_APPOINTMENT,
        payload: appointment
    };
}

function setNextAppointmentAction(appointment: IAppointmentData) {
    return {
        type: ConsultationTypes_Types.SET_NEXT_APPOINTMENT,
        payload: appointment
    };
}

export const SetSelectedAppointmentForConsultation = (appointment: IAppointmentData): Action => (setSelectedAppointmentAction(appointment));
export const SetSelectedCustomerForConsultation = (customer: ICustomerIncomingData): Action => (setSelectedCustomerAction(customer));
export const SetReportsForConsultation = (reports: IReportIncomingData): Action => (setReportsAction(reports));
export const SetPrescriptionsForConsultation = (prescriptions: IPrescriptionIncomingData): Action => (setPrescriptionsAction(prescriptions));
export const SetPreviousAppointmentConsultation = (appointment: IAppointmentData): Action => (setPreviousAppointmentAction(appointment));
export const SetNextAppointmentForConsultation = (appointment: IAppointmentData): Action => (setNextAppointmentAction(appointment));


//Get consultation appointment
export const GetAppointmentForConsultation = (appointmentId: string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    dispatch(SetLinearLoadingBarToggle(true))

    SetTrackTrace("Enter Get Appointment Action", "GetAppointmentForConsultation", SeverityLevel.Information);
    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    if (currentServiceProvider) {
        SetTrackTrace("Retrieved Current Service Provider: " + currentServiceProvider, "GetAppointmentForConsultation", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Current Service Provider DOES NOT EXIST: " + currentServiceProvider, "GetAppointmentForConsultation", SeverityLevel.Error);
    }

    try {
        //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
        let response = await getCall({} as Array<IAppointmentData>, GetAppointmentForServiceProvider(appointmentId, currentServiceProvider.serviceProviderId), "GetAllAppointments");

        dispatch(SetLinearLoadingBarToggle(false))

        SetTrackTrace("Dispatch Set Selected Appointment" + response.data, "GetAppointmentForConsultation", SeverityLevel.Information);
        dispatch(SetSelectedAppointmentForConsultation(response.data));
        dispatch(GetCustomerForConsultation(response.data.customerId));
        dispatch(GetNextAndPreviousAppointmentForConsultation())
        dispatch(GetReports())
        dispatch(GetPrescriptions())
    } catch (error) {
        dispatch(SetFatalError("Appointment Not Found" + error))
    }
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

    try {
        let response = await getCall({} as Array<IAppointmentData>, GetCustomerForServiceProvider(customerId, currentServiceProvider.serviceProviderProfile.organisationId), "GetCustomerForConsultation");

        if (response) {
            SetTrackTrace("Dispatch Set Selected Customer" + response.data, "GetCustomerForConsultation", SeverityLevel.Information);
            dispatch(SetSelectedCustomerForConsultation(response.data));
        } else {
            dispatch(SetNonFatalError("Could not find this customer"))
        }
    } catch (error) {
        dispatch(SetNonFatalError("Could not find customer for this appointment"))
    }
};

export const GetNextAndPreviousAppointmentForConsultation = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

    SetTrackTrace("Enter Get Next and Previous Appointment Action", "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Information);

    const allAppointments = getState().AppointmentState.appointments;

    if (allAppointments) {
        SetTrackTrace("Get All Appointments From State Successs: " + allAppointments.length, "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Information);
    } else {
        SetTrackTrace("Get All Appointments From State Failed. ", "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Error);
    }

    const currentAppointment = getState().ConsultationState.currentAppointment;

    if (allAppointments) {
        SetTrackTrace("Get Current Appointment From State Successs. ", "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Information);
    } else {
        SetTrackTrace("Get Current Appointment From State Failed. ", "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Error);
    }

    const currentAppointmentIndex = getIndexOfAppointment(allAppointments, currentAppointment);

    if (allAppointments) {
        SetTrackTrace("Get Current Appointment Index: " + currentAppointmentIndex + " From State Successs. ", "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Information);
    } else {
        SetTrackTrace("Get Current Appointment Index Failed. ", "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Error);
    }

    const previousAppointment = allAppointments[currentAppointmentIndex! - 1];
    const nextAppointment = allAppointments[currentAppointmentIndex! + 1];

    if (previousAppointment) {
        SetTrackTrace("Previous Appointment Exists: ", "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Information);
    } else {
        SetTrackTrace("Previous Appointmnt Does Not Exist: ", "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Error);
    }

    if (nextAppointment) {
        SetTrackTrace("Next Appointment Exists: ", "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Information);
    } else {
        SetTrackTrace("Next Appointmnt Does Not Exist: ", "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Error);
    }

    //ADD ALL NULL CHECKS FOR INDEX AND OUT OF BOUNDS EXCEPTION
    dispatch(SetPreviousAppointmentConsultation(previousAppointment))
    dispatch(SetNextAppointmentForConsultation(nextAppointment))
}