import { Action } from "../Types/ActionType"
import IOrganisationData from "../Types/Organisation";
import { Reducer } from "redux";

export enum Org_Types {
    SET_LOCAL_ORGS = "SET_LOCAL_ORGS"
}

export interface OrganisationState {
    organisations: IOrganisationData[]
}

const initialState = {
    organisations: []
}

export const orgReducer: Reducer<OrganisationState, Action> = (state = initialState, action) => {
    switch (action.type) {
        case Org_Types.SET_LOCAL_ORGS: {
            return state
        }
        default:
            return state
    }
};