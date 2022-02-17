import { Treatment_Types } from "../Reducers/TreatmentsReducers";
import { Action } from "../Types/ActionType";
import { ITreatmentIncoming } from "../Types/IncomingDataModels/TreatmentIncoming";

export const SetSelectedTreatment = (treatment: ITreatmentIncoming): Action => ({
    type: Treatment_Types.SET_TREATMENT,
    payload: treatment
});

export const SetTreatmentPlans = (treatments: ITreatmentIncoming[]): Action => ({
    type: Treatment_Types.SET_TREATMENT_PLANS,
    payload: treatments
});
