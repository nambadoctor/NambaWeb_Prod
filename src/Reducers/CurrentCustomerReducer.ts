import { Action } from "../Types/ActionType"
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { INoteIncomingData } from "../Types/IncomingDataModels/NoteIncoming";
import IPrescriptionIncomingData from "../Types/IncomingDataModels/PrescriptionIncoming";
import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";

export enum CurrentCustomer_Types {
    SET_CUSTOMER = "SET_CUSTOMER",
    SET_REPORTS = "SET_REPORTS",
    SET_PRESCRIPTIONS = "SET_PRESCRIPTIONS",
    SET_NOTES = "SET_NOTES",
    CLEAR_ALL = "CLEAR_ALL"
}

export interface CurrentCustomerState {
    Customer: ICustomerIncomingData | null,
    Reports: IReportIncomingData[] | null,
    Prescriptions: IPrescriptionIncomingData[] | null,
    Notes: INoteIncomingData[] | null
}

const initialState: CurrentCustomerState = {
    Customer: null,
    Reports: null,
    Prescriptions: null,
    Notes: null
}

export const CurrentCustomerReducer = (state: CurrentCustomerState = initialState, action: Action): CurrentCustomerState => {
    switch (action.type) {
        case CurrentCustomer_Types.SET_CUSTOMER:
            return {
                ...state,
                Customer: action.payload
            }
        case CurrentCustomer_Types.SET_REPORTS:
            return {
                ...state,
                Reports: action.payload
            }
        case CurrentCustomer_Types.SET_PRESCRIPTIONS:
            return {
                ...state,
                Prescriptions: action.payload
            }
        case CurrentCustomer_Types.SET_NOTES:
            return {
                ...state,
                Notes: action.payload
            }
        case CurrentCustomer_Types.CLEAR_ALL:
            return {
                Customer: null,
                Reports: null,
                Prescriptions: null,
                Notes: null
            }
        default:
            return state
    }
};
