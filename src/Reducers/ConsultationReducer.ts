import { SeverityLevel } from "@microsoft/applicationinsights-web";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { Action } from "../Types/ActionType"
import IAppointmentData from "../Types/IncomingDataModels/Appointment";
import ICustomerData from "../Types/IncomingDataModels/Customer";
import IPrescriptionIncomingData from "../Types/IncomingDataModels/PrescriptionIncoming";
import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";

export enum ConsultationTypes_Types {
    SET_CURRENT_APPOINTMENT = "SET_CURRENT_APPOINTMENT",
    SET_CURRENT_CUSTOMER = "SET_CURRENT_CUSTOMER",
    SET_CURRENT_CUSTOMER_REPORTS = "SET_CURRENT_CUSTOMER_REPORTS",
    SET_CURRENT_CUSTOMER_PRESCRIPTIONS = "SET_CURRENT_CUSTOMER_PRESCRIPTIONS",

    SET_PREVIOUS_APPOINTMENT = "SET_PREVIOUS_APPOINTMENT",
    SET_NEXT_APPOINTMENT = "SET_NEXT_APPOINTMENT",
}

export interface ConsultationState {
    currentAppointment: IAppointmentData | null,
    currentCustomer: ICustomerData | null,
    currentCustomerReports: IReportIncomingData[] | null,
    currentCustomerPrescriptions: IPrescriptionIncomingData[] | null,

    previousAppointment: IAppointmentData | null,
    nextAppointment: IAppointmentData | null
}

const initialState: ConsultationState = {
    currentAppointment: null,
    currentCustomer: null,
    currentCustomerReports: null,
    currentCustomerPrescriptions: null,

    previousAppointment: null,
    nextAppointment: null
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
        case ConsultationTypes_Types.SET_CURRENT_CUSTOMER_REPORTS:
            SetTrackTrace("Consultation Reducer Set Current Customer Reports in Store", "ConsultationReducer", SeverityLevel.Information)
            return {
                ...state,
                currentCustomerReports: action.payload
            }
        case ConsultationTypes_Types.SET_CURRENT_CUSTOMER_PRESCRIPTIONS:
            SetTrackTrace("Consultation Reducer Set Current Customer Presription in Store", "ConsultationReducer", SeverityLevel.Information)
            return {
                ...state,
                currentCustomerPrescriptions: action.payload
            }
        case ConsultationTypes_Types.SET_PREVIOUS_APPOINTMENT:
            SetTrackTrace("Consultation Reducer Set Previous Appointment in Store", "ConsultationReducer", SeverityLevel.Information)
            return {
                ...state,
                previousAppointment: action.payload
            }
        case ConsultationTypes_Types.SET_NEXT_APPOINTMENT:
            SetTrackTrace("Consultation Reducer Set Previous Appointment in Store", "ConsultationReducer", SeverityLevel.Information)
            return {
                ...state,
                nextAppointment: action.payload
            }
        default:
            SetTrackTrace("Consultation Reducer Hits default switch: Returns original state", "ConsultationReducer", SeverityLevel.Information)
            return state
    }
};
