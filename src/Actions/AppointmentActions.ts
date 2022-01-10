import { Action } from "../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import { Appointment_Types } from "../Reducers/AppointmentsReducer";
import { SetDatesWithAppointmentsRange } from "./SelectedDateActions";
import { RootState } from "../store";
import { filterAppointments } from "../Helpers/AppointmentHelpers";
import { GetServiceProviderAppointmentsInOrganisationEndPoint, SetNewAppointmentEndPoint } from "../Helpers/EndPointHelpers";
import IAppointmentData from "../Types/IncomingDataModels/Appointment";
import { getCall, putCall } from "../Http/http-helpers";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import IAppointmentOutgoing from "../Types/OutgoingDataModels/AppointmentOutgoing";

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
  SetTrackTrace("Entered Filter Appointments Helper", "", SeverityLevel.Information);
  var appointments = getState().AppointmentState.appointments
  var selectedDates = getState().SelectedDatesState.selectedDateRage

  if (appointments) {
    SetTrackTrace("Getting appointments from state SUCCESS: " + appointments.length, "SetFilteredAppointments", SeverityLevel.Information);
  } else {
    SetTrackTrace("Getting appointments from state FAILED", "SetFilteredAppointments", SeverityLevel.Error);
  }

  if (selectedDates) {
    SetTrackTrace("Getting selected dates from state SUCCESS: " + selectedDates.length, "SetFilteredAppointments", SeverityLevel.Information);
  } else {
    SetTrackTrace("Getting selected dates from state FAILED", "SetFilteredAppointments", SeverityLevel.Error);
  }

  var filteredAppointments = filterAppointments(selectedDates, appointments)

  SetTrackTrace("Dispatch Set Filtered Appointments Action: filteredAppointmentsLength: " + filteredAppointments.length, "SetFilteredAppointments", SeverityLevel.Information);
  dispatch(setFilteredAppointmentsAction(filteredAppointments));
};

//Get all appointments for currently logged in doctor.
export const GetAllAppointments = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
  SetTrackTrace("Enter Get All Appointments Action", "GetAllAppointments", SeverityLevel.Information);
  const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

  if (currentServiceProvider) {
    SetTrackTrace("Retrieved Current Service Provider: " + currentServiceProvider, "GetAllAppointments", SeverityLevel.Information);
  } else {
    SetTrackTrace("Retrieved Current Service Provider DOES NOT EXIST: " + currentServiceProvider, "GetAllAppointments", SeverityLevel.Error);
  }

  //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
  let response = await getCall({} as Array<IAppointmentData>, GetServiceProviderAppointmentsInOrganisationEndPoint(currentServiceProvider.organisationId, [currentServiceProvider.serviceProviderId]), "GetAllAppointments");

  SetTrackTrace("Dispatch Set All Appointments" + response.data, "GetAllAppointments", SeverityLevel.Information);
  dispatch(SetAppointments(response.data));

  SetTrackTrace("Dispatch Set Dates With Appointments Range Helper", "GetAllAppointments", SeverityLevel.Information);
  dispatch(SetDatesWithAppointmentsRange(response.data));

  //TODO: Check if this is proper design to set filtered appointments
  SetTrackTrace("Dispatch Set Filtered Appointments Helper", "GetAllAppointments", SeverityLevel.Information);
  dispatch(setFilteredAppointments());
};

export const SetNewAppointment = (appointment: IAppointmentOutgoing): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
  SetTrackTrace("Enter Set New Appointments Action", "GetAllAppointments", SeverityLevel.Information);

  //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
  let response = await putCall({} as any, SetNewAppointmentEndPoint(), appointment, "GetAllAppointments")

  if (response) {
    dispatch(GetAllAppointments())
  }

};