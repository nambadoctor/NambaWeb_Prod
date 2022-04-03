import { SeverityLevel } from '@microsoft/applicationinsights-web';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { Action } from '../types/ActionType';

export enum SelectedDateReducer {
    SET_SELECTED_DATES = 'SET_SELECTED_DATES',
    SET_DATES_WITH_APPOINTMENTS = 'SET_DATES_WITH_APPOINTMENTS',
}

export interface SelectedDateState {
    selectedDateRage: Date[];
    datesWithAppointments: Date[];
}

const initialState: SelectedDateState = {
    selectedDateRage: [],
    datesWithAppointments: [],
};

export const selectedDateReducer = (
    state: SelectedDateState = initialState,
    action: Action,
): SelectedDateState => {
    SetTrackTrace(
        'Entered Selected Date Reducer: ' + action.type,
        'SelectedDateReducer',
        SeverityLevel.Information,
    );
    switch (action.type) {
        case SelectedDateReducer.SET_SELECTED_DATES:
            SetTrackTrace(
                'Entered Selected Date Reducer SET_LOCAL_SELECTED_DATES SUCCESS',
                'SelectedDateReducer',
                SeverityLevel.Information,
            );
            return {
                ...state,
                selectedDateRage: action.payload,
            };
        case SelectedDateReducer.SET_DATES_WITH_APPOINTMENTS:
            SetTrackTrace(
                'Entered Selected Date Reducer SET_LOCAL_DATES_WITH_APPOINTMENTS SUCCESS',
                'SelectedDateReducer',
                SeverityLevel.Information,
            );
            return {
                ...state,
                datesWithAppointments: action.payload,
            };
        default:
            SetTrackTrace(
                'Selected Date Reducer Hits default switch: Returns original state',
                'SelectedDateReducer',
                SeverityLevel.Error,
            );
            return state;
    }
};
