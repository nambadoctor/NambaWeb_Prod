import { Action } from "../Types/ActionType"
import IOrganisationData from "../Types/Organisation";
import { Reducer } from "redux";
import { getAllOrgs } from "../Actions/OrganisationActions";

export enum Org_Types {
    SET_LOCAL_ORGS = "SET_LOCAL_ORGS"
}

export interface OrganisationState {
    organisations: string[]
}

const initialState:OrganisationState = {
    organisations: []
}

export const orgReducer = (state: OrganisationState = initialState, action: Action) : OrganisationState => {
    switch (action.type) {
      case Org_Types.SET_LOCAL_ORGS:
        return {
          organisations: action.payload,
        }
      default:
        return state
    }
  };
  