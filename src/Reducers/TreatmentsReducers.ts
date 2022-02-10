import { Action } from "../Types/ActionType"
import { ITreatmentIncoming } from "../Types/IncomingDataModels/TreatmentIncoming";

export enum Treatment_Types {
  SET_TREATMENTS = "SET_TREATMENTS",
}

export interface TreatmentState {
  treatments: ITreatmentIncoming[],
}

const initialState: TreatmentState = {
    treatments: [],
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
