import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "../Types/ActionType";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { deleteCall, getCall, putCall } from "../Http/http-helpers";
import { DeleteCustomerPrescriptionEndPoint, GetCustomerPrescriptionEndPoint, SetCustomerPrescriptionEndPoint } from "../Helpers/EndPointHelpers";
import { SetPrescriptionsForConsultation } from "./ConsultationActions";
import { fileToBase64 } from "../Utils/GeneralUtils";
import IPrescriptionIncomingData from "../Types/IncomingDataModels/PrescriptionIncoming";
import { IPrescriptionUploadData } from "../Types/OutgoingDataModels/PrescriptionUpload";
import { SetNonFatalError } from "./Common/UIControlActions";

export const GetPrescriptions = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  let currentConsultationAppointment = getState().ConsultationState.currentAppointment

  try {
    let response = await getCall({} as Array<IPrescriptionIncomingData>, GetCustomerPrescriptionEndPoint(currentConsultationAppointment!.customerId, currentConsultationAppointment!.appointmentId), "GetPrescriptions");

    if (response) {
      dispatch(SetPrescriptionsForConsultation(response.data))
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not get prescription for this appointment"))
  }
}

export const UploadPrescriptionFromFile = (prescription: File): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  let currentConsultationAppointment = getState().ConsultationState.currentAppointment

  var prescriptionRequest = {
    AppointmentId: currentConsultationAppointment!.appointmentId,
    ServiceRequestId: currentConsultationAppointment!.serviceRequestId,
    File: await fileToBase64(prescription),
    FileName: prescription.name,
    FileType: prescription.type,
    Details: "",
    DetailsType: ""
  } as IPrescriptionUploadData

  SetTrackTrace("Enter Upload Prescription Action", "UploadPrescription", SeverityLevel.Information)

  try {
    let response = await putCall({} as any, SetCustomerPrescriptionEndPoint(currentConsultationAppointment!.customerId), prescriptionRequest, "UploadPrescription")

    if (response) {
      dispatch(GetPrescriptions());
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not upload prescription image"))
  }
};

export const UploadPrescriptionFromBase64String = (base64Prescription: string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  let currentConsultationAppointment = getState().ConsultationState.currentAppointment

  var prescriptionRequest = {
    AppointmentId: currentConsultationAppointment!.appointmentId,
    ServiceRequestId: currentConsultationAppointment!.serviceRequestId,
    File: base64Prescription,
    FileName: "",
    FileType: "",
    Details: "",
    DetailsType: ""
  } as IPrescriptionUploadData

  SetTrackTrace("Enter Upload Prescription Action", "UploadPrescription", SeverityLevel.Information)


  try {
    let response = await putCall({} as any, SetCustomerPrescriptionEndPoint(currentConsultationAppointment!.customerId), prescriptionRequest, "UploadPrescription")

    if (response) {
      dispatch(GetPrescriptions());
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not upload prescription image"))
  }
};

export const DeletePrescription = (prescriptionToDelete: IPrescriptionIncomingData): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  let currentAppointment = getState().ConsultationState.currentAppointment

  SetTrackTrace("Enter Upload Prescription Action", "UploadReport", SeverityLevel.Information)

  try {
    let response = await deleteCall({} as any, DeleteCustomerPrescriptionEndPoint(currentAppointment!.customerId, currentAppointment!.appointmentId, prescriptionToDelete.prescriptionDocumentId), "DeletePrescription")

    if (response) {
      dispatch(GetPrescriptions());
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not delete this prescription image"))
  }

};
