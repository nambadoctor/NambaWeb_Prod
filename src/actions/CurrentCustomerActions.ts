import { CurrentCustomer_Types } from '../reducers/CurrentCustomerReducer';
import { Action } from '../types/ActionType';
import ICustomerIncomingData from '../types/IncomingDataModels/CustomerIncoming';
import { INoteIncomingData } from '../types/IncomingDataModels/NoteIncoming';
import IPrescriptionIncomingData from '../types/IncomingDataModels/PrescriptionIncoming';
import IReportIncomingData from '../types/IncomingDataModels/ReportIncoming';
import { ITreatmentIncoming } from '../types/IncomingDataModels/TreatmentIncoming';
import ITreatmentPlanDocumentIncomingData from '../types/IncomingDataModels/TreatmentPlanDocumentIncoming';
import { ITreatmentPlanIncoming } from '../types/IncomingDataModels/TreatmentPlanIncoming';

function setCustomerAction(customer: ICustomerIncomingData | null) {
    return {
        type: CurrentCustomer_Types.SET_CUSTOMER,
        payload: customer,
    };
}

function setReportsAction(reports: IReportIncomingData[]) {
    return {
        type: CurrentCustomer_Types.SET_REPORTS,
        payload: reports,
    };
}

function setPrescriptionsAction(prescriptions: IPrescriptionIncomingData[]) {
    return {
        type: CurrentCustomer_Types.SET_PRESCRIPTIONS,
        payload: prescriptions,
    };
}

function setNotesAction(notes: INoteIncomingData[]) {
    return {
        type: CurrentCustomer_Types.SET_NOTES,
        payload: notes,
    };
}

function setTreatmentsAction(treatments: ITreatmentIncoming[]) {
    return {
        type: CurrentCustomer_Types.SET_TREATMENTS,
        payload: treatments,
    };
}

function setTreatmentPlansAction(treatmentPlans: ITreatmentPlanIncoming[]) {
    return {
        type: CurrentCustomer_Types.SET_TREATMENT_PLANS,
        payload: treatmentPlans,
    };
}

function setTreatmentPlanDocumentsAction(
    treatmentPlanDocuments: ITreatmentPlanDocumentIncomingData[],
) {
    return {
        type: CurrentCustomer_Types.SET_TREATMENT_PLAN_DOCUMENTS,
        payload: treatmentPlanDocuments,
    };
}

function clearAllAction() {
    return {
        type: CurrentCustomer_Types.CLEAR_ALL,
        payload: null,
    };
}

export const SetCurrentCustomer = (
    customer: ICustomerIncomingData | null,
): Action => setCustomerAction(customer);
export const SetNotes = (notes: INoteIncomingData[]): Action =>
    setNotesAction(notes);
export const SetReports = (reports: IReportIncomingData[]): Action =>
    setReportsAction(reports);
export const SetPrescriptions = (
    prescriptions: IPrescriptionIncomingData[],
): Action => setPrescriptionsAction(prescriptions);
export const SetPatientTreatmentPlans = (
    treatmentPlans: ITreatmentPlanIncoming[],
): Action => setTreatmentPlansAction(treatmentPlans);
export const SetPatientTreatments = (
    treatments: ITreatmentIncoming[],
): Action => setTreatmentsAction(treatments);
export const SetPatientTreatmentPlanDocuments = (
    treatmentPlanDocuments: ITreatmentPlanDocumentIncomingData[],
): Action => setTreatmentPlanDocumentsAction(treatmentPlanDocuments);

export const ClearCurrentCustomerState = (): Action => clearAllAction();
