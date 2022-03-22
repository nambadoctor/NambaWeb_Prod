import { SeverityLevel } from "@microsoft/applicationinsights-common";
import React from "react"
import { toast } from "react-toastify";
import { ThunkAction } from "redux-thunk";
import { SetLinearLoadingBarToggle, SetNonFatalError } from "../../Actions/Common/UIControlActions";
import { SetCustomerReportEndPoint } from "../../Helpers/EndPointHelpers";
import { postCall } from "../../Http/http-helpers";
import { GetReports } from "../../ServiceActions/ReportActions";
import { RootState } from "../../store";
import SetTrackTrace from "../../Telemetry/SetTrackTrace";
import { Action } from "../../Types/ActionType";
import IAppointmentData from "../../Types/IncomingDataModels/Appointment";
import IReportUploadData from "../../Types/OutgoingDataModels/ReportUpload";
import { ConvertInputToFileOrBase64 } from "../../Utils/GeneralUtils";

export const UploadReportForConsultation =
    (
        file: any,
        appointment?: IAppointmentData,
    ): ThunkAction<void, RootState, null, Action> =>
        async (dispatch, getState) => {
            dispatch(SetLinearLoadingBarToggle(true));

            let currentConsultationAppointment = appointment
                ? appointment
                : getState().ConsultationState.Appointment;

            var reportRequest = {
                AppointmentId: currentConsultationAppointment!.appointmentId,
                ServiceRequestId: currentConsultationAppointment!.serviceRequestId,
                File: await ConvertInputToFileOrBase64(file),
                FileName: '',
                FileType: '',
                Details: '',
                DetailsType: '',
            } as IReportUploadData;

            SetTrackTrace(
                'Enter Upload Report Action',
                'UploadReport',
                SeverityLevel.Information,
            );

            try {
                let response = await postCall(
                    {} as any,
                    SetCustomerReportEndPoint(),
                    reportRequest,
                    'UploadReport',
                );

                if (response) {
                    dispatch(SetLinearLoadingBarToggle(false));
                    toast.success('Report Image Uploaded');
                }
            } catch (error) {
                dispatch(SetNonFatalError('Could not upload report image'));
            }
        };
