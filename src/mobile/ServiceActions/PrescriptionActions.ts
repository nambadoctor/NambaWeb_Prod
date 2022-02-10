import { SeverityLevel } from "@microsoft/applicationinsights-web";
import React from "react"
import { toast } from "react-toastify";
import { ThunkAction } from "redux-thunk";
import { SetLinearLoadingBarToggle, SetNonFatalError } from "../../Actions/Common/UIControlActions";
import { SetCustomerPrescriptionEndPoint } from "../../Helpers/EndPointHelpers";
import { postCall } from "../../Http/http-helpers";
import { GetPrescriptions } from "../../ServiceActions/PrescriptionActions";
import { RootState } from "../../store";
import SetTrackTrace from "../../Telemetry/SetTrackTrace";
import { Action } from "../../Types/ActionType";
import { IPrescriptionUploadData } from "../../Types/OutgoingDataModels/PrescriptionUpload";
import { ConvertInputToFileOrBase64 } from "../../Utils/GeneralUtils";

export const UploadPrescriptionForConsultation = (prescription: File): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

    dispatch(SetLinearLoadingBarToggle(true))
  
    let currentConsultationAppointment = getState().ConsultationState.Appointment
  
    var prescriptionRequest = {
      AppointmentId: currentConsultationAppointment!.appointmentId,
      ServiceRequestId: currentConsultationAppointment!.serviceRequestId,
      File: await ConvertInputToFileOrBase64(prescription),
      FileName: prescription.name,
      FileType: prescription.type,
      Details: "",
      DetailsType: ""
    } as IPrescriptionUploadData
  
    SetTrackTrace("Enter Upload Prescription Action", "UploadPrescription", SeverityLevel.Information)
  
    try {
      let response = await postCall({} as any, SetCustomerPrescriptionEndPoint(), prescriptionRequest, "UploadPrescription")
  
      if (response) {
  
        dispatch(SetLinearLoadingBarToggle(false))
        toast.success("Prescription Image Uploaded")
      }
    } catch (error) {
      dispatch(SetNonFatalError("Could not upload prescription image"))
    }
  };
  