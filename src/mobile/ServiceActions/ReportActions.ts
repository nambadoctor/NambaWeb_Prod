import { SeverityLevel } from '@microsoft/applicationinsights-common';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';
import {
    SetLinearLoadingBarToggle,
    SetNonFatalError,
} from '../../actions/common/UIControlActions';
import { SetCustomerReportEndPoint } from '../../utils/EndPointHelpers';
import { postCall } from '../../http/http-helpers';
import { RootState } from '../../store';
import SetTrackTrace from '../../telemetry/SetTrackTrace';
import { Action } from '../../types/ActionType';
import IAppointmentData from '../../types/IncomingDataModels/Appointment';
import IReportUploadData from '../../types/OutgoingDataModels/ReportUpload';
import { ConvertInputToFileOrBase64 } from '../../utils/GeneralUtils';

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
