import { Current_Service_Provider_State_Types } from '../reducers/CurrentServiceProviderReducer';
import { Action } from '../types/ActionType';
import IServiceProvider from '../types/IncomingDataModels/ServiceProvider';
import SettingsConfigurationOutgoing from '../types/OutgoingDataModels/SettingsConfigurationOutgoing';

function setCurrentServiceProviderAction(serviceProvider: IServiceProvider) {
    return {
        type: Current_Service_Provider_State_Types.SET_CURRENT_SERVICE_PROVIDER,
        payload: serviceProvider,
    };
}

export const SetCurrentServiceProvider = (
    serviceProvider: IServiceProvider,
): Action => setCurrentServiceProviderAction(serviceProvider);

function setServiceProviderSettingsAction(
    serviceProviderSettings: SettingsConfigurationOutgoing,
) {
    return {
        type: Current_Service_Provider_State_Types.SET_SERVICE_PROVIDER_SETTINGS,
        payload: serviceProviderSettings,
    };
}

export const SetServiceProviderSettings = (
    serviceProviderSettings: SettingsConfigurationOutgoing,
): Action => setServiceProviderSettingsAction(serviceProviderSettings);
