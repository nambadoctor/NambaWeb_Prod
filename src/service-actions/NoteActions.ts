import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { toast } from 'react-toastify';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
    SetLinearLoadingBarToggle,
    SetNonFatalError,
} from '../actions/common/UIControlActions';
import { SetNotes } from '../actions/CurrentCustomerActions';
import { deleteCall, getCall, postCall, putCall } from '../http/http-helpers';
import { RootState } from '../store';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { INoteIncomingData } from '../types/IncomingDataModels/NoteIncoming';
import { INoteOutgoingData } from '../types/OutgoingDataModels/NoteOutgoing';
import {
    DeleteCustomerNoteEndPoint,
    GetCustomerAllNotesEndPoint,
    SetCustomerNoteEndPoint,
    SetCustomerStrayNoteEndPoint,
} from '../utils/EndPointHelpers';

export const GetNotes =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        const customer = getState().CurrentCustomerState.Customer;

        try {
            let response = await getCall(
                {} as Array<INoteIncomingData>,
                GetCustomerAllNotesEndPoint(
                    customer?.organisationId ?? '',
                    customer?.customerId ?? '',
                ),
                'GetAllNotes',
            );

            if (response) {
                dispatch(SetNotes(response.data));
            }
        } catch (error) {
            dispatch(
                SetNonFatalError('Could not get all notes for this patient'),
            );
        }
    };

export const UploadNote =
    (note: INoteOutgoingData): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, _getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        try {
            let response = await postCall(
                {} as any,
                SetCustomerNoteEndPoint(),
                note,
                'UploadNote',
            );

            if (response) {
                dispatch(GetNotes());
                toast.success('Upload Note Success');
            }

            dispatch(SetLinearLoadingBarToggle(false));
        } catch (error) {
            dispatch(SetNonFatalError('Could not upload note'));
            dispatch(SetLinearLoadingBarToggle(false));
        }
    };

export const UploadStrayNote =
    (note: INoteOutgoingData): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        let selectedPatient = getState().CurrentCustomerState.Customer;
        let currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider;

        try {
            let response = await postCall(
                {} as any,
                SetCustomerStrayNoteEndPoint(
                    currentServiceProvider?.serviceProviderProfile
                        .organisationId ?? '',
                    currentServiceProvider?.serviceProviderId ?? '',
                    selectedPatient?.customerId ?? '',
                ),
                note,
                'UploadNote',
            );

            if (response) {
                dispatch(GetNotes());
                toast.success('Upload Note Success');
            }

            dispatch(SetLinearLoadingBarToggle(false));
        } catch (error) {
            dispatch(SetNonFatalError('Could not upload note'));
            dispatch(SetLinearLoadingBarToggle(false));
        }
    };

export const EditNote =
    (note: INoteOutgoingData): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, _getState) => {
        try {
            let response = await putCall(
                {} as any,
                SetCustomerNoteEndPoint(),
                note,
                'EditNote',
            );

            if (response) {
                dispatch(GetNotes());
                toast.success('Edit Note Success');
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not edit note'));
        }
    };

export const DeleteNote =
    (noteId: string): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, _getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        SetTrackTrace(
            'Enter Delete Note Action',
            'DeleteNote',
            SeverityLevel.Information,
        );

        try {
            let response = await deleteCall(
                {} as any,
                DeleteCustomerNoteEndPoint(noteId),
                'DeleteNote',
            );

            if (response) {
                dispatch(GetNotes());

                dispatch(SetLinearLoadingBarToggle(false));
                toast.success('Note Deleted');
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not delete note'));
        }
    };
