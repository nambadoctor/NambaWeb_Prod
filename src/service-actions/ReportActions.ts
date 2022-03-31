import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';
import {
    SetLinearLoadingBarToggle,
    SetNonFatalError,
} from '../actions/common/UIControlActions';
import { SetReports } from '../actions/CurrentCustomerActions';
import { deleteCall, getCall, postCall } from '../http/http-helpers';
import { RootState } from '../store';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { Action } from '../types/ActionType';
import IAppointmentData from '../types/IncomingDataModels/Appointment';
import IReportIncomingData from '../types/IncomingDataModels/ReportIncoming';
import IReportUploadData from '../types/OutgoingDataModels/ReportUpload';
import {
    DeleteCustomerReportEndPoint,
    GetCustomerAllReportsEndPoint,
    SetCustomerReportEndPoint,
    SetCustomerStrayReportEndPoint,
} from '../utils/EndPointHelpers';
import { ConvertInputToFileOrBase64 } from '../utils/GeneralUtils';

export const GetReports =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        const customer = getState().CurrentCustomerState.Customer;

        try {
            let response = await getCall(
                {} as Array<IReportIncomingData>,
                GetCustomerAllReportsEndPoint(
                    customer?.organisationId ?? '',
                    customer?.customerId ?? '',
                ),
                'GetReports',
            );

            if (response) {
                dispatch(SetReports(response.data));
            }
        } catch (error) {
            dispatch(
                SetNonFatalError('Could not get all reports for this patient'),
            );
        }
    };

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
            FileName: (file as File).name ?? '',
            FileType: (file as File).type ?? '',
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
                dispatch(GetReports());

                dispatch(SetLinearLoadingBarToggle(false));
                toast.success('Report Image Uploaded');
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not upload report image'));
        }
    };

export const UploadReportAsStray =
    (file: any): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        let selectedPatient = getState().CurrentCustomerState.Customer;
        let currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider;

        var reportRequest = {
            AppointmentId: '',
            ServiceRequestId: '',
            File: await ConvertInputToFileOrBase64(file),
            FileName: (file as File).name ?? '',
            FileType: (file as File).type ?? '',
            Details: '',
            DetailsType: '',
        } as IReportUploadData;

        SetTrackTrace(
            'Enter Upload Stray Report Action',
            'UploadReportAsStray',
            SeverityLevel.Information,
        );

        try {
            let response = await postCall(
                {} as any,
                SetCustomerStrayReportEndPoint(
                    currentServiceProvider?.serviceProviderProfile
                        .organisationId ?? '',
                    currentServiceProvider?.serviceProviderId ?? '',
                    selectedPatient?.customerId ?? '',
                ),
                reportRequest,
                'UploadReport',
            );

            if (response) {
                dispatch(GetReports());

                dispatch(SetLinearLoadingBarToggle(false));
                toast.success('Report Image Uploaded');
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not upload report image'));
        }
    };

export const DeleteReport =
    (
        reportToDelete: IReportIncomingData,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, _getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        SetTrackTrace(
            'Enter Upload Report Action',
            'UploadReport',
            SeverityLevel.Information,
        );

        try {
            let response = await deleteCall(
                {} as any,
                DeleteCustomerReportEndPoint(reportToDelete.reportId),
                'DeleteReport',
            );

            if (response) {
                dispatch(GetReports());

                dispatch(SetLinearLoadingBarToggle(false));
                toast.success('Report Image Deleted');
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not delete report image'));
        }
    };
