import { SeverityLevel } from "@microsoft/applicationinsights-web";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { Action } from "../Types/ActionType"
import IAppointmentData from "../Types/IncomingDataModels/Appointment";
import { INoteIncomingData } from "../Types/IncomingDataModels/NoteIncoming";
import IPrescriptionIncomingData from "../Types/IncomingDataModels/PrescriptionIncoming";
import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";

export enum ConsultationTypes_Types {
    SET_APPOINTMENT = "SET_APPOINTMENT",
    SET_APPOINTMENT_REPORTS = "SET_APPOINTMENT_REPORTS",
    SET_APPOINTMENT_PRESCRIPTIONS = "SET_APPOINTMENT_PRESCRIPTIONS",
    SET_APPOINTMENT_NOTES = "SET_APPOINTMENT_NOTES",
    SET_PREVIOUS_APPOINTMENT = "SET_PREVIOUS_APPOINTMENT",
    SET_NEXT_APPOINTMENT = "SET_NEXT_APPOINTMENT",
    CLEAR_ALL_CONSULTATION_STATES = "CLEAR_ALL_CONSULTATION_STATES"
}

export interface ConsultationState {
    Appointment: IAppointmentData | null,
    Reports: IReportIncomingData[] | null,
    Prescriptions: IPrescriptionIncomingData[] | null,
    Notes: INoteIncomingData[] | null,
    previousAppointment: IAppointmentData | null,
    nextAppointment: IAppointmentData | null
}

const initialState: ConsultationState = {
    Appointment: null,
    Reports: null,
    Prescriptions: null,
    Notes: null,
    previousAppointment: null,
    nextAppointment: null
}

export const ConsultationReducer = (state: ConsultationState = initialState, action: Action): ConsultationState => {
    SetTrackTrace("Entered Consultation Reducer: " + action.type, "ConsultationReducer", SeverityLevel.Information)
    switch (action.type) {
        case ConsultationTypes_Types.SET_APPOINTMENT:
            SetTrackTrace("Consultation Reducer Set Current Appointment in Store", "ConsultationReducer", SeverityLevel.Information)
            return {
                ...state,
                Appointment: action.payload
            }
        case ConsultationTypes_Types.SET_APPOINTMENT_REPORTS:
            SetTrackTrace("Consultation Reducer Set Current Customer Reports in Store", "ConsultationReducer", SeverityLevel.Information)
            return {
                ...state,
                Reports: action.payload
            }
        case ConsultationTypes_Types.SET_APPOINTMENT_PRESCRIPTIONS:
            SetTrackTrace("Consultation Reducer Set Current Customer Presription in Store", "ConsultationReducer", SeverityLevel.Information)
            return {
                ...state,
                Prescriptions: action.payload
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
        case ConsultationTypes_Types.SET_APPOINTMENT_NOTES:
            SetTrackTrace("Consultation Reducer Set Current Appointment Notes in Store", "ConsultationReducer", SeverityLevel.Information)
            return {
                ...state,
                Notes: action.payload
            }
        case ConsultationTypes_Types.CLEAR_ALL_CONSULTATION_STATES:
            SetTrackTrace("Consultation Reducer Clear All Consultation States in Store", "ConsultationReducer", SeverityLevel.Information)
            return {
                Appointment: null,
                Reports: null,
                Prescriptions: null,
                Notes: null,
                previousAppointment: null,
                nextAppointment: null
            }
        default:
            SetTrackTrace("Consultation Reducer Hits default switch: Returns original state", "ConsultationReducer", SeverityLevel.Information)
            return state
    }
};
