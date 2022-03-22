import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "../Types/ActionType";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { deleteCall, getCall, postCall, putCall } from "../Http/http-helpers";
import { DeleteCustomerPrescriptionEndPoint, GetCustomerAllPrescriptionsEndPoint, GetCustomerPrescriptionEndPoint, SetCustomerPrescriptionEndPoint, SetCustomerStrayPrescriptionEndPoint } from "../Helpers/EndPointHelpers";
import { ConvertInputToFileOrBase64, fileToBase64 } from "../Utils/GeneralUtils";
import IPrescriptionIncomingData from "../Types/IncomingDataModels/PrescriptionIncoming";
import { IPrescriptionUploadData } from "../Types/OutgoingDataModels/PrescriptionUpload";
import { SetLinearLoadingBarToggle, SetNonFatalError } from "../Actions/Common/UIControlActions";
import { toast } from "react-toastify";
import { SetPrescriptions } from "../Actions/CurrentCustomerActions";

export const GetPrescriptions = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  const customer = getState().CurrentCustomerState.Customer

  try {
    let response = await getCall({} as Array<IPrescriptionIncomingData>, GetCustomerAllPrescriptionsEndPoint(customer?.organisationId ?? "", customer?.customerId ?? ""), "GetPrescriptions");

    if (response) {
      dispatch(SetPrescriptions(response.data))
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not get all prescriptions for this patient"))
  }
}

export const UploadPrescriptionForConsultation = (prescription: any): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  dispatch(SetLinearLoadingBarToggle(true))

  let currentConsultationAppointment = getState().ConsultationState.Appointment

  var prescriptionRequest = {
    AppointmentId: currentConsultationAppointment!.appointmentId,
    ServiceRequestId: currentConsultationAppointment!.serviceRequestId,
    File: await ConvertInputToFileOrBase64(prescription),
    FileName: (prescription as File).name ?? "",
    FileType: (prescription as File).type ?? "",
    Details: "",
    DetailsType: ""
  } as IPrescriptionUploadData

  SetTrackTrace("Enter Upload Prescription Action", "UploadPrescription", SeverityLevel.Information)

  try {
    let response = await postCall({} as any, SetCustomerPrescriptionEndPoint(), prescriptionRequest, "UploadPrescription")

    if (response) {
      dispatch(GetPrescriptions());

      dispatch(SetLinearLoadingBarToggle(false))
      toast.success("Prescription Image Uploaded")
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not upload prescription image"))
  }
};

export const UploadPrescriptionAsStray = (file: any): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

  dispatch(SetLinearLoadingBarToggle(true))

  let selectedPatient = getState().CurrentCustomerState.Customer
  let currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider

  var prescriptionRequest = {
    AppointmentId: "",
    ServiceRequestId: "",
    File: await ConvertInputToFileOrBase64(file),
    FileName: (file as File).name ?? "",
    FileType: (file as File).type ?? "",
    Details: "",
    DetailsType: ""
  } as IPrescriptionUploadData

  SetTrackTrace("Enter Upload Stray Prescription Action", "UploadPrescriptionAsStray", SeverityLevel.Information)

  try {
    let response = await postCall({} as any, SetCustomerStrayPrescriptionEndPoint(
      currentServiceProvider?.serviceProviderProfile.organisationId ?? "",
      currentServiceProvider?.serviceProviderId ?? "",
      selectedPatient?.customerId ?? ""),
      prescriptionRequest,
      "UploadStrayPrescription"
    )

    if (response) {
      dispatch(GetPrescriptions());

      dispatch(SetLinearLoadingBarToggle(false))
      toast.success("Prescription Image Uploaded")
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not upload prescription image"))
  }

};

export const DeletePrescription = (prescriptionToDelete: IPrescriptionIncomingData): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
  dispatch(SetLinearLoadingBarToggle(true))

  SetTrackTrace("Enter Upload Prescription Action", "UploadReport", SeverityLevel.Information)

  try {
    let response = await deleteCall({} as any, DeleteCustomerPrescriptionEndPoint(prescriptionToDelete.prescriptionDocumentId), "DeletePrescription")

    if (response) {
      dispatch(GetPrescriptions());
      dispatch(SetLinearLoadingBarToggle(false))
      toast.success("Prescription Image Deleted")
    }
  } catch (error) {
    dispatch(SetNonFatalError("Could not delete this prescription image"))
  }

};
