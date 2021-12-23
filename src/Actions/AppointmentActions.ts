import { Action } from "../Types/ActionType";
import IDenormalisedAppointmentData from "../Types/DeNormalisedAppointment";
import { ThunkAction } from "redux-thunk";
import http from "../http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import { AppointmentState, Appointment_Types } from "../Reducers/AppointmentsReducer";
import IAppointmentData from "../Types/Appointment";

function setAppointmentsHelper(appointments: Array<IDenormalisedAppointmentData>) {
  return {
    type: Appointment_Types.SET_LOCAL_APPOINTMENTS,
    payload: appointments
  };
}

function setFilteredAppointmentsHelper(selectedCategory: string, dates: Date[], appointments: Array<IDenormalisedAppointmentData>) {
  var filteredAppointments: Array<IDenormalisedAppointmentData> = new Array<IDenormalisedAppointmentData>();

  console.log("NEW SET OF LOGS: " + dates)

  function checkForDateCompliance(appointment: IAppointmentData) {
    return (dates[0] <= new Date(appointment.scheduledAppointmentStartTime) && new Date(appointment.scheduledAppointmentStartTime) <= dates[1])
  }

  appointments.forEach(appointment => {
    if (checkForDateCompliance(appointment.appointment) &&
      (appointment.appointment.status == selectedCategory || selectedCategory == "Total")) {
      console.log(new Date(appointment.appointment.actualAppointmentStartTime))
      filteredAppointments.push(appointment);
    }
  });

  return {
    type: Appointment_Types.SET_LOCAL_FILTERED_APPOINTMENTS,
    payload: filteredAppointments
  };
}

export const SetAppointments = (appointments: Array<IDenormalisedAppointmentData>): Action => (setAppointmentsHelper(appointments));
export const setFilteredAppointments = (selectedCategory: string, dates: Date[], appointments: Array<IDenormalisedAppointmentData>): Action => (setFilteredAppointmentsHelper(selectedCategory, dates, appointments));

export const GetAllAppointments = (): ThunkAction<void, AppointmentState, null, Action> => async dispatch => {
  let headersContent = await GetHeadersHelper();
  let response = await http.get<Array<IDenormalisedAppointmentData>>("/Appointment", { headers: headersContent });
  console.log("APPOINTMENTS: " + response.data);
  dispatch(SetAppointments(response.data));
  dispatch(setFilteredAppointments("Total", [new Date(), new Date()], response.data)); //To set filtered as TOTAL each time page loads up
};