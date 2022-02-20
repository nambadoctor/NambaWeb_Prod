import { Treatment_Types } from "../Reducers/TreatmentsReducers";
import { Action } from "../Types/ActionType";
import { ITreatmentIncoming } from "../Types/IncomingDataModels/TreatmentIncoming";

export const SetSelectedTreatment = (treatment: ITreatmentIncoming): Action => ({
    type: Treatment_Types.SET_TREATMENT,
    payload: treatment
});

export const SetTreatmentPlanPopup = (showPopup: boolean): Action => ({
    type: Treatment_Types.SHOW_TREATMENT_PLAN_POPUP,
    payload: showPopup
});
