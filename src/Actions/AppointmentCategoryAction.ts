import { Action } from "../Types/ActionType";
import IDenormalisedAppointmentData from "../Types/DeNormalisedAppointment";
import {ThunkAction} from "redux-thunk";
import http from "../http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import { AppointmentState, Appointment_Types } from "../Reducers/AppointmentsReducer";
import { AppointmentCategoryReducer_Types } from "../Reducers/AppointmentCategoryReducer";

function setAppointmentCategoryHelper (selectedCategory:string) {
  return {
    type: AppointmentCategoryReducer_Types.SET_LOCAL_APPOINTMENT_CATEGORY,
    payload: selectedCategory
  };
}

export const SetAppointmentCategory = (selectedCategory:string): Action => (setAppointmentCategoryHelper(selectedCategory));

 