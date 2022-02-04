import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { getIndexOfAppointment } from "../Helpers/AppointmentHelpers";
import { SetNextAppointmentForConsultation, SetPreviousAppointmentConsultation } from "./ConsultationActions";
import { RootState } from "../store";
import SetTrackTrace from "../Telemetry/SetTrackTrace";

export const GetNextAndPreviousAppointmentForConsultation = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

    SetTrackTrace("Enter Get Next and Previous Appointment Action", "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Information);

    const allAppointments = getState().AppointmentState.appointments;

    if (allAppointments) {
        SetTrackTrace("Get All Appointments From State Successs: " + allAppointments.length, "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Information);
    } else {
        SetTrackTrace("Get All Appointments From State Failed. ", "GetNextAndPreviousAppointmentForConsultation", SeverityLevel.Error);
    }

    const currentAppointment = getState().ConsultationState.Appointment;

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
