import { ConsultationTypes_Types } from '../Reducers/ConsultationReducer';
import { Action } from '../Types/ActionType';
import IAppointmentData from '../Types/IncomingDataModels/Appointment';
import ICustomerIncomingData from '../Types/IncomingDataModels/CustomerIncoming';
import { INoteIncomingData } from '../Types/IncomingDataModels/NoteIncoming';
import IPrescriptionIncomingData from '../Types/IncomingDataModels/PrescriptionIncoming';
import IReportIncomingData from '../Types/IncomingDataModels/ReportIncoming';

export function setSelectedAppointmentAction(appointment: IAppointmentData) {
    return {
        type: ConsultationTypes_Types.SET_CURRENT_APPOINTMENT,
        payload: appointment,
    };
}

function setSelectedCustomerAction(customer: ICustomerIncomingData) {
    return {
        type: ConsultationTypes_Types.SET_CURRENT_CUSTOMER,
        payload: customer,
    };
}

function setReportsAction(reports: IReportIncomingData[]) {
    return {
        type: ConsultationTypes_Types.SET_CURRENT_APPOINTMENT_ONLY_CUSTOMER_REPORTS,
        payload: reports,
    };
}

function setAllReportsAction(reports: IReportIncomingData[]) {
    return {
        type: ConsultationTypes_Types.SET_CURRENT_APPOINTMENT_ALL_CUSTOMER_REPORTS,
        payload: reports,
    };
}

function setPrescriptionsAction(prescriptions: IPrescriptionIncomingData[]) {
    return {
        type: ConsultationTypes_Types.SET_CURRENT_APPOINTMENT_ONLY_CUSTOMER_PRESCRIPTIONS,
        payload: prescriptions,
    };
}

function setAllPrescriptionsAction(prescriptions: IPrescriptionIncomingData[]) {
    return {
        type: ConsultationTypes_Types.SET_CURRENT_APPOINTMENT_ALL_CUSTOMER_PRESCRIPTIONS,
        payload: prescriptions,
    };
}

function setNotesActions(notes: INoteIncomingData[]) {
    return {
        type: ConsultationTypes_Types.SET_CURRENT_APPOINTMENT_NOTES,
        payload: notes,
    };
}

function setAllNotesActions(notes: INoteIncomingData[]) {
    return {
        type: ConsultationTypes_Types.SET_ALL_CUSTOMER_NOTES,
        payload: notes,
    };
}

function setPreviousAppointmentAction(appointment: IAppointmentData) {
    return {
        type: ConsultationTypes_Types.SET_PREVIOUS_APPOINTMENT,
        payload: appointment,
    };
}

function setNextAppointmentAction(appointment: IAppointmentData) {
    return {
        type: ConsultationTypes_Types.SET_NEXT_APPOINTMENT,
        payload: appointment,
    };
}

function clearAllValuesForConsultationAction() {
    return {
        type: ConsultationTypes_Types.CLEAR_ALL_CONSULTATION_STATES,
        payload: null,
    };
}

export const SetSelectedAppointmentForConsultation = (
    appointment: IAppointmentData,
): Action => setSelectedAppointmentAction(appointment);
export const SetSelectedCustomerForConsultation = (
    customer: ICustomerIncomingData,
): Action => setSelectedCustomerAction(customer);
export const SetReportsForConsultation = (
    reports: IReportIncomingData[],
): Action => setReportsAction(reports);
export const SetPrescriptionsForConsultation = (
    prescriptions: IPrescriptionIncomingData[],
): Action => setPrescriptionsAction(prescriptions);
export const SetNotesForConsultation = (notes: INoteIncomingData[]): Action =>
    setNotesActions(notes);
export const SetAllNotesForCustomer = (notes: INoteIncomingData[]): Action =>
    setAllNotesActions(notes);
export const SetPreviousAppointmentConsultation = (
    appointment: IAppointmentData,
): Action => setPreviousAppointmentAction(appointment);
export const SetNextAppointmentForConsultation = (
    appointment: IAppointmentData,
): Action => setNextAppointmentAction(appointment);
export const SetAllReportsForConsultation = (
    reports: IReportIncomingData[],
): Action => setAllReportsAction(reports);
export const SetAllPrescriptionsForConsultation = (
    prescriptions: IPrescriptionIncomingData[],
): Action => setAllPrescriptionsAction(prescriptions);
export const ClearAllValuesForConsultation = (): Action =>
    clearAllValuesForConsultationAction();
