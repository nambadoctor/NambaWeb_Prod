import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';
import {
    SetLinearLoadingBarToggle,
    SetNonFatalError,
} from '../actions/common/UIControlActions';
import { postCall } from '../http/http-helpers';
import { RootState } from '../store';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { Action } from '../types/ActionType';
import { FollowupOutgoing } from '../types/OutgoingDataModels/FollowupOutgoing';
import { IReferalOutgoing } from '../types/OutgoingDataModels/ReferalOutgoing';
import {
    FollowupEndPoint,
    ReferPatientEndPoint,
} from '../utils/EndPointHelpers';

export const ReferPatient =
    (
        phoneNumber: string,
        reason: string,
        referToName: string,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        SetTrackTrace(
            'Enter Get All Refer Action',
            'ReferPatient',
            SeverityLevel.Information,
        );
        const currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider!;
        const currentCustomer = getState().CurrentCustomerState.Customer!;

        if (currentServiceProvider) {
            SetTrackTrace(
                'Retrieved Current Service Provider: ' + currentServiceProvider,
                'ReferPatient',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Current Service Provider DOES NOT EXIST: ' +
                    currentServiceProvider,
                'ReferPatient',
                SeverityLevel.Error,
            );
        }

        if (currentCustomer) {
            SetTrackTrace(
                'Retrieved Current Customer: ' + currentCustomer,
                'ReferPatient',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Current Customer DOES NOT EXIST: ' + currentCustomer,
                'ReferPatient',
                SeverityLevel.Error,
            );
        }

        var referalOutgoing = {
            customerId: currentCustomer.customerId,
            senderServiceProviderId: currentServiceProvider.serviceProviderId,
            organisationId:
                currentServiceProvider.serviceProviderProfile.organisationId,
            phoneNumber: phoneNumber,
            reason: reason,
        } as IReferalOutgoing;

        try {
            dispatch(SetLinearLoadingBarToggle(true));
            //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
            let response = await postCall(
                {} as any,
                ReferPatientEndPoint(),
                referalOutgoing,
                'ReferPatient',
            );

            if (response) {
                toast.success(
                    currentCustomer.firstName +
                        ' refered successfully to ' +
                        referToName,
                );
            }

            dispatch(SetLinearLoadingBarToggle(false));
        } catch (_error) {
            dispatch(SetNonFatalError('Could not make referal!'));
        }
    };

export const SetFolloupWithPatient =
    (
        reason: string,
        scheduledDate: Date,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        SetTrackTrace(
            'Enter Get All Refer Action',
            'ReferPatient',
            SeverityLevel.Information,
        );
        const currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider!;
        const currentCustomer = getState().CurrentCustomerState.Customer!;

        if (currentServiceProvider) {
            SetTrackTrace(
                'Retrieved Current Service Provider: ' + currentServiceProvider,
                'ReferPatient',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Current Service Provider DOES NOT EXIST: ' +
                    currentServiceProvider,
                'ReferPatient',
                SeverityLevel.Error,
            );
        }

        if (currentCustomer) {
            SetTrackTrace(
                'Retrieved Current Customer: ' + currentCustomer,
                'ReferPatient',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Current Customer DOES NOT EXIST: ' + currentCustomer,
                'ReferPatient',
                SeverityLevel.Error,
            );
        }

        var folloupOutgoing = {
            customerId: currentCustomer.customerId,
            senderServiceProviderId: currentServiceProvider.serviceProviderId,
            organisationId:
                currentServiceProvider.serviceProviderProfile.organisationId,
            reason,
            scheduledDateTime: scheduledDate,
        } as FollowupOutgoing;

        try {
            dispatch(SetLinearLoadingBarToggle(true));
            //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
            let response = await postCall(
                {} as any,
                FollowupEndPoint(),
                folloupOutgoing,
                'Followup',
            );

            if (response) {
                toast.success(
                    currentCustomer.firstName +
                        ' Followup saved successfully for ' +
                        scheduledDate.toDateString(),
                );
            }

            dispatch(SetLinearLoadingBarToggle(false));
        } catch (_error) {
            dispatch(SetNonFatalError('Could not set followup!'));
        }
    };
