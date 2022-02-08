import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { Action } from '../Types/ActionType';
import SetTrackTrace from '../Telemetry/SetTrackTrace';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { deleteCall, getCall, postCall, putCall } from '../Http/http-helpers';
import {
    DeleteCustomerReportEndPoint,
    GetCustomerAllReportsEndPoint,
    GetCustomerReportEndPoint,
    SetCustomerReportEndPoint,
    SetCustomerStrayReportEndPoint,
} from '../Helpers/EndPointHelpers';
import IReportUploadData from '../Types/OutgoingDataModels/ReportUpload';
import IReportIncomingData from '../Types/IncomingDataModels/ReportIncoming';
import { ConvertInputToFileOrBase64 } from '../Utils/GeneralUtils';
import {
    SetLinearLoadingBarToggle,
    SetNonFatalError,
} from '../Actions/Common/UIControlActions';
import { toast } from 'react-toastify';
import { SetReports } from '../Actions/CurrentCustomerActions';
import IAppointmentData from '../Types/IncomingDataModels/Appointment';

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
            FileName: '',
            FileType: '',
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
    async (dispatch, getState) => {
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
