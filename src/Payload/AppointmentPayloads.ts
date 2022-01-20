import { Appointment_Types } from "../Reducers/AppointmentsReducer";
import { Action } from "../Types/ActionType";
import IAppointmentData from "../Types/IncomingDataModels/Appointment";

export const SetAppointments = (appointments: Array<IAppointmentData>): Action => ({
    type: Appointment_Types.SET_APPOINTMENT_STATE_APPOINTMENTS,
    payload: appointments
});

export function SetFilteredAppointmentsAction(appointments: Array<IAppointmentData>) {
    return {
        type: Appointment_Types.SET_APPOINTMENT_STATE_FILTERED_APPOINTMENTS,
        payload: appointments
    };
}
