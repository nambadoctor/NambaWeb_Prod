import { Action } from "../Types/ActionType"

export enum SelectedDateReducer {
  SET_LOCAL_SELECTED_DATES = "SET_LOCAL_SELECTED_DATES",
    SET_LOCAL_DATES_WITH_APPOINTMENTS = "SET_LOCAL_DATES_WITH_APPOINTMENTS"
}

export interface SelectedDateState {
  dates: Date[],
  datesWithAppointments: Date[]
}

const initialState: SelectedDateState = {
  dates: [],
  datesWithAppointments: []
}

export const selectedDateReducer = (state: SelectedDateState = initialState, action: Action): SelectedDateState => {
  switch (action.type) {
    case SelectedDateReducer.SET_LOCAL_SELECTED_DATES:
      return {
        ...state,
        dates: action.payload,
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
