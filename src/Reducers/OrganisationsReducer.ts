import { Action } from "../Types/ActionType"
import IOrganisationData from "../Types/Organisation";

export enum Org_Types {
  SET_LOCAL_ORGS = "SET_LOCAL_ORGS",
  SET_LOCAL_SELECTED_ORG = "SET_LOCAL_SELECTED_ORG"
}

export interface OrganisationState {
  organisations: IOrganisationData[];
  selectedOrganisation?: IOrganisationData
}

const initialState: OrganisationState = {
  organisations: []
}

export const orgReducer = (state: OrganisationState = initialState, action: Action): OrganisationState => {
  switch (action.type) {
    case Org_Types.SET_LOCAL_ORGS:
      return {
        ...state,
        organisations: action.payload,
      }
    case Org_Types.SET_LOCAL_SELECTED_ORG:
      return {
        ...state,
        selectedOrganisation: action.payload,
      }
    default:
      return state
  }
};
