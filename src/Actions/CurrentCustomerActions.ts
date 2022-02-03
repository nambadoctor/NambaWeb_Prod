import { CurrentCustomer_Types } from "../Reducers/CurrentCustomerReducer";
import { Action } from "../Types/ActionType";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { INoteIncomingData } from "../Types/IncomingDataModels/NoteIncoming";
import IPrescriptionIncomingData from "../Types/IncomingDataModels/PrescriptionIncoming";
import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";

function setCustomerAction(customer: ICustomerIncomingData) {
    return {
        type: CurrentCustomer_Types.SET_CUSTOMER,
        payload: customer
    };
}

function setReportsAction(reports: IReportIncomingData[]) {
    return {
        type: CurrentCustomer_Types.SET_REPORTS,
        payload: reports
    };
}

function setPrescriptionsAction(prescriptions: IPrescriptionIncomingData[]) {
    return {
        type: CurrentCustomer_Types.SET_PRESCRIPTIONS,
        payload: prescriptions
    };
}

function setNotesAction(notes: INoteIncomingData[]) {
    return {
        type: CurrentCustomer_Types.SET_NOTES,
        payload: notes
    };
}

export const SetCurrentCustomer = (customer: ICustomerIncomingData): Action => (setCustomerAction(customer));
export const SetNotes = (notes: INoteIncomingData[]): Action => (setNotesAction(notes));
export const SetReports = (reports: IReportIncomingData[]): Action => (setReportsAction(reports));
export const SetPrescriptions = (prescriptions: IPrescriptionIncomingData[]): Action => (setPrescriptionsAction(prescriptions));
