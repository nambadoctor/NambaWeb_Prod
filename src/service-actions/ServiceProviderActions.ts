import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { ThunkAction } from 'redux-thunk';
import {
    SetFatalError,
    SetLinearLoadingBarToggle,
} from '../actions/common/UIControlActions';
import { SetCurrentServiceProviderLoadedState } from '../actions/LoadedStatesActions';
import {
    SetCurrentServiceProvider,
    SetServiceProviderSettings,
} from '../actions/ServiceProviderActions';
import { getCall } from '../http/http-helpers';
import { RootState } from '../store';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { Action } from '../types/ActionType';
import IServiceProvider from '../types/IncomingDataModels/ServiceProvider';
import SettingsConfigurationOutgoing from '../types/OutgoingDataModels/SettingsConfigurationOutgoing';
import {
    GetServiceProviderProfileEndPoint,
    GetServiceProviderSettingsEndpoint,
    GetServiceProvidersInOrgEndPoint,
} from '../utils/EndPointHelpers';
import { GetAllAppointments } from './AppointmentActions';
import { GetAllCustomers } from './CustomerActions';
import { GetAllTreatments } from './TreatmentActions';

export const GetCurrentServiceProvider =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        SetTrackTrace(
            'Enter Get Service Provider',
            'GetCurrentServiceProvider',
            SeverityLevel.Information,
        );
        var serviceProviderBasicId =
            getState().ServiceProviderBasicState.serviceProvider
                ?.serviceProviderId;
        var selectedOrganisationId =
            getState().OrgState.selectedOrganisation?.organisationId;

        if (serviceProviderBasicId) {
            SetTrackTrace(
                'Retrieved SP Basic Id: ' + serviceProviderBasicId,
                'GetCurrentServiceProvider',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved SP Basic Id DOES NOT EXIST: ' +
                    serviceProviderBasicId,
                'GetCurrentServiceProvider',
                SeverityLevel.Error,
            );
        }

        if (selectedOrganisationId) {
            SetTrackTrace(
                'Retrieved Selected Organisation Id: ' + serviceProviderBasicId,
                'GetCurrentServiceProvider',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Selected Organisation Id DOES NOT EXIST: ' +
                    selectedOrganisationId,
                'GetCurrentServiceProvider',
                SeverityLevel.Error,
            );
        }

        try {
            let response = await getCall(
                {} as IServiceProvider,
                GetServiceProviderProfileEndPoint(
                    serviceProviderBasicId!,
                    selectedOrganisationId!,
                ),
                'GetCurrentServiceProvider',
            );

            dispatch(SetLinearLoadingBarToggle(false));
            dispatch(SetCurrentServiceProviderLoadedState(true));

            SetTrackTrace(
                'Dispatch Set Current Service Provider' + response.data,
                'GetCurrentServiceProvider',
                SeverityLevel.Information,
            );
            dispatch(SetCurrentServiceProvider(response.data));

            SetTrackTrace(
                'Dispatch Get All Appointments' + response.data,
                'GetCurrentServiceProvider',
                SeverityLevel.Information,
            );
            dispatch(GetAllAppointments());

            SetTrackTrace(
                'Dispatch Get All Treatments' + response.data,
                'GetCurrentServiceProvider',
                SeverityLevel.Information,
            );
            dispatch(GetAllTreatments(false));

            SetTrackTrace(
                'Dispatch Get All Customers For Service Provider In Org' +
                    response.data,
                'GetCurrentServiceProvider',
                SeverityLevel.Information,
            );
            dispatch(GetAllCustomers());

            SetTrackTrace(
                'Dispatch Get all Service Providers In Org' + response.data,
                'GetCurrentServiceProvider',
                SeverityLevel.Information,
            );
            dispatch(GetServiceProvidersInOrg());

            SetTrackTrace(
                'Dispatch Service Provider settings' + response.data,
                'GetCurrentServiceProvider',
                SeverityLevel.Information,
            );
            dispatch(GetServiceProviderSettings());
        } catch (_error) {
            dispatch(SetFatalError('Cannot get service provider!'));
        }
    };

export const GetServiceProvidersInOrg =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        SetTrackTrace(
            'Enter Get Service Providers FOR ORG',
            'GetServiceProviderInOrg',
            SeverityLevel.Information,
        );
        var serviceProviderBasicId =
            getState().ServiceProviderBasicState.serviceProvider
                ?.serviceProviderId;
        var selectedOrganisationId =
            getState().OrgState.selectedOrganisation?.organisationId;

        if (serviceProviderBasicId) {
            SetTrackTrace(
                'Retrieved SP Basic Id: ' + serviceProviderBasicId,
                'GetServiceProviderInOrg',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved SP Basic Id DOES NOT EXIST: ' +
                    serviceProviderBasicId,
                'GetServiceProviderInOrg',
                SeverityLevel.Error,
            );
        }

        if (selectedOrganisationId) {
            SetTrackTrace(
                'Retrieved Selected Organisation Id: ' + serviceProviderBasicId,
                'GetServiceProviderInOrg',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Selected Organisation Id DOES NOT EXIST: ' +
                    selectedOrganisationId,
                'GetServiceProviderInOrg',
                SeverityLevel.Error,
            );
        }

        try {
            await getCall(
                {} as IServiceProvider,
                GetServiceProvidersInOrgEndPoint(selectedOrganisationId!),
                'GetServiceProviderInOrg',
            );

            dispatch(SetLinearLoadingBarToggle(false));
            dispatch(SetCurrentServiceProviderLoadedState(true));
        } catch (_error) {
            dispatch(SetFatalError('Cannot get service providers in org!'));
        }
    };

export const GetServiceProviderSettings =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        const currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider!;

        try {
            let response = await getCall(
                {} as SettingsConfigurationOutgoing,
                GetServiceProviderSettingsEndpoint(
                    currentServiceProvider.serviceProviderProfile
                        .organisationId,
                    currentServiceProvider.serviceProviderId,
                ),
                'GetServiceProviderSettings',
            );

            dispatch(SetServiceProviderSettings(response.data));
        } catch (error) {
            // dispatch(
            //     SetNonFatalError('Could not retrieve ServiceProviderSetting'),
            // );
        }
    };
