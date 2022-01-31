import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { ThunkAction } from "redux-thunk";
import {
  GetAppointmentForServiceProvider,
  GetCustomerAllPrescriptionsEndPoint,
  GetCustomerAllReportsEndPoint,
  GetCustomerForServiceProvider,
} from "../Helpers/EndPointHelpers";
import { getCall } from "../Http/http-helpers";
import { RootState } from "../store";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { Action } from "../Types/ActionType";
import IAppointmentData from "../Types/IncomingDataModels/Appointment";
import {
  SetFatalError,
  SetLinearLoadingBarToggle,
  SetNonFatalError,
} from "../Actions/Common/UIControlActions";
import { GetPrescriptions } from "./PrescriptionActions";
import { GetReports } from "./ReportActions";
import { GetNextAndPreviousAppointmentForConsultation } from "../Actions/AppointmentsActions";
import {
  ClearAllValuesForConsultation,
  SetAllPrescriptionsForConsultation,
  SetAllReportsForConsultation,
  SetSelectedAppointmentForConsultation,
  SetSelectedCustomerForConsultation,
} from "../Actions/ConsultationActions";
import { FilterAllAndCurrentReports } from "../Actions/ReportActions";
import { FilterAllAndCurrentPrescriptions } from "../Actions/PrescriptionActions";
import { GetNotes, UploadNote } from "./NoteActions";

//Get consultation appointment
export const GetAppointmentForConsultation =
  (appointmentId: string): ThunkAction<void, RootState, null, Action> =>
  async (dispatch, getState) => {
    dispatch(ClearAllValuesForConsultation());
    dispatch(SetLinearLoadingBarToggle(true));

    SetTrackTrace(
      "Enter Get Appointment Action",
      "GetAppointmentForConsultation",
      SeverityLevel.Information
    );
    const currentServiceProvider =
      getState().CurrentServiceProviderState.serviceProvider!;

    if (currentServiceProvider) {
      SetTrackTrace(
        "Retrieved Current Service Provider: " + currentServiceProvider,
        "GetAppointmentForConsultation",
        SeverityLevel.Information
      );
    } else {
      SetTrackTrace(
        "Retrieved Current Service Provider DOES NOT EXIST: " +
          currentServiceProvider,
        "GetAppointmentForConsultation",
        SeverityLevel.Error
      );
    }

    try {
      //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
      let response = await getCall(
        {} as Array<IAppointmentData>,
        GetAppointmentForServiceProvider(
          appointmentId,
          currentServiceProvider.serviceProviderId
        ),
        "GetAllAppointments"
      );

      dispatch(SetLinearLoadingBarToggle(false));

      SetTrackTrace(
        "Dispatch Set Selected Appointment" + response.data,
        "GetAppointmentForConsultation",
        SeverityLevel.Information
      );
      dispatch(SetSelectedAppointmentForConsultation(response.data));
      dispatch(GetCustomerForConsultation(response.data.customerId));
      dispatch(GetNextAndPreviousAppointmentForConsultation());
      dispatch(GetReports());
      dispatch(GetPrescriptions());
      //dispatch(GetNotes())
    } catch (error) {
      dispatch(SetFatalError("Appointment Not Found" + error));
    }
  };

//Get consultation customer
export const GetCustomerForConsultation =
  (customerId: string): ThunkAction<void, RootState, null, Action> =>
  async (dispatch, getState) => {
    SetTrackTrace(
      "Enter Get Customer Action",
      "GetCustomerForConsultation",
      SeverityLevel.Information
    );
    const currentServiceProvider =
      getState().CurrentServiceProviderState.serviceProvider!;

    if (currentServiceProvider) {
      SetTrackTrace(
        "Retrieved Current Service Provider: " + currentServiceProvider,
        "GetCustomerForConsultation",
        SeverityLevel.Information
      );
    } else {
      SetTrackTrace(
        "Retrieved Current Service Provider DOES NOT EXIST: " +
          currentServiceProvider,
        "GetCustomerForConsultation",
        SeverityLevel.Error
      );
    }

    try {
      let response = await getCall(
        {} as Array<IAppointmentData>,
        GetCustomerForServiceProvider(
          customerId,
          currentServiceProvider.serviceProviderProfile.organisationId
        ),
        "GetCustomerForConsultation"
      );

      if (response) {
        SetTrackTrace(
          "Dispatch Set Selected Customer" + response.data,
          "GetCustomerForConsultation",
          SeverityLevel.Information
        );
        dispatch(SetSelectedCustomerForConsultation(response.data));
      } else {
        dispatch(SetNonFatalError("Could not find this customer"));
      }
    } catch (error) {
      dispatch(
        SetNonFatalError("Could not find customer for this appointment")
      );
    }
  };

export const GetAllReportsForCustomer =
  (): ThunkAction<void, RootState, null, Action> =>
  async (dispatch, getState) => {
    SetTrackTrace(
      "Enter Get All Reports For Customer Action",
      "GetAllReportsForCustomer",
      SeverityLevel.Information
    );
    const currentAppointment = getState().ConsultationState.currentAppointment!;
    const currentAppointmentReports =
      getState().ConsultationState.currentCustomerReports!;

    let response = await getCall(
      {} as Array<IAppointmentData>,
      GetCustomerAllReportsEndPoint(
        currentAppointment.organisationId,
        currentAppointment.customerId
      ),
      "GetAllReportsForCustomer"
    );

    if (response) {
      SetTrackTrace(
        "Dispatch Set All Reports For Customer" + response.data,
        "GetAllReportsForCustomer",
        SeverityLevel.Information
      );
      var allReportsToSet = FilterAllAndCurrentReports(
        currentAppointmentReports,
        response.data
      );
      dispatch(SetAllReportsForConsultation(allReportsToSet));
    } else {
      dispatch(SetNonFatalError("Could not get history of reports"));
    }
  };

export const GetAllPrescriptionsForCustomer =
  (): ThunkAction<void, RootState, null, Action> =>
  async (dispatch, getState) => {
    SetTrackTrace(
      "Enter Get All Prescriptions For Customer Action",
      "GetAllPrescriptionsForCustomer",
      SeverityLevel.Information
    );
    const currentAppointment = getState().ConsultationState.currentAppointment!;
    const currentAppointmentPrescriptions =
      getState().ConsultationState.currentCustomerPrescriptions;

    let response = await getCall(
      {} as Array<IAppointmentData>,
      GetCustomerAllPrescriptionsEndPoint(
        currentAppointment.organisationId,
        currentAppointment.customerId
      ),
      "GetAllPrescriptionsForCustomer"
    );

    if (response) {
      SetTrackTrace(
        "Dispatch Set All Prescriptions For Customer" + response.data,
        "GetAllPrescriptionsForCustomer",
        SeverityLevel.Information
      );
      var allPrescriptionsToSet = FilterAllAndCurrentPrescriptions(
        currentAppointmentPrescriptions,
        response.data
      );
      dispatch(SetAllPrescriptionsForConsultation(allPrescriptionsToSet));
    } else {
      dispatch(SetNonFatalError("Could not get history of prescriptions"));
    }
  };
