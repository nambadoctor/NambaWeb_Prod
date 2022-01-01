import { Action } from "../Types/ActionType";
import IDenormalisedAppointmentData from "../Types/DeNormalisedAppointment";
import { ThunkAction } from "redux-thunk";
import http from "../http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import { Appointment_Types } from "../Reducers/AppointmentsReducer";
import { SetDatesWithAppointmentsRange } from "./SelectedDateActions";
import { RootState } from "../store";
import filterAppointments from "../Helpers/AppointmentHelpers";

//RETURN APPOINTMENT ACTION TYPES
function setAppointmentsAction(appointments: Array<IDenormalisedAppointmentData>) {
  return {
    type: Appointment_Types.SET_LOCAL_APPOINTMENTS,
    payload: appointments
  };
}

function setFilteredAppointmentsAction(appointments: Array<IDenormalisedAppointmentData>) {
  return {
    type: Appointment_Types.SET_LOCAL_FILTERED_APPOINTMENTS,
    payload: appointments
  };
}
//END RETURN APPOINTMENT ACTION TYPES

export const SetAppointments = (appointments: Array<IDenormalisedAppointmentData>): Action => (setAppointmentsAction(appointments));


export const setFilteredAppointments = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
  var selectedOrg = getState().OrgState.selectedOrganisation
  var appointments = getState().AppointmentState.appointments
  var selectedDates = getState().SelectedDatesState.selectedDateRage
  var filteredAppointments = filterAppointments(selectedDates, appointments, selectedOrg)

  dispatch(setFilteredAppointmentsAction(filteredAppointments));
  dispatch(SetDatesWithAppointmentsRange(filteredAppointments));
};


export const GetAllAppointments = (): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
  let headersContent = await GetHeadersHelper();
  let response = await http.get<Array<IDenormalisedAppointmentData>>("/Appointment", { headers: headersContent });


  dispatch(SetAppointments(response.data));

  //TODO: Check if this is proper design to set filtered appointments
  dispatch(setFilteredAppointments());
};