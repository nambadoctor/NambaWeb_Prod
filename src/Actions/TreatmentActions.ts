import { Treatment_Types } from '../reducers/TreatmentsReducers';
import { Action } from '../types/ActionType';
import { ITreatmentIncoming } from '../types/IncomingDataModels/TreatmentIncoming';

export const SetTreatments = (treatments: ITreatmentIncoming[]): Action => ({
    type: Treatment_Types.SET_TREATMENTS,
    payload: treatments,
});
