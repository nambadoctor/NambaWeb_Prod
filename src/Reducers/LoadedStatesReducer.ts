import { SeverityLevel } from "@microsoft/applicationinsights-web";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { Action } from "../Types/ActionType"

export enum LoadedStatesReducer_Types {
    SET_INITIAL_START_LOAD_TIME_STATE = "SET_INITIAL_START_LOAD_TIME_STATE",
    SET_SERVICE_PROVIDER_BASIC_LOADED_STATE = "SET_SERVICE_PROVIDER_BASIC_LOADED_STATE",
    SET_CURRENT_SERVICE_PROVIDER_LOADED_STATE = "SET_CURRENT_SERVICE_PROVIDER_LOADED_STATE",
    SET_APPOINTMENTS_LOADED_STATE = "SET_APPOINTMENTS_LOADED_STATE",
    SET_CUSTOMERS_LOADED_STATE = "SET_CUSTOMERS_LOADED_STATE"
}

export interface LoadedState {
    initialLoadStartTime: Date | null
    serviceProviderBasic: boolean,
    currentServiceProvider: boolean,
    appointments: boolean,
    customers: boolean,
}

const initialState: LoadedState = {
    initialLoadStartTime: null,
    serviceProviderBasic: false,
    currentServiceProvider: false,
    appointments: false,
    customers: false
}

export const LoadedStatesReducer = (state: LoadedState = initialState, action: Action): LoadedState => {
    SetTrackTrace("Entered Loaded States Reducer: " + action.type, "LoadedStatesReducer", SeverityLevel.Information)
    switch (action.type) {
        case LoadedStatesReducer_Types.SET_INITIAL_START_LOAD_TIME_STATE:
            SetTrackTrace("Entered Loaded States Reducer SET_INITIAL_START_LOAD_TIME_STATE SUCCESS", "LoadedStatesReducer", SeverityLevel.Information)
            return {
                ...state,
                initialLoadStartTime: action.payload,
            }
        case LoadedStatesReducer_Types.SET_SERVICE_PROVIDER_BASIC_LOADED_STATE:
            SetTrackTrace("Entered Loaded States Reducer SET_SERVICE_PROVIDER_BASIC SUCCESS", "LoadedStatesReducer", SeverityLevel.Information)
            return {
                ...state,
                serviceProviderBasic: action.payload,
            }
        case LoadedStatesReducer_Types.SET_CURRENT_SERVICE_PROVIDER_LOADED_STATE:
            SetTrackTrace("Entered Loaded States Reducer SET_CURRENT_SERVICE_PROVIDER SUCCESS", "LoadedStatesReducer", SeverityLevel.Information)
            return {
                ...state,
                currentServiceProvider: action.payload,
            }
        case LoadedStatesReducer_Types.SET_APPOINTMENTS_LOADED_STATE:
            SetTrackTrace("Entered Loaded States Reducer SET_APPOINTMENTS SUCCESS", "LoadedStatesReducer", SeverityLevel.Information)
            return {
                ...state,
                appointments: action.payload,
            }
        case LoadedStatesReducer_Types.SET_CUSTOMERS_LOADED_STATE:
            SetTrackTrace("Entered Loaded States Reducer SET_CUSTOMERS SUCCESS", "LoadedStatesReducer", SeverityLevel.Information)
            return {
                ...state,
                customers: action.payload,
            }
        default:
            SetTrackTrace("Loaded States Reducer Hits default switch: Returns original state", "LoadedStatesReducer", SeverityLevel.Error)
            return state
    }
};
