import { Action } from "../Types/ActionType";
import IDenormalisedAppointmentData from "../Types/DeNormalisedAppointment";
import {ThunkAction} from "redux-thunk";
import http from "../http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import { AppointmentState, Appointment_Types } from "../Reducers/AppointmentsReducer";

function setAppointmentsHelper (appointments:Array<IDenormalisedAppointmentData>) {
  return {
    type: Appointment_Types.SET_LOCAL_APPOINTMENTS,
    payload: appointments
  };
}

export const SetAppointments = (appointments:Array<IDenormalisedAppointmentData>): Action => (setAppointmentsHelper(appointments));

export const GetAllAppointments = (): ThunkAction<void, AppointmentState, null, Action> => async dispatch => {
  let headersContent = await GetHeadersHelper();
  let response = await http.get<Array<IDenormalisedAppointmentData>>("/Appointment", {headers : headersContent});
  console.log("APPOINTMENTS: " + response.data)
  dispatch(SetAppointments(response.data));
};
 