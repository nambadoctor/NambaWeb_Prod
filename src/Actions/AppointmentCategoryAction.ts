import { Action } from "../Types/ActionType";
import { AppointmentCategoryReducer_Types } from "../Reducers/AppointmentCategoryReducer";

function setAppointmentCategoryHelper (selectedCategory:string) {
  return {
    type: AppointmentCategoryReducer_Types.SET_LOCAL_APPOINTMENT_CATEGORY,
    payload: selectedCategory
  };
}

export const SetAppointmentCategory = (selectedCategory:string): Action => (setAppointmentCategoryHelper(selectedCategory));

 