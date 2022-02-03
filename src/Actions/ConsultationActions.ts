import { ConsultationTypes_Types } from "../Reducers/ConsultationReducer";
import { Action } from "../Types/ActionType";
import IAppointmentData from "../Types/IncomingDataModels/Appointment";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { INoteIncomingData } from "../Types/IncomingDataModels/NoteIncoming";
import IPrescriptionIncomingData from "../Types/IncomingDataModels/PrescriptionIncoming";
import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";

export function setSelectedAppointmentAction(appointment: IAppointmentData) {
    return {
        type: ConsultationTypes_Types.SET_APPOINTMENT,
        payload: appointment
    };
}

function setReportsAction(reports: IReportIncomingData[]) {
    return {
        type: ConsultationTypes_Types.SET_APPOINTMENT_REPORTS,
        payload: reports
    };
}

function setPrescriptionsAction(prescriptions: IPrescriptionIncomingData[]) {
    return {
        type: ConsultationTypes_Types.SET_APPOINTMENT_PRESCRIPTIONS,
        payload: prescriptions
    };
}

function setNotesActions(notes: INoteIncomingData[]) {
    return {
        type: ConsultationTypes_Types.SET_APPOINTMENT_NOTES,
        payload: notes
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

function clearAllValuesForConsultationAction () {
    return {
        type: ConsultationTypes_Types.CLEAR_ALL_CONSULTATION_STATES,
        payload: null
    };
}

export const SetSelectedAppointmentForConsultation = (appointment: IAppointmentData): Action => (setSelectedAppointmentAction(appointment));
export const SetReportsForConsultation = (reports: IReportIncomingData[]): Action => (setReportsAction(reports));
export const SetPrescriptionsForConsultation = (prescriptions: IPrescriptionIncomingData[]): Action => (setPrescriptionsAction(prescriptions));
export const SetNotesForConsultation = (notes: INoteIncomingData[]): Action => (setNotesActions(notes));
export const SetPreviousAppointmentConsultation = (appointment: IAppointmentData): Action => (setPreviousAppointmentAction(appointment));
export const SetNextAppointmentForConsultation = (appointment: IAppointmentData): Action => (setNextAppointmentAction(appointment));
export const ClearAllValuesForConsultation = (): Action => (clearAllValuesForConsultationAction());
