import { Action } from "../Types/ActionType"
import IDenormalisedAppointmentData from "../Types/DeNormalisedAppointment";

export enum Appointment_Types {
    SET_LOCAL_APPOINTMENTS = "SET_LOCAL_APPOINTMENTS"
}

export interface AppointmentState {
    appointments: IDenormalisedAppointmentData[]
}

const initialState:AppointmentState = {
    appointments: []
}

export const appointmentReducer = (state: AppointmentState = initialState, action: Action) : AppointmentState => {
    switch (action.type) {
      case Appointment_Types.SET_LOCAL_APPOINTMENTS:
        return {
          appointments: action.payload,
        }
      default:
        return state
    }
  };
  