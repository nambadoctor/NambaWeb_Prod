import { Action } from "../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import { Appointment_Types } from "../Reducers/AppointmentsReducer";
import { SetDatesWithAppointmentsRange } from "../Actions/SelectedDateActions";
import { RootState } from "../store";
import { filterAppointments } from "../Helpers/AppointmentHelpers";
import { CancelAppointmentEndPoint, GetServiceProviderAppointmentsInOrganisationEndPoint, SetNewAppointmentEndPoint } from "../Helpers/EndPointHelpers";
import IAppointmentData from "../Types/IncomingDataModels/Appointment";
import { getCall, postCall, putCall } from "../Http/http-helpers";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import IAppointmentOutgoing from "../Types/OutgoingDataModels/AppointmentOutgoing";
import { SetFatalError, SetLinearLoadingBarToggle, SetNonFatalError } from "../Actions/Common/UIControlActions";
import { SetAppointmentsLoadedState } from "../Actions/LoadedStatesActions";
import { SetAddPatientIsMakingDoneCall } from "../Actions/AddPatientActions";
import { toast } from "react-toastify";
import { SetAppointments, SetFilteredAppointmentsAction } from "../Payload/AppointmentPayloads";

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
  dispatch(SetFilteredAppointmentsAction(filteredAppointments));
  dispatch(SetAppointmentsLoadedState(true))
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

  try {
    //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
    let response = await getCall({} as Array<IAppointmentData>, GetServiceProviderAppointmentsInOrganisationEndPoint(currentServiceProvider.serviceProviderProfile.organisationId, [currentServiceProvider.serviceProviderId]), "GetAllAppointments");

    SetTrackTrace("Dispatch Set All Appointments" + response.data, "GetAllAppointments", SeverityLevel.Information);
    dispatch(SetAppointments(response.data));

    SetTrackTrace("Dispatch Set Dates With Appointments Range Helper", "GetAllAppointments", SeverityLevel.Information);
    dispatch(SetDatesWithAppointmentsRange(response.data));

    //TODO: Check if this is proper design to set filtered appointments
    SetTrackTrace("Dispatch Set Filtered Appointments Helper", "GetAllAppointments", SeverityLevel.Information);
    dispatch(setFilteredAppointments());
  } catch (error) {
    dispatch(SetFatalError("Could not retrieve your appointments!"))
  }
};

export const SetAppointment = (appointment: IAppointmentOutgoing): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  dispatch(SetLinearLoadingBarToggle(true))

  SetTrackTrace("Enter Set New Appointments Action", "SetNewAppointment", SeverityLevel.Information);

  try {
    //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
    let response = await postCall({} as any, SetNewAppointmentEndPoint(), appointment, "SetNewAppointment")

    if (response) {
      dispatch(SetAddPatientIsMakingDoneCall(false))
      dispatch(SetLinearLoadingBarToggle(false))
      dispatch(GetAllAppointments())
      toast.success("Appointment Set Successfully")
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not create appointment"))
  }
};


//TODO: CHANGE IAPPOINTMENTDATA TO IAPPOINTMENTOUTGOINGDATA. Need to write converter for this!
export const CancelAppointment = (appointment: IAppointmentData): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  dispatch(SetLinearLoadingBarToggle(true))

  SetTrackTrace("Enter Cancel Appointments Action", "CancelAppointment", SeverityLevel.Information);

  try {
    //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
    let response = await putCall({} as any, CancelAppointmentEndPoint(), appointment, "CancelAppointment")

    if (response) {
      dispatch(SetAddPatientIsMakingDoneCall(false))
      dispatch(SetLinearLoadingBarToggle(false))
      dispatch(GetAllAppointments())
      toast.success("Appointment Cancelled Successfully")
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not CancelAppointment"))
  }
};