import { Action } from '../Types/ActionType';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import {
    LoadedState,
    LoadedStatesReducer_Types,
} from '../Reducers/LoadedStatesReducer';
import SetTrackTrace from '../Telemetry/SetTrackTrace';
import { SeverityLevel } from '@microsoft/applicationinsights-web';

//TODO: MAKE ALL COMMON USECASE ACTIONS IN ONE FILE
function setBooleanPayload(payload: boolean, actionType: string) {
    return {
        type: actionType,
        payload: payload,
    };
}

function setDatePayload(payload: Date, actionType: string) {
    return {
        type: actionType,
        payload: payload,
    };
}

export const SetInitialLoadingStartTime =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(
            setDatePayload(
                new Date(),
                LoadedStatesReducer_Types.SET_INITIAL_START_LOAD_TIME_STATE,
            ),
        );
    };

export const SetServiceProviderBasicLoadedState =
    (isLoaded: boolean): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(
            setBooleanPayload(
                isLoaded,
                LoadedStatesReducer_Types.SET_SERVICE_PROVIDER_BASIC_LOADED_STATE,
            ),
        );
        dispatch(CheckForAllStatesLoaded());
    };

export const SetCurrentServiceProviderLoadedState =
    (isLoaded: boolean): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(
            setBooleanPayload(
                isLoaded,
                LoadedStatesReducer_Types.SET_CURRENT_SERVICE_PROVIDER_LOADED_STATE,
            ),
        );
        dispatch(CheckForAllStatesLoaded());
    };

export const SetAppointmentsLoadedState =
    (isLoaded: boolean): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(
            setBooleanPayload(
                isLoaded,
                LoadedStatesReducer_Types.SET_APPOINTMENTS_LOADED_STATE,
            ),
        );
        dispatch(CheckForAllStatesLoaded());
    };

export const SetCustomersLoadedState =
    (isLoaded: boolean): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(
            setBooleanPayload(
                isLoaded,
                LoadedStatesReducer_Types.SET_CUSTOMERS_LOADED_STATE,
            ),
        );
        dispatch(CheckForAllStatesLoaded());
    };

export const CheckForAllStatesLoaded =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        const loadedState = getState().LoadedState;

        if (
            loadedState.serviceProviderBasic &&
            loadedState.currentServiceProvider &&
            loadedState.appointments &&
            loadedState.customers
        ) {
            let currentDate = new Date();
            let initialDate = loadedState.initialLoadStartTime!;

            SetTrackTrace(
                'Dashboard Loading Time: ' +
                    (currentDate.getTime() - initialDate.getTime()),
                'All Initial Calls Being Set',
                SeverityLevel.Information,
            );
        }
    };
