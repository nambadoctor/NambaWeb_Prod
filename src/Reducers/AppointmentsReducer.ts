import { Action } from "../Types/ActionType"
import IAppointmentData from "../Types/ClientDataModels/Appointment";

export enum Appointment_Types {
  SET_LOCAL_APPOINTMENTS = "SET_LOCAL_APPOINTMENTS",
  SET_LOCAL_FILTERED_APPOINTMENTS = "SET_LOCAL_FILTERED_APPOINTMENTS"
}

export interface AppointmentState {
  appointments: IAppointmentData[],
  filteredAppointments: IAppointmentData[]
}

const initialState: AppointmentState = {
  appointments: [],
  filteredAppointments: []
}

export const appointmentReducer = (state: AppointmentState = initialState, action: Action): AppointmentState => {
  switch (action.type) {
    case Appointment_Types.SET_LOCAL_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      }
    case Appointment_Types.SET_LOCAL_FILTERED_APPOINTMENTS:
      return {
        ...state,
        filteredAppointments: action.payload
      }
    default:
      return state
  }
};
