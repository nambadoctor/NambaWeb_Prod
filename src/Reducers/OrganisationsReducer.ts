import { Action } from "../Types/ActionType"
import IOrganisationBasic from "../Types/ClientDataModels/OrganisationBasic";

export enum Org_Types {
  SET_LOCAL_ORGS = "SET_LOCAL_ORGS",
  SET_LOCAL_SELECTED_ORG = "SET_LOCAL_SELECTED_ORG"
}

export interface OrganisationState {
  organisations: IOrganisationBasic[];
  selectedOrganisation?: IOrganisationBasic
}

const initialState: OrganisationState = {
  organisations: []
}

export const orgReducer = (state: OrganisationState = initialState, action: Action): OrganisationState => {
  switch (action.type) {
    case Org_Types.SET_LOCAL_ORGS:
      console.log("RECIEVED ORGS TO SELECT: " + action.payload)
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
