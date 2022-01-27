import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "../Types/ActionType";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { deleteCall, getCall, postCall, putCall } from "../Http/http-helpers";
import { DeleteCustomerReportEndPoint, GetCustomerAllReportsEndPoint, GetCustomerReportEndPoint, SetCustomerReportEndPoint, SetCustomerStrayReportEndPoint } from "../Helpers/EndPointHelpers";
import IReportUploadData from "../Types/OutgoingDataModels/ReportUpload";
import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";
import { SetAllReportsForConsultation, SetReportsForConsultation } from "../Actions/ConsultationActions";
import { ConvertInputToFileOrBase64 } from "../Utils/GeneralUtils";
import { SetLinearLoadingBarToggle, SetNonFatalError } from "../Actions/Common/UIControlActions";
import { toast } from "react-toastify";
import { FilterAllAndCurrentReports } from "../Actions/ReportActions";

export const GetReports = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  let currentConsultationAppointment = getState().ConsultationState.currentAppointment

  try {
    let response = await getCall({} as Array<IReportIncomingData>, GetCustomerReportEndPoint(currentConsultationAppointment!.serviceRequestId), "GetReports");

    if (response) {
      dispatch(SetReportsForConsultation(response.data))
      dispatch(GetAllReportsForCustomer(currentConsultationAppointment?.organisationId ?? "", currentConsultationAppointment?.customerId ?? "", response.data))
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not get reports for this appointment"))
  }
}

export const GetAllReportsForCustomer = (organisationId: string, customerId: string, currentReports: IReportIncomingData[] | null): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  try {
    let response = await getCall({} as Array<IReportIncomingData>, GetCustomerAllReportsEndPoint(organisationId, customerId), "GetReports");

    if (response) {
      var filterReports = FilterAllAndCurrentReports(currentReports, response.data)
      dispatch(SetAllReportsForConsultation(filterReports))
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not get all reports for this patient"))
  }
}

export const UploadReportForConsultation = (file: any): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  dispatch(SetLinearLoadingBarToggle(true))

  let currentConsultationAppointment = getState().ConsultationState.currentAppointment

  var reportRequest = {
    AppointmentId: currentConsultationAppointment!.appointmentId,
    ServiceRequestId: currentConsultationAppointment!.serviceRequestId,
    File: await ConvertInputToFileOrBase64(file),
    FileName: "",
    FileType: "",
    Details: "",
    DetailsType: ""
  } as IReportUploadData

  SetTrackTrace("Enter Upload Report Action", "UploadReport", SeverityLevel.Information)

  try {
    let response = await postCall({} as any, SetCustomerReportEndPoint(), reportRequest, "UploadReport")

    if (response) {
      dispatch(GetReports());

      dispatch(SetLinearLoadingBarToggle(false))
      toast.success("Report Image Uploaded")
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not upload report image"))
  }

};

export const UploadReportAsStray = (file: any): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  dispatch(SetLinearLoadingBarToggle(true))

  let selectedPatient = getState().AddPatientState.customerProfile
  let currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider

  var reportRequest = {
    AppointmentId: "",
    ServiceRequestId: "",
    File: await ConvertInputToFileOrBase64(file),
    FileName: "",
    FileType: "",
    Details: "",
    DetailsType: ""
  } as IReportUploadData

  SetTrackTrace("Enter Upload Stray Report Action", "UploadReportAsStray", SeverityLevel.Information)

  try {
    let response = await postCall({} as any, SetCustomerStrayReportEndPoint(
      currentServiceProvider?.serviceProviderProfile.organisationId ?? "",
      currentServiceProvider?.serviceProviderId ?? "",
      selectedPatient.customerId),
      reportRequest,
      "UploadReport"
    )

    if (response) {
      dispatch(GetAllReportsForCustomer(
        currentServiceProvider?.serviceProviderProfile.organisationId ?? "",
        selectedPatient.customerId,
        null)
      );

      dispatch(SetLinearLoadingBarToggle(false))
      toast.success("Stray Report Image Uploaded")
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not upload stray report image"))
  }

};


export const DeleteReport = (reportToDelete: IReportIncomingData): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  dispatch(SetLinearLoadingBarToggle(true))

  let currentAppointment = getState().ConsultationState.currentAppointment

  SetTrackTrace("Enter Upload Report Action", "UploadReport", SeverityLevel.Information)

  try {
    let response = await deleteCall({} as any, DeleteCustomerReportEndPoint(currentAppointment!.serviceRequestId, reportToDelete.reportId), "DeleteReport")

    if (response) {
      dispatch(GetReports());

      dispatch(SetLinearLoadingBarToggle(false))
      toast.success("Report Image Deleted")
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not delete report image"))
  }
};

