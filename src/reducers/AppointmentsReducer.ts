import { SeverityLevel } from '@microsoft/applicationinsights-web';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { Action } from '../types/ActionType';
import IAppointmentData from '../types/IncomingDataModels/Appointment';

export enum Appointment_Types {
    SET_APPOINTMENT_STATE_APPOINTMENTS = 'SET_APPOINTMENT_STATE_APPOINTMENTS',
}

export interface AppointmentState {
    appointments: IAppointmentData[];
}

const initialState: AppointmentState = {
    appointments: [],
};

export const appointmentReducer = (
    state: AppointmentState = initialState,
    action: Action,
): AppointmentState => {
    SetTrackTrace(
        'Entered Appointment Reducer: ' + action.type,
        'AppointmentReducer',
        SeverityLevel.Information,
    );
    switch (action.type) {
        case Appointment_Types.SET_APPOINTMENT_STATE_APPOINTMENTS:
            SetTrackTrace(
                'Appointments Reducer Set Appointments in Store',
                'AppointmentReducer',
                SeverityLevel.Information,
            );
            return {
                ...state,
                appointments: action.payload,
            };
        default:
            SetTrackTrace(
                'Appointments Reducer Hits default switch: Returns original state',
                'AppointmentReducer',
                SeverityLevel.Information,
            );
            return state;
    }
};
