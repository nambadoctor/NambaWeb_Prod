import { Action } from "../Types/ActionType";
import { SelectedDateReducer } from "../Reducers/SelectedDateReducer";
import IAppointmentData from "../Types/ClientDataModels/Appointment";

function setAppointmentCategoryHelper(dates: Date[]) {
    return {
        type: SelectedDateReducer.SET_LOCAL_SELECTED_DATES,
        payload: dates
    };
}

function setDatesWithAppointmentsRangeHelper(appointments: IAppointmentData[]) {
    var datesToSet:Date[] = [];

    appointments.forEach(appointment => {
        var appointmentDate = new Date(appointment.scheduledAppointmentStartTime)
        if (!datesToSet.includes(appointmentDate)) {
            datesToSet.push(appointmentDate)
        }
    });

    return {
        type: SelectedDateReducer.SET_LOCAL_DATES_WITH_APPOINTMENTS,
        payload: datesToSet
    };
}

export const SetSelectedDateRange = (dates: Date[]): Action => (setAppointmentCategoryHelper(dates));
export const SetDatesWithAppointmentsRange = (appointments: IAppointmentData[]): Action => (setDatesWithAppointmentsRangeHelper(appointments));
