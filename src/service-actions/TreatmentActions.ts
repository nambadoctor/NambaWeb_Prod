import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';
import {
    SetFatalError,
    SetLinearLoadingBarToggle,
    SetNonFatalError,
} from '../actions/common/UIControlActions';
import {
    SetPatientTreatmentPlanDocuments,
    SetPatientTreatmentPlans,
} from '../actions/CurrentCustomerActions';
import { SetTreatments } from '../actions/TreatmentActions';
import {
    AddTreatmentEndPoint,
    AddTreatmentPlanDocumentEndPoint,
    AddTreatmentPlanEndPoint,
    DeleteTreatmentEndPoint,
    DeleteTreatmentPlanDocumentEndPoint,
    GetServiceProviderTreatmentPlansInOrganisationEndPoint,
    GetServiceProviderTreatmentsInOrganisationEndPoint,
    GetTreatmentPlanDocumentsForCustomerEndPoint,
} from '../utils/EndPointHelpers';
import { deleteCall, getCall, postCall, putCall } from '../http/http-helpers';
import { RootState } from '../store';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { Action } from '../types/ActionType';
import { ITreatmentIncoming } from '../types/IncomingDataModels/TreatmentIncoming';
import ITreatmentPlanDocumentIncomingData from '../types/IncomingDataModels/TreatmentPlanDocumentIncoming';
import { ITreatmentPlanIncoming } from '../types/IncomingDataModels/TreatmentPlanIncoming';
import { ITreatmentOutgoing } from '../types/OutgoingDataModels/TreatmentOutgoing';
import { ITreatmentPlanDocumentOutgoing } from '../types/OutgoingDataModels/TreatmentPlanDocumentOutgoing';
import { ITreatmentPlanOutgoing } from '../types/OutgoingDataModels/TreatmentPlanOutgoing';
import { ConvertInputToFileOrBase64 } from '../utils/GeneralUtils';

export const GetAllTreatments =
    (onlyShowUpcoming: boolean): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        SetTrackTrace(
            'Enter Get All Treatments Action',
            'GetAllTreatments',
            SeverityLevel.Information,
        );
        const currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider!;

        if (currentServiceProvider) {
            SetTrackTrace(
                'Retrieved Current Service Provider: ' + currentServiceProvider,
                'GetAllTreatments',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Current Service Provider DOES NOT EXIST: ' +
                    currentServiceProvider,
                'GetAllTreatments',
                SeverityLevel.Error,
            );
        }

        try {
            //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
            let response = await getCall(
                {} as Array<ITreatmentIncoming>,
                GetServiceProviderTreatmentsInOrganisationEndPoint(
                    currentServiceProvider.serviceProviderProfile
                        .organisationId,
                    currentServiceProvider.serviceProviderId,
                ),
                'GetAllTreatments',
            );

            SetTrackTrace(
                'Dispatch Set All Treatments' + response.data,
                'GetAllTreatments',
                SeverityLevel.Information,
            );
            dispatch(SetTreatments(response.data));
        } catch (error) {
            var x = error;
            dispatch(SetFatalError('Could not retrieve treatments!'));
        }
    };

export const GetAllTreatmentPlans =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        SetTrackTrace(
            'Enter Get All Treatment plans Action',
            'GetAllTreatmentPlans',
            SeverityLevel.Information,
        );
        const currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider!;
        const currentCustomer = getState().CurrentCustomerState.Customer;

        if (currentServiceProvider) {
            SetTrackTrace(
                'Retrieved Current Service Provider: ' + currentServiceProvider,
                'GetAllTreatmentPlans',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Current Service Provider DOES NOT EXIST: ' +
                    currentServiceProvider,
                'GetAllTreatmentPlans',
                SeverityLevel.Error,
            );
        }

        if (currentCustomer) {
            SetTrackTrace(
                'Retrieved Current Customer: ' + currentServiceProvider,
                'GetAllTreatmentPlans',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Current Customer DOES NOT EXIST: ' +
                    currentServiceProvider,
                'GetAllTreatmentPlans',
                SeverityLevel.Error,
            );
        }

        try {
            //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
            let response = await getCall(
                {} as Array<ITreatmentPlanIncoming>,
                GetServiceProviderTreatmentPlansInOrganisationEndPoint(
                    currentServiceProvider.serviceProviderProfile
                        .organisationId,
                    currentServiceProvider.serviceProviderId,
                    currentCustomer?.customerId ?? '',
                ),
                'GetAllTreatmentPlans',
            );

            SetTrackTrace(
                'Dispatch Set All Treatment plans' + response.data,
                'GetAllTreatmentPlans',
                SeverityLevel.Information,
            );
            dispatch(SetPatientTreatmentPlans(response.data));

            dispatch(SetLinearLoadingBarToggle(false));
        } catch (error) {
            dispatch(SetFatalError('Could not retrieve treatment plans!'));
            dispatch(SetLinearLoadingBarToggle(false));
        }
    };

export const AddTreatment =
    (
        treatment: ITreatmentOutgoing,
        treatmentPlanId: string,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        SetTrackTrace(
            'Enter Add Treatment Action',
            'AddTreatment',
            SeverityLevel.Information,
        );
        const currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider!;

        dispatch(SetLinearLoadingBarToggle(true));

        if (currentServiceProvider) {
            SetTrackTrace(
                'Retrieved Current Service Provider: ' + currentServiceProvider,
                'AddTreatment',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Current Service Provider DOES NOT EXIST: ' +
                    currentServiceProvider,
                'AddTreatment',
                SeverityLevel.Error,
            );
        }

        try {
            //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL

            if (treatment.treatmentId) {
                let response = await putCall(
                    {} as Array<ITreatmentIncoming>,
                    AddTreatmentEndPoint(treatmentPlanId),
                    treatment,
                    'UpdateTreatment',
                );

                if (response) {
                    dispatch(GetAllTreatmentPlans());
                    dispatch(GetAllTreatments(false));
                }
            } else {
                let response = await postCall(
                    {} as Array<ITreatmentIncoming>,
                    AddTreatmentEndPoint(treatmentPlanId),
                    treatment,
                    'AddTreatment',
                );

                if (response) {
                    dispatch(GetAllTreatmentPlans());
                }
            }

            dispatch(SetLinearLoadingBarToggle(false));
        } catch (error) {
            if (treatment.treatmentId) {
                dispatch(SetNonFatalError('Could not Update Treatment!'));
            } else {
                dispatch(SetNonFatalError('Could not Add Treatment!'));
            }
        }
    };

export const AddTreatmentPlan =
    (
        treatmentPlan: ITreatmentPlanOutgoing,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        SetTrackTrace(
            'Enter Add Treatment Plan Action',
            'AddTreatmentPlan',
            SeverityLevel.Information,
        );
        const currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider!;

        if (currentServiceProvider) {
            SetTrackTrace(
                'Retrieved Current Service Provider: ' + currentServiceProvider,
                'AddTreatmentPlan',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Current Service Provider DOES NOT EXIST: ' +
                    currentServiceProvider,
                'AddTreatmentPlan',
                SeverityLevel.Error,
            );
        }

        try {
            //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL

            if (treatmentPlan.treatmentPlanId) {
                let response = await putCall(
                    {} as Array<ITreatmentIncoming>,
                    AddTreatmentPlanEndPoint(),
                    treatmentPlan,
                    'UpdateTreatmentPlan',
                );
            } else {
                let response = await postCall(
                    {} as Array<ITreatmentIncoming>,
                    AddTreatmentEndPoint(AddTreatmentPlanEndPoint()),
                    treatmentPlan,
                    'AddTreatmentPlan',
                );
            }
        } catch (error) {
            dispatch(SetFatalError('Could not AddTreatmentPlan!'));
        }
    };

export const DeleteTreatment =
    (
        treatmentToDelete: ITreatmentIncoming,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        SetTrackTrace(
            'Enter Delete Treatment Action',
            'DeleteTreatment',
            SeverityLevel.Information,
        );

        try {
            let response = await deleteCall(
                {} as any,
                DeleteTreatmentEndPoint(
                    treatmentToDelete.treatmentId,
                    treatmentToDelete.treatmentPlanId,
                ),
                'DeleteTreatment',
            );

            if (response) {
                // dispatch(GetAllTreatmentsForPatient(true));

                dispatch(SetLinearLoadingBarToggle(false));
                toast.success('Treatment Deleted');
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not delete treatment'));
        }
    };

export const UploadTreatmentPlanDocument =
    (file: any): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        const appointment = getState().ConsultationState.Appointment;

        var treatmentPlanDocRequest = {
            File: await ConvertInputToFileOrBase64(file),
            FileName: '',
            FileType: '',
            AppointmentId: appointment?.appointmentId,
            ServiceRequestId: appointment?.serviceRequestId,
        } as ITreatmentPlanDocumentOutgoing;

        SetTrackTrace(
            'Enter Upload TreatmentPlanDocument Action',
            'UploadTreatmentPlanDocument',
            SeverityLevel.Information,
        );

        try {
            let response = await postCall(
                {} as any,
                AddTreatmentPlanDocumentEndPoint(),
                treatmentPlanDocRequest,
                'UploadTreatmentPlanDocument',
            );

            if (response) {
                dispatch(GetTreatmentDocumentsForCustomer());

                dispatch(SetLinearLoadingBarToggle(false));
                toast.success('TreatmentPlan Image Uploaded');
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not upload treatment plan image'));
        }
    };

export const GetTreatmentDocumentsForCustomer =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        const currentCustomer = getState().CurrentCustomerState.Customer;

        try {
            let response = await getCall(
                {} as Array<ITreatmentPlanDocumentIncomingData>,
                GetTreatmentPlanDocumentsForCustomerEndPoint(
                    currentCustomer?.customerId ?? '',
                ),
                'GetTreatmentPlanDocuments',
            );

            if (response) {
                dispatch(SetPatientTreatmentPlanDocuments(response.data));
            }
        } catch (error) {
            dispatch(
                SetNonFatalError(
                    'Could not get all treatment plan documents for this patient',
                ),
            );
        }
    };

export const DeleteTreatmentPlanDocument =
    (treatmentDocumentId: string): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        SetTrackTrace(
            'Enter Delete Treatment Plan Document Action',
            'DeleteTreatmentPlanDocument',
            SeverityLevel.Information,
        );

        try {
            let response = await deleteCall(
                {} as any,
                DeleteTreatmentPlanDocumentEndPoint(treatmentDocumentId),
                'Delete Treatment Plan',
            );

            if (response) {
                dispatch(GetTreatmentDocumentsForCustomer());

                dispatch(SetLinearLoadingBarToggle(false));
                toast.success('Treatment Image Deleted');
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not delete treatment image'));
        }
    };

// export const GetAllTreatmentsForPatient = (isUpcomingTreatment?:boolean): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
//     SetTrackTrace("Enter Get All Treatments Action", "GetAllTreatments", SeverityLevel.Information);
//     const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!
//     const currentCustomer = getState().CurrentCustomerState.Customer!

//     if (currentServiceProvider) {
//         SetTrackTrace("Retrieved Current Service Provider: " + currentServiceProvider, "GetAllTreatments", SeverityLevel.Information);
//     } else {
//         SetTrackTrace("Retrieved Current Service Provider DOES NOT EXIST: " + currentServiceProvider, "GetAllTreatments", SeverityLevel.Error);
//     }

//     try {
//         //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
//         let response = await getCall({} as Array<ITreatmentIncoming>, GetServiceProviderTreatmentsInOrganisationForCustomerEndPoint(currentServiceProvider.serviceProviderProfile.organisationId, currentServiceProvider.serviceProviderId, currentCustomer.customerId, isUpcomingTreatment ?? false), "GetAllTreatments");

//         if (response) {
//             dispatch(GetAllTreatmentPlans())
//         }

//         SetTrackTrace("Dispatch Set All Treatments" + response.data, "GetAllTreatments", SeverityLevel.Information);
//         dispatch(SetPatientTreatments(response.data));

//     } catch (error) {
//         dispatch(SetFatalError("Could not retrieve treatments!"))
//     }
// };
