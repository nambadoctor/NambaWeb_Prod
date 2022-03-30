import { Action } from '../Types/ActionType';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import IServiceProvider from '../Types/IncomingDataModels/ServiceProvider';
import { Current_Service_Provider_State_Types } from '../Reducers/CurrentServiceProviderReducer';
import { GetAllAppointments } from './AppointmentActions';
import {
    GetServiceProviderProfileEndPoint,
    GetServiceProviderSettingsEndpoint,
    GetServiceProvidersInOrgEndPoint,
} from '../Helpers/EndPointHelpers';
import { GetAllCustomers } from './CustomerActions';
import { getCall } from '../Http/http-helpers';
import SetTrackTrace from '../Telemetry/SetTrackTrace';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import {
    SetFatalError,
    SetLinearLoadingBarToggle,
    SetNonFatalError,
} from '../Actions/Common/UIControlActions';
import { SetCurrentServiceProviderLoadedState } from '../Actions/LoadedStatesActions';
import {
    SetCurrentServiceProvider,
    SetServiceProviderSettings,
} from '../Actions/ServiceProviderActions';
import { GetAllTreatments } from './TreatmentActions';
import SettingsConfigurationOutgoing from '../Types/OutgoingDataModels/SettingsConfigurationOutgoing';

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
        } catch (error) {
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
            let response = await getCall(
                {} as IServiceProvider,
                GetServiceProvidersInOrgEndPoint(selectedOrganisationId!),
                'GetServiceProviderInOrg',
            );

            dispatch(SetLinearLoadingBarToggle(false));
            dispatch(SetCurrentServiceProviderLoadedState(true));
        } catch (error) {
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
