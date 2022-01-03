import { Action } from "../Types/ActionType"
import IServiceProvider from "../Types/ClientDataModels/ServiceProvider";

export enum Current_Service_Provider_State_Types {
    SET_CURRENT_SERVICE_PROVIDER = "SET_CURRENT_SERVICE_PROVIDER",
}

export interface CurrentServiceProviderState {
    serviceProvider?: IServiceProvider,
}

const initialState: CurrentServiceProviderState = {
    serviceProvider: undefined,
}

export const currentServiceProviderReducer = (state: CurrentServiceProviderState = initialState, action: Action): CurrentServiceProviderState => {
    switch (action.type) {
        case Current_Service_Provider_State_Types.SET_CURRENT_SERVICE_PROVIDER:
            return {
                serviceProvider: action.payload,
            }
        default:
            return state
    }
};
