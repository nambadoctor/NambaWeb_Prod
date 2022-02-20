import { CurrentCustomer_Types } from "../Reducers/CurrentCustomerReducer";
import { Action } from "../Types/ActionType";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { INoteIncomingData } from "../Types/IncomingDataModels/NoteIncoming";
import IPrescriptionIncomingData from "../Types/IncomingDataModels/PrescriptionIncoming";
import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";
import { ITreatmentIncoming } from "../Types/IncomingDataModels/TreatmentIncoming";
import { ITreatmentPlanIncoming } from "../Types/IncomingDataModels/TreatmentPlanIncoming";

function setCustomerAction(customer: ICustomerIncomingData|null) {
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


function setTreatmentsAction(treatments: ITreatmentIncoming[]) {
    return {
        type: CurrentCustomer_Types.SET_TREATMENTS,
        payload: treatments
    };
}

function setTreatmentPlansAction(treatmentPlans: ITreatmentPlanIncoming[]) {
    return {
        type: CurrentCustomer_Types.SET_TREATMENT_PLANS,
        payload: treatmentPlans
    };
}

function clearAllAction() {
    return {
        type: CurrentCustomer_Types.CLEAR_ALL,
        payload: null
    };
}

export const SetCurrentCustomer = (customer: ICustomerIncomingData|null): Action => (setCustomerAction(customer));
export const SetNotes = (notes: INoteIncomingData[]): Action => (setNotesAction(notes));
export const SetReports = (reports: IReportIncomingData[]): Action => (setReportsAction(reports));
export const SetPrescriptions = (prescriptions: IPrescriptionIncomingData[]): Action => (setPrescriptionsAction(prescriptions));
export const SetPatientTreatmentPlans = (treatmentPlans: ITreatmentPlanIncoming[]): Action => (setTreatmentPlansAction(treatmentPlans));
export const SetPatientTreatments = (treatments: ITreatmentIncoming[]): Action => (setTreatmentsAction(treatments));

export const ClearCurrentCustomerState = (): Action => (clearAllAction());