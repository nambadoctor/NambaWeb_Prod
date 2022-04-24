import { Action } from '../types/ActionType';
import ICustomerIncomingData from '../types/IncomingDataModels/CustomerIncoming';
import { INoteIncomingData } from '../types/IncomingDataModels/NoteIncoming';
import IPrescriptionIncomingData from '../types/IncomingDataModels/PrescriptionIncoming';
import IReportIncomingData from '../types/IncomingDataModels/ReportIncoming';
import { ITreatmentIncoming } from '../types/IncomingDataModels/TreatmentIncoming';
import ITreatmentPlanDocumentIncomingData from '../types/IncomingDataModels/TreatmentPlanDocumentIncoming';
import { ITreatmentPlanIncoming } from '../types/IncomingDataModels/TreatmentPlanIncoming';

export enum CurrentCustomer_Types {
    SET_CUSTOMER = 'SET_CUSTOMER',
    SET_REPORTS = 'SET_REPORTS',
    SET_PRESCRIPTIONS = 'SET_PRESCRIPTIONS',
    SET_NOTES = 'SET_NOTES',
    SET_TREATMENT_PLANS = 'SET_TREATMENT_PLANS',
    SET_TREATMENTS = 'SET_TREATMENTS',
    SET_TREATMENT_PLAN_DOCUMENTS = 'SET_TREATMENT_PLAN_DOCUMENTS',
    CLEAR_ALL = 'CLEAR_ALL',
}

export interface CurrentCustomerState {
    Customer: ICustomerIncomingData | null;
    Reports: IReportIncomingData[] | null;
    Prescriptions: IPrescriptionIncomingData[] | null;
    Notes: INoteIncomingData[] | null;
    TreatmentPlans: ITreatmentPlanIncoming[] | null;
    Treatments: ITreatmentIncoming[] | null;
    TreatmentPlanDocuments: ITreatmentPlanDocumentIncomingData[] | null;
}

const initialState: CurrentCustomerState = {
    Customer: null,
    Reports: null,
    Prescriptions: null,
    Notes: null,
    TreatmentPlans: null,
    Treatments: null,
    TreatmentPlanDocuments: null,
};

export const CurrentCustomerReducer = (
    state: CurrentCustomerState = initialState,
    action: Action,
): CurrentCustomerState => {
    switch (action.type) {
        case CurrentCustomer_Types.SET_CUSTOMER:
            return {
                ...state,
                Customer: action.payload,
            };
        case CurrentCustomer_Types.SET_REPORTS:
            return {
                ...state,
                Reports: action.payload,
            };
        case CurrentCustomer_Types.SET_PRESCRIPTIONS:
            return {
                ...state,
                Prescriptions: action.payload,
            };
        case CurrentCustomer_Types.SET_NOTES:
            return {
                ...state,
                Notes: action.payload,
            };
        case CurrentCustomer_Types.SET_TREATMENT_PLANS:
            return {
                ...state,
                TreatmentPlans: action.payload,
            };
        case CurrentCustomer_Types.SET_TREATMENTS:
            return {
                ...state,
                Treatments: action.payload,
            };
        case CurrentCustomer_Types.SET_TREATMENT_PLAN_DOCUMENTS:
            return {
                ...state,
                TreatmentPlanDocuments: action.payload,
            };
        case CurrentCustomer_Types.CLEAR_ALL:
            return {
                Customer: null,
                Reports: null,
                Prescriptions: null,
                Notes: null,
                TreatmentPlans: null,
                Treatments: null,
                TreatmentPlanDocuments: null,
            };
        default:
            return state;
    }
};
