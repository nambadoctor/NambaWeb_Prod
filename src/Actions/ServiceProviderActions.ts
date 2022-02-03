import { Current_Service_Provider_State_Types } from '../Reducers/CurrentServiceProviderReducer';
import { Action } from '../Types/ActionType';
import IServiceProvider from '../Types/IncomingDataModels/ServiceProvider';

function setCurrentServiceProviderAction(serviceProvider: IServiceProvider) {
    return {
        type: Current_Service_Provider_State_Types.SET_CURRENT_SERVICE_PROVIDER,
        payload: serviceProvider,
    };
}

export const SetCurrentServiceProvider = (
    serviceProvider: IServiceProvider,
): Action => setCurrentServiceProviderAction(serviceProvider);
