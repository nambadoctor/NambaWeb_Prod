import { Action } from "../Types/ActionType";
import { SelectedDateReducer } from "../Reducers/SelectedDateReducer";

function setAppointmentCategoryHelper(dates: Date[]) {
    return {
        type: SelectedDateReducer.SET_LOCAL_SELECTED_DATES,
        payload: dates
    };
}

export const SetSelectedDateRange = (dates: Date[]): Action => (setAppointmentCategoryHelper(dates));

