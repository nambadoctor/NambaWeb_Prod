import { Action } from "../Types/ActionType"

export enum SelectedDateReducer {
    SET_LOCAL_SELECTED_DATES = "SET_LOCAL_SELECTED_DATES"
}

export interface SelectedDateState {
    dates: Date[]
}

const initialState:SelectedDateState = {
    dates: []
}

export const selectedDateReducer = (state: SelectedDateState = initialState, action: Action) : SelectedDateState => {
    switch (action.type) {
      case SelectedDateReducer.SET_LOCAL_SELECTED_DATES:
        return {
          dates: action.payload,
        }
      default:
        return state
    }
  };
  