import { Action } from "../Types/ActionType";
import IOrganisationData from "../Types/Organisation";
import {ThunkAction} from "redux-thunk";
import { OrganisationState, Org_Types } from "../Reducers/OrganisationsReducer";
import http from "../http-common";

function setOrgsTypeHelper (organisations:Array<IOrganisationData>) {
  return {
    type: Org_Types.SET_LOCAL_ORGS,
    payload: ["1","2","3"] //organisations
  };
}

export const setOrgs = (organisations:Array<IOrganisationData>): Action => (setOrgsTypeHelper(organisations));

export const getAllOrgs = (): ThunkAction<void, OrganisationState, null, Action> => async dispatch => {
  let response = await http.get<Array<IOrganisationData>>("/Organisation");
  console.log(response.data)
  dispatch(setOrgs(response.data));
};
