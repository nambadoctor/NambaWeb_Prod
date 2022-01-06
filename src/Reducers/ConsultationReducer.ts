import { SeverityLevel } from "@microsoft/applicationinsights-web";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { Action } from "../Types/ActionType"
import IAppointmentData from "../Types/IncomingDataModels/Appointment";
import ICustomerData from "../Types/IncomingDataModels/Customer";

export enum ConsultationTypes_Types {
    SET_CURRENT_APPOINTMENT = "SET_CURRENT_APPOINTMENT",
    SET_CURRENT_CUSTOMER = "SET_CURRENT_CUSTOMER"
}

export interface ConsultationState {
    currentAppointment: IAppointmentData | null,
    currentCustomer: ICustomerData | null
}

const initialState: ConsultationState = {
    currentAppointment: null,
    currentCustomer: null
}

export const ConsultationReducer = (state: ConsultationState = initialState, action: Action): ConsultationState => {
    SetTrackTrace("Entered Consultation Reducer: " + action.type, "ConsultationReducer", SeverityLevel.Information)
    switch (action.type) {
        case ConsultationTypes_Types.SET_CURRENT_APPOINTMENT:
            SetTrackTrace("Consultation Reducer Set Current Appointment in Store", "ConsultationReducer", SeverityLevel.Information)
            return {
                ...state,
                currentAppointment: action.payload
            }
        case ConsultationTypes_Types.SET_CURRENT_CUSTOMER:
            SetTrackTrace("Consultation Reducer Set Current Customer in Store", "ConsultationReducer", SeverityLevel.Information)
            return {
                ...state,
                currentCustomer: action.payload
            }
        default:
            SetTrackTrace("Consultation Reducer Hits default switch: Returns original state", "ConsultationReducer", SeverityLevel.Information)
            return state
    }
};
