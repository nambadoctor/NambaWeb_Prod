import { Action } from "../Types/ActionType"
import { ITreatmentIncoming } from "../Types/IncomingDataModels/TreatmentIncoming";
import { ITreatmentPlanIncoming } from "../Types/IncomingDataModels/TreatmentPlanIncoming";

export enum Treatment_Types {
  SET_TREATMENT_PLANS = "SET_TREATMENT_PLANS",
  SET_TREATMENT = "SET_TREATMENT",
  SHOW_TREATMENT_PLAN_POPUP = "SHOW_TREATMENT_PLAN_POPUP"
}

export interface TreatmentState {
  TreatmentPlans: ITreatmentPlanIncoming[],
  selectedTreatment: ITreatmentIncoming | null
  showTreatmentPlanPopup: boolean
}

const initialState: TreatmentState = {
  TreatmentPlans: [],
  selectedTreatment: null,
  showTreatmentPlanPopup: false
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
    case Treatment_Types.SHOW_TREATMENT_PLAN_POPUP:
      return {
        ...state,
        showTreatmentPlanPopup: action.payload,
      }
    default:
      return state
  }
};
