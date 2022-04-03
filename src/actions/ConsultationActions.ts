import { ConsultationTypes_Types } from '../reducers/ConsultationReducer';
import { Action } from '../types/ActionType';
import IAppointmentData from '../types/IncomingDataModels/Appointment';

export function setSelectedAppointmentAction(appointment: IAppointmentData) {
    return {
        type: ConsultationTypes_Types.SET_APPOINTMENT,
        payload: appointment,
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
export const SetPreviousAppointmentConsultation = (
    appointment: IAppointmentData,
): Action => setPreviousAppointmentAction(appointment);
export const SetNextAppointmentForConsultation = (
    appointment: IAppointmentData,
): Action => setNextAppointmentAction(appointment);
export const ClearAllValuesForConsultation = (): Action =>
    clearAllValuesForConsultationAction();
