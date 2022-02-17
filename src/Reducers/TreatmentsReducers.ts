import { Action } from "../Types/ActionType"
import { ITreatmentIncoming } from "../Types/IncomingDataModels/TreatmentIncoming";
import { ITreatmentPlanIncoming } from "../Types/IncomingDataModels/TreatmentPlanIncoming";

export enum Treatment_Types {
  SET_TREATMENT_PLANS = "SET_TREATMENT_PLANS",
  SET_TREATMENT = "SET_TREATMENT"
}

export interface TreatmentState {
  TreatmentPlans: ITreatmentPlanIncoming[],
  selectedTreatment: ITreatmentIncoming | null
}

const initialState: TreatmentState = {
  TreatmentPlans: [],
  selectedTreatment: null
}

export const treatmentsReducer = (state: TreatmentState = initialState, action: Action): TreatmentState => {
  switch (action.type) {
    case Treatment_Types.SET_TREATMENT:
      return {
        ...state,
        selectedTreatment: action.payload,
      }
    case Treatment_Types.SET_TREATMENT_PLANS:
      return {
        ...state,
        TreatmentPlans: action.payload,
      }
    default:
      return state
  }
};
