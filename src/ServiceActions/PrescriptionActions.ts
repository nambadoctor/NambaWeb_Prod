import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { Action } from '../Types/ActionType';
import SetTrackTrace from '../Telemetry/SetTrackTrace';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { deleteCall, getCall, postCall, putCall } from '../Http/http-helpers';
import {
    DeleteCustomerPrescriptionEndPoint,
    GetCustomerAllPrescriptionsEndPoint,
    GetCustomerPrescriptionEndPoint,
    SetCustomerPrescriptionEndPoint,
    SetCustomerStrayPrescriptionEndPoint,
} from '../Helpers/EndPointHelpers';
import {
    SetAllPrescriptionsForConsultation,
    SetPrescriptionsForConsultation,
} from '../Actions/ConsultationActions';
import {
    ConvertInputToFileOrBase64,
    fileToBase64,
} from '../Utils/GeneralUtils';
import IPrescriptionIncomingData from '../Types/IncomingDataModels/PrescriptionIncoming';
import { IPrescriptionUploadData } from '../Types/OutgoingDataModels/PrescriptionUpload';
import {
    SetLinearLoadingBarToggle,
    SetNonFatalError,
} from '../Actions/Common/UIControlActions';
import { toast } from 'react-toastify';
import { FilterAllAndCurrentPrescriptions } from '../Actions/PrescriptionActions';

export const GetPrescriptions =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        let currentConsultationAppointment =
            getState().ConsultationState.currentAppointment;

        try {
            let response = await getCall(
                {} as Array<IPrescriptionIncomingData>,
                GetCustomerPrescriptionEndPoint(
                    currentConsultationAppointment!.serviceRequestId,
                ),
                'GetPrescriptions',
            );

            if (response) {
                dispatch(SetPrescriptionsForConsultation(response.data));
                dispatch(
                    GetAllPrescriptionsForCustomer(
                        currentConsultationAppointment?.organisationId ?? '',
                        currentConsultationAppointment?.customerId ?? '',
                        response.data,
                    ),
                );
            }
        } catch (error) {
            dispatch(
                SetNonFatalError(
                    'Could not get prescription for this appointment',
                ),
            );
        }
    };

export const GetAllPrescriptionsForCustomer =
    (
        organisationId: string,
        customerId: string,
        currentPrescriptions: IPrescriptionIncomingData[] | null,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        try {
            let response = await getCall(
                {} as Array<IPrescriptionIncomingData>,
                GetCustomerAllPrescriptionsEndPoint(organisationId, customerId),
                'GetPrescriptions',
            );

            if (response) {
                var filteredPrescriptions = FilterAllAndCurrentPrescriptions(
                    currentPrescriptions,
                    response.data,
                );
                dispatch(
                    SetAllPrescriptionsForConsultation(filteredPrescriptions),
                );
            }
        } catch (error) {
            dispatch(
                SetNonFatalError(
                    'Could not get all prescriptions for this patient',
                ),
            );
        }
    };

export const UploadPrescriptionForConsultation =
    (prescription: File): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        let currentConsultationAppointment =
            getState().ConsultationState.currentAppointment;

        var prescriptionRequest = {
            AppointmentId: currentConsultationAppointment!.appointmentId,
            ServiceRequestId: currentConsultationAppointment!.serviceRequestId,
            File: await ConvertInputToFileOrBase64(prescription),
            FileName: prescription.name,
            FileType: prescription.type,
            Details: '',
            DetailsType: '',
        } as IPrescriptionUploadData;

        SetTrackTrace(
            'Enter Upload Prescription Action',
            'UploadPrescription',
            SeverityLevel.Information,
        );

        try {
            let response = await postCall(
                {} as any,
                SetCustomerPrescriptionEndPoint(),
                prescriptionRequest,
                'UploadPrescription',
            );

            if (response) {
                dispatch(GetPrescriptions());

                dispatch(SetLinearLoadingBarToggle(false));
                toast.success('Prescription Image Uploaded');
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not upload prescription image'));
        }
    };

export const UploadPrescriptionAsStray =
    (file: any): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        let selectedPatient = getState().AddPatientState.customerProfile;
        let currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider;

        var prescriptionRequest = {
            AppointmentId: '',
            ServiceRequestId: '',
            File: await ConvertInputToFileOrBase64(file),
            FileName: '',
            FileType: '',
            Details: '',
            DetailsType: '',
        } as IPrescriptionUploadData;

        SetTrackTrace(
            'Enter Upload Stray Prescription Action',
            'UploadPrescriptionAsStray',
            SeverityLevel.Information,
        );

        try {
            let response = await postCall(
                {} as any,
                SetCustomerStrayPrescriptionEndPoint(
                    currentServiceProvider?.serviceProviderProfile
                        .organisationId ?? '',
                    currentServiceProvider?.serviceProviderId ?? '',
                    selectedPatient.customerId,
                ),
                prescriptionRequest,
                'UploadStrayPrescription',
            );

            if (response) {
                dispatch(
                    GetAllPrescriptionsForCustomer(
                        currentServiceProvider?.serviceProviderProfile
                            .organisationId ?? '',
                        selectedPatient.customerId,
                        null,
                    ),
                );

                dispatch(SetLinearLoadingBarToggle(false));
                toast.success('Prescription Image Uploaded');
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not upload prescription image'));
        }
    };

export const DeletePrescription =
    (
        prescriptionToDelete: IPrescriptionIncomingData,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        let currentAppointment =
            getState().ConsultationState.currentAppointment;

        SetTrackTrace(
            'Enter Upload Prescription Action',
            'UploadReport',
            SeverityLevel.Information,
        );

        try {
            let response = await deleteCall(
                {} as any,
                DeleteCustomerPrescriptionEndPoint(
                    prescriptionToDelete.prescriptionDocumentId,
                ),
                'DeletePrescription',
            );

            if (response) {
                dispatch(GetPrescriptions());
                dispatch(SetLinearLoadingBarToggle(false));
                toast.success('Prescription Image Deleted');
            }
        } catch (error) {
            dispatch(
                SetNonFatalError('Could not delete this prescription image'),
            );
        }
    };
