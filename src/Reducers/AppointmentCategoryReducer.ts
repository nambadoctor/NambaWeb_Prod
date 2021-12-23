import { Action } from "../Types/ActionType"

export enum AppointmentCategoryReducer_Types {
    SET_LOCAL_APPOINTMENT_CATEGORY = "SET_LOCAL_APPOINTMENT_CATEGORY"
}

export interface AppointmentCategoryState {
    selectedCategory: string
}

const initialState:AppointmentCategoryState = {
    selectedCategory: "Total"
}

export const appointmentCategoryReducer = (state: AppointmentCategoryState = initialState, action: Action) : AppointmentCategoryState => {
    switch (action.type) {
      case AppointmentCategoryReducer_Types.SET_LOCAL_APPOINTMENT_CATEGORY:
        return {
          selectedCategory: action.payload,
        }
      default:
        return state
    }
  };
  