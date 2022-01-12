import { SeverityLevel } from "@microsoft/applicationinsights-web";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { Action } from "../Types/ActionType"
import IAppointmentData from "../Types/IncomingDataModels/Appointment";

export enum Appointment_Types {
  SET_APPOINTMENT_STATE_APPOINTMENTS = "SET_APPOINTMENT_STATE_APPOINTMENTS",
  SET_APPOINTMENT_STATE_FILTERED_APPOINTMENTS = "SET_APPOINTMENT_STATE_FILTERED_APPOINTMENTS",
}

export interface AppointmentState {
  appointments: IAppointmentData[],
  filteredAppointments: IAppointmentData[]
}

const initialState: AppointmentState = {
  appointments: [],
  filteredAppointments: [],
}

export const appointmentReducer = (state: AppointmentState = initialState, action: Action): AppointmentState => {
  SetTrackTrace("Entered Appointment Reducer: " + action.type, "AppointmentReducer", SeverityLevel.Information)
  switch (action.type) {
    case Appointment_Types.SET_APPOINTMENT_STATE_APPOINTMENTS:
      SetTrackTrace("Appointments Reducer Set Appointments in Store", "AppointmentReducer", SeverityLevel.Information)
      return {
        ...state,
        appointments: action.payload,
      }
    case Appointment_Types.SET_APPOINTMENT_STATE_FILTERED_APPOINTMENTS:
      SetTrackTrace("Appointments Reducer Set Filtered Appointments in Store", "AppointmentReducer", SeverityLevel.Information)
      return {
        ...state,
        filteredAppointments: action.payload
      }
    default:
      SetTrackTrace("Appointments Reducer Hits default switch: Returns original state", "AppointmentReducer", SeverityLevel.Information)
      return state
  }
};
