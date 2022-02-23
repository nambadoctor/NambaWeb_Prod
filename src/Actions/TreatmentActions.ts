import { Treatment_Types } from "../Reducers/TreatmentsReducers";
import { Action } from "../Types/ActionType";
import { ITreatmentIncoming } from "../Types/IncomingDataModels/TreatmentIncoming";

export const SetTreatments = (treatments: ITreatmentIncoming[]): Action => ({
    type: Treatment_Types.SET_TREATMENTS,
    payload: treatments
});