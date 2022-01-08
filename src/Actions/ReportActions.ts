import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "../Types/ActionType";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { getCall, putCall } from "../Http/http-helpers";
import { GetCustomerReportEndPoint, SetCustomerReportEndPoint } from "../Helpers/EndPointHelpers";
import IReportUploadData from "../Types/OutgoingDataModels/ReportUpload";
import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";
import { SetReportsForConsultation } from "./ConsultationActions";
import { fileToBase64 } from "../Utils/GeneralUtils";

export const GetReports = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  let currentConsultationAppointment = getState().ConsultationState.currentAppointment

  let response = await getCall({} as Array<IReportIncomingData>, GetCustomerReportEndPoint(currentConsultationAppointment!.customerId, currentConsultationAppointment!.appointmentId), "GetReports");

  if (response) {
    dispatch(SetReportsForConsultation(response.data))
  }
}

export const UploadReport = (report: File): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

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

  let response = await putCall({} as any, SetCustomerReportEndPoint(currentConsultationAppointment!.customerId), reportRequest, "UploadReport")

  if (response) {
    dispatch(GetReports());
  }
};