import { ConsultationTypes_Types } from "../Reducers/ConsultationReducer";
import { Action } from "../Types/ActionType";
import IAppointmentData from "../Types/IncomingDataModels/Appointment";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import IPrescriptionIncomingData from "../Types/IncomingDataModels/PrescriptionIncoming";
import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";

export function setSelectedAppointmentAction(appointment: IAppointmentData) {
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


