import { Action } from "../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import http from "../http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import { Appointment_Types } from "../Reducers/AppointmentsReducer";
import { SetDatesWithAppointmentsRange } from "./SelectedDateActions";
import { RootState } from "../store";
import filterAppointments from "../Helpers/AppointmentHelpers";
import { GetServiceProviderAppointmentsInOrganisation } from "../Helpers/EndPointHelpers";
import IAppointmentData from "../Types/ClientDataModels/Appointment";

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
  var selectedOrg = getState().OrgState.selectedOrganisation
  var appointments = getState().AppointmentState.appointments
  var selectedDates = getState().SelectedDatesState.selectedDateRage
  var filteredAppointments = filterAppointments(selectedDates, appointments, selectedOrg)

  dispatch(setFilteredAppointmentsAction(filteredAppointments));
};

//Get all appointments for currently logged in doctor.
export const GetAllAppointments = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
  const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

  //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL

  let headersContent = await GetHeadersHelper();
  let response = await http.get<Array<IAppointmentData>>(GetServiceProviderAppointmentsInOrganisation(currentServiceProvider.organisationId, [currentServiceProvider.serviceProviderId]), { headers: headersContent });

  dispatch(SetAppointments(response.data));
  dispatch(SetDatesWithAppointmentsRange(response.data));
  //TODO: Check if this is proper design to set filtered appointments
  dispatch(setFilteredAppointments());
};