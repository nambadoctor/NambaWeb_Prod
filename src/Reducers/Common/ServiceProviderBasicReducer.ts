import { SeverityLevel } from '@microsoft/applicationinsights-web';
import SetTrackTrace from '../../Telemetry/SetTrackTrace';
import { Action } from '../../Types/ActionType';
import IServiceProviderBasic from '../../Types/IncomingDataModels/ServiceProviderBasic';

export enum ServiceProviderBasicReducer_Types {
    SET_SERVICE_PROVIDER_BASIC = 'SET_SERVICE_PROVIDER_BASIC',
}

export interface ServiceProviderBasicState {
    serviceProvider?: IServiceProviderBasic;
}

const initialState: ServiceProviderBasicState = {
    serviceProvider: undefined,
};

export const serviceProviderBasicReducer = (
    state: ServiceProviderBasicState = initialState,
    action: Action,
): ServiceProviderBasicState => {
    SetTrackTrace(
        'Entered Service Provider Basic Reducer: ' + action.type,
        'ServiceProviderBasicReducer',
        SeverityLevel.Information,
    );
    switch (action.type) {
        case ServiceProviderBasicReducer_Types.SET_SERVICE_PROVIDER_BASIC:
            SetTrackTrace(
                'Service Provider Basic Reducer Set Local User Types SUCCESS',
                'ServiceProviderBasicReducer',
                SeverityLevel.Information,
            );
            return { serviceProvider: action.payload };
        default:
            SetTrackTrace(
                'Service Provider Basic Reducer Hits default switch: Returns original state',
                'ServiceProviderBasicReducer',
                SeverityLevel.Error,
            );
            return state;
    }
};
