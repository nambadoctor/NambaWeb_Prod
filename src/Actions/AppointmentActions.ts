import { Action } from "../Types/ActionType";
import IDenormalisedAppointmentData from "../Types/DeNormalisedAppointment";
import { ThunkAction } from "redux-thunk";
import http from "../http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import { AppointmentState, Appointment_Types } from "../Reducers/AppointmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store";

function setAppointmentsHelper(appointments: Array<IDenormalisedAppointmentData>) {
  return {
    type: Appointment_Types.SET_LOCAL_APPOINTMENTS,
    payload: appointments
  };
}

function setCategoryFilteredAppointmentsHelper(selectedCategory: string, appointments: Array<IDenormalisedAppointmentData>) {
  var filteredAppointments: Array<IDenormalisedAppointmentData> = new Array<IDenormalisedAppointmentData>();

  if (selectedCategory == "Total") {
    filteredAppointments = appointments;
  } else {
    appointments.forEach(appointment => {
      if (appointment.appointment.status == selectedCategory) {
        filteredAppointments.push(appointment);
      }
    });
  }

  return {
    type: Appointment_Types.SET_LOCAL_FILTERED_APPOINTMENTS,
    payload: filteredAppointments
  };
}

export const SetAppointments = (appointments: Array<IDenormalisedAppointmentData>): Action => (setAppointmentsHelper(appointments));
export const setCategoryFilteredAppointments = (selectedCategory: string, appointments: Array<IDenormalisedAppointmentData>): Action => (setCategoryFilteredAppointmentsHelper(selectedCategory, appointments));

export const GetAllAppointments = (): ThunkAction<void, AppointmentState, null, Action> => async dispatch => {
  let headersContent = await GetHeadersHelper();
  let response = await http.get<Array<IDenormalisedAppointmentData>>("/Appointment", { headers: headersContent });
  console.log("APPOINTMENTS: " + response.data);
  dispatch(SetAppointments(response.data));
  dispatch(setCategoryFilteredAppointments("Total", response.data)); //To set filtered as TOTAL each time page loads up
};