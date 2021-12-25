import { Action } from "../Types/ActionType";
import { SelectedDateReducer } from "../Reducers/SelectedDateReducer";
import IDeNormalisedAppointmentData from "../Types/DeNormalisedAppointment";

function setAppointmentCategoryHelper(dates: Date[]) {
    return {
        type: SelectedDateReducer.SET_LOCAL_SELECTED_DATES,
        payload: dates
    };
}

function setDatesWithAppointmentsRangeHelper(appointments: IDeNormalisedAppointmentData[]) {
    var datesToSet:Date[] = [];

    appointments.forEach(appointment => {
        var appointmentDate = new Date(appointment.appointment.scheduledAppointmentStartTime)
        if (!datesToSet.includes(appointmentDate)) {
            datesToSet.push(appointmentDate)
        }
    });

    console.log("DATES WITH APPOINTMENTS: " + datesToSet)

    return {
        type: SelectedDateReducer.SET_LOCAL_DATES_WITH_APPOINTMENTS,
        payload: datesToSet
    };
}

export const SetSelectedDateRange = (dates: Date[]): Action => (setAppointmentCategoryHelper(dates));
export const SetDatesWithAppointmentsRange = (appointments: IDeNormalisedAppointmentData[]): Action => (setDatesWithAppointmentsRangeHelper(appointments));
