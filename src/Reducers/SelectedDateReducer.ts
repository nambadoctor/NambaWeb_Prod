import { Action } from "../Types/ActionType"

export enum SelectedDateReducer {
  SET_LOCAL_SELECTED_DATES = "SET_LOCAL_SELECTED_DATES",
    SET_LOCAL_DATES_WITH_APPOINTMENTS = "SET_LOCAL_DATES_WITH_APPOINTMENTS"
}

export interface SelectedDateState {
  selectedDateRage: Date[],
  datesWithAppointments: Date[]
}

const initialState: SelectedDateState = {
  selectedDateRage: [],
  datesWithAppointments: []
}

export const selectedDateReducer = (state: SelectedDateState = initialState, action: Action): SelectedDateState => {
  switch (action.type) {
    case SelectedDateReducer.SET_LOCAL_SELECTED_DATES:
      return {
        ...state,
        selectedDateRage: action.payload,
      }
    case SelectedDateReducer.SET_LOCAL_DATES_WITH_APPOINTMENTS:
      return {
        ...state,
        datesWithAppointments: action.payload,
      }
    default:
      return state
  }
};
