import { Action } from "../Types/ActionType";
import IDenormalisedAppointmentData from "../Types/DeNormalisedAppointment";
import { ThunkAction } from "redux-thunk";
import http from "../http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import { AppointmentState, Appointment_Types } from "../Reducers/AppointmentsReducer";
import IAppointmentData from "../Types/Appointment";
import IOrganisationData from "../Types/Organisation";
import { isDatesEqual } from "../Utils/GeneralUtils";

function setAppointmentsHelper(appointments: Array<IDenormalisedAppointmentData>) {
  return {
    type: Appointment_Types.SET_LOCAL_APPOINTMENTS,
    payload: appointments
  };
}

function setFilteredAppointmentsHelper(
  dates: Date[],
  appointments: Array<IDenormalisedAppointmentData>,
  selectedOrganisation?: IOrganisationData) {

  var filteredAppointments: Array<IDenormalisedAppointmentData> = new Array<IDenormalisedAppointmentData>();

  function checkForDateCompliance(appointment: IAppointmentData) {
    var appointmentDate = new Date(appointment.scheduledAppointmentStartTime)
    var check = isDatesEqual(dates[0], appointmentDate)
    return check;
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
      checkForOrgCompliance(appointment.appointment)) {
      //CHECK FOR CATEGORY TYPE IS DONE IN THE MAPPING IN APPOINTMENTSTABLE.TSX

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
  dates: Date[],
  appointments: Array<IDenormalisedAppointmentData>,
  selectedOrganisation?: IOrganisationData): Action => (setFilteredAppointmentsHelper(dates, appointments, selectedOrganisation));

export const GetAllAppointments = (): ThunkAction<void, AppointmentState, null, Action> => async dispatch => {
  let headersContent = await GetHeadersHelper();
  let response = await http.get<Array<IDenormalisedAppointmentData>>("/Appointment", { headers: headersContent });
  console.log("APPOINTMENTS: " + response.data);
  dispatch(SetAppointments(response.data));
  dispatch(setFilteredAppointments([new Date(), new Date()], response.data)); //To set filtered as TOTAL each time page loads up
};