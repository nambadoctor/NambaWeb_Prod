import { SeverityLevel } from '@microsoft/applicationinsights-web';
import SetTrackTrace from '../Telemetry/SetTrackTrace';
import { Action } from '../Types/ActionType';
import IServiceProvider from '../Types/IncomingDataModels/ServiceProvider';
import SettingsConfigurationOutgoing from '../Types/OutgoingDataModels/SettingsConfigurationOutgoing';

export enum Current_Service_Provider_State_Types {
    SET_CURRENT_SERVICE_PROVIDER = 'SET_CURRENT_SERVICE_PROVIDER',
    SET_SERVICE_PROVIDER_SETTINGS = 'SET_SERVICE_PROVIDER_SETTINGS',
}

export interface CurrentServiceProviderState {
    serviceProvider?: IServiceProvider;
    serviceProviderSettings?: SettingsConfigurationOutgoing;
}

const initialState: CurrentServiceProviderState = {
    serviceProvider: undefined,
    serviceProviderSettings: undefined,
};

export const currentServiceProviderReducer = (
    state: CurrentServiceProviderState = initialState,
    action: Action,
): CurrentServiceProviderState => {
    SetTrackTrace(
        'Entered Current Service Provider Reducer: ' + action.type,
        'CurrentServiceProviderReducer',
        SeverityLevel.Information,
    );
    switch (action.type) {
        case Current_Service_Provider_State_Types.SET_CURRENT_SERVICE_PROVIDER:
            SetTrackTrace(
                'Current Service Provider Reducer Set Local SP SUCCESS',
                'CurrentServiceProviderReducer',
                SeverityLevel.Information,
            );
            return {
                serviceProvider: action.payload,
            };
        case Current_Service_Provider_State_Types.SET_SERVICE_PROVIDER_SETTINGS:
            return {
                serviceProviderSettings: action.payload,
            };
        default:
            SetTrackTrace(
                'Current Service Provider Reducer Hits default switch: Returns original state',
                'CurrentServiceProviderReducer',
                SeverityLevel.Error,
            );
            return state;
    }
};
