import { Action } from "../Types/ActionType";
import IDenormalisedAppointmentData from "../Types/DeNormalisedAppointment";
import { ThunkAction } from "redux-thunk";
import http from "../http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import { AppointmentState, Appointment_Types } from "../Reducers/AppointmentsReducer";
import IAppointmentData from "../Types/Appointment";
import IOrganisationData from "../Types/Organisation";

function setAppointmentsHelper(appointments: Array<IDenormalisedAppointmentData>) {
  return {
    type: Appointment_Types.SET_LOCAL_APPOINTMENTS,
    payload: appointments
  };
}

function setFilteredAppointmentsHelper(
  selectedCategory: string,
  dates: Date[],
  appointments: Array<IDenormalisedAppointmentData>,
  selectedOrganisation?: IOrganisationData) {

  var filteredAppointments: Array<IDenormalisedAppointmentData> = new Array<IDenormalisedAppointmentData>();

  function checkForDateCompliance(appointment: IAppointmentData) {
    return (dates[0] <= new Date(appointment.scheduledAppointmentStartTime) && new Date(appointment.scheduledAppointmentStartTime) <= dates[1])
  }

  function checkForOrgCompliance(appointment: IAppointmentData) {
    if (selectedOrganisation != null) {
      //TODO: change identifying key to orgId not name. temporarily using orgName because orgId is not deserialised properly
      return appointment.organisationName == selectedOrganisation!.name
    } else {
      return appointment.organisationId.trim() == "" || appointment.organisationId == null
    }
  }

  appointments.forEach(appointment => {
    if (checkForDateCompliance(appointment.appointment) &&
      checkForOrgCompliance(appointment.appointment) &&
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
export const setFilteredAppointments = (
  selectedCategory: string,
  dates: Date[],
  appointments: Array<IDenormalisedAppointmentData>,
  selectedOrganisation?: IOrganisationData): Action => (setFilteredAppointmentsHelper(selectedCategory, dates, appointments, selectedOrganisation));

export const GetAllAppointments = (): ThunkAction<void, AppointmentState, null, Action> => async dispatch => {
  let headersContent = await GetHeadersHelper();
  let response = await http.get<Array<IDenormalisedAppointmentData>>("/Appointment", { headers: headersContent });
  console.log("APPOINTMENTS: " + response.data);
  dispatch(SetAppointments(response.data));
  dispatch(setFilteredAppointments("Total", [new Date(), new Date()], response.data)); //To set filtered as TOTAL each time page loads up
};