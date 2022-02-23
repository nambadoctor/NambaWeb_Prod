import { Action } from "../Types/ActionType"
import { ITreatmentIncoming } from "../Types/IncomingDataModels/TreatmentIncoming";
import { ITreatmentPlanIncoming } from "../Types/IncomingDataModels/TreatmentPlanIncoming";

export enum Treatment_Types {
  SET_TREATMENTS = "SET_TREATMENTS",
}

export interface TreatmentState {
  treatments: ITreatmentIncoming[] | null
}

const initialState: TreatmentState = {
  treatments: null,
}

export const treatmentsReducer = (state: TreatmentState = initialState, action: Action): TreatmentState => {
  switch (action.type) {
    case Treatment_Types.SET_TREATMENTS:
      return {
        ...state,
        treatments: action.payload,
      }
    default:
      return state
  }
};
