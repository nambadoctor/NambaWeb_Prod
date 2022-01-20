import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "../Types/ActionType";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { deleteCall, getCall, postCall, putCall } from "../Http/http-helpers";
import { DeleteCustomerReportEndPoint, GetCustomerReportEndPoint, SetCustomerReportEndPoint } from "../Helpers/EndPointHelpers";
import IReportUploadData from "../Types/OutgoingDataModels/ReportUpload";
import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";
import { SetReportsForConsultation } from "../Actions/ConsultationActions";
import { fileToBase64 } from "../Utils/GeneralUtils";
import { SetLinearLoadingBarToggle, SetNonFatalError } from "../Actions/Common/UIControlActions";
import { toast } from "react-toastify";

export const GetReports = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  let currentConsultationAppointment = getState().ConsultationState.currentAppointment

  try {
    let response = await getCall({} as Array<IReportIncomingData>, GetCustomerReportEndPoint(currentConsultationAppointment!.serviceRequestId), "GetReports");

    if (response) {
      dispatch(SetReportsForConsultation(response.data))
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not get reports for this appointment"))
  }
}

export const UploadReportFromFile = (report: File): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  dispatch(SetLinearLoadingBarToggle(true))

  let currentConsultationAppointment = getState().ConsultationState.currentAppointment

  var reportRequest = {
    AppointmentId: currentConsultationAppointment!.appointmentId,
    ServiceRequestId: currentConsultationAppointment!.serviceRequestId,
    File: await fileToBase64(report),
    FileName: report.name,
    FileType: report.type,
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

export const UploadReportFromBase64String = (base64Report: string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  dispatch(SetLinearLoadingBarToggle(true))

  let currentConsultationAppointment = getState().ConsultationState.currentAppointment

  var reportRequest = {
    AppointmentId: currentConsultationAppointment!.appointmentId,
    ServiceRequestId: currentConsultationAppointment!.serviceRequestId,
    File: base64Report,
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

