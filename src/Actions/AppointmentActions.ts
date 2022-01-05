import { Action } from "../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import http from "../Http/http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import { Appointment_Types } from "../Reducers/AppointmentsReducer";
import { SetDatesWithAppointmentsRange } from "./SelectedDateActions";
import { RootState } from "../store";
import filterAppointments from "../Helpers/AppointmentHelpers";
import { GetServiceProviderAppointmentsInOrganisationEndPoint } from "../Helpers/EndPointHelpers";
import IAppointmentData from "../Types/ClientDataModels/Appointment";
import getCall from "../Http/http-helpers";

//RETURN APPOINTMENT ACTION TYPES
function setAppointmentsAction(appointments: Array<IAppointmentData>) {
  return {
    type: Appointment_Types.SET_LOCAL_APPOINTMENTS,
    payload: appointments
  };
}

function setFilteredAppointmentsAction(appointments: Array<IAppointmentData>) {
  return {
    type: Appointment_Types.SET_LOCAL_FILTERED_APPOINTMENTS,
    payload: appointments
  };
}
//END RETURN APPOINTMENT ACTION TYPES

export const SetAppointments = (appointments: Array<IAppointmentData>): Action => (setAppointmentsAction(appointments));

export const setFilteredAppointments = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
  var appointments = getState().AppointmentState.appointments
  var selectedDates = getState().SelectedDatesState.selectedDateRage
  var filteredAppointments = filterAppointments(selectedDates, appointments)

  dispatch(setFilteredAppointmentsAction(filteredAppointments));
};

//Get all appointments for currently logged in doctor.
export const GetAllAppointments = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
  const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

  //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
  let response = await getCall(typeof Array<IAppointmentData>(), GetServiceProviderAppointmentsInOrganisationEndPoint(currentServiceProvider.organisationId, [currentServiceProvider.serviceProviderId]));

  dispatch(SetAppointments(response.data));
  dispatch(SetDatesWithAppointmentsRange(response.data));
  //TODO: Check if this is proper design to set filtered appointments
  console.log("GETTING ALL FILTERED APPOINTMENTSBRUH")
  dispatch(setFilteredAppointments());
};