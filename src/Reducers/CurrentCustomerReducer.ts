import { Action } from "../Types/ActionType"
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { INoteIncomingData } from "../Types/IncomingDataModels/NoteIncoming";
import IPrescriptionIncomingData from "../Types/IncomingDataModels/PrescriptionIncoming";
import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";

export enum CurrentCustomer_Types {
    SET_CUSTOMER = "SET_CUSTOMER",
    SET_REPORTS = "SET_REPORTS",
    SET_PRESCRIPTIONS = "SET_PRESCRIPTIONS",
    SET_NOTES = "SET_NOTES"
}

export interface CurrentCustomerState {
    currentCustomer: ICustomerIncomingData | null,
    allCustomerReports: IReportIncomingData[] | null,
    allCustomerPrescriptions: IPrescriptionIncomingData[] | null,
    allNotesForCustomer: INoteIncomingData[] | null
}

const initialState: CurrentCustomerState = {
    currentCustomer: null,
    allCustomerReports: null,
    allCustomerPrescriptions: null,
    allNotesForCustomer: null
}

export const CurrentCustomerReducer = (state: CurrentCustomerState = initialState, action: Action): CurrentCustomerState => {
    switch (action.type) {
        case CurrentCustomer_Types.SET_CUSTOMER:
            return {
                ...state,
                currentCustomer: action.payload
            }
        case CurrentCustomer_Types.SET_REPORTS:
            return {
                ...state,
                allCustomerReports: action.payload
            }
        case CurrentCustomer_Types.SET_PRESCRIPTIONS:
            return {
                ...state,
                allCustomerPrescriptions: action.payload
            }
        case CurrentCustomer_Types.SET_NOTES:
            return {
                ...state,
                allNotesForCustomer: action.payload
            }
        default:
            return state
    }
};
