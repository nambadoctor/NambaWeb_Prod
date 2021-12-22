import { Action } from "../Types/ActionType";
import IOrganisationData from "../Types/Organisation";
import {ThunkAction} from "redux-thunk";
import { OrganisationState, Org_Types } from "../Reducers/OrganisationsReducer";
import http from "../http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";

function setOrgsTypeHelper (organisations:Array<IOrganisationData>) {
  return {
    type: Org_Types.SET_LOCAL_ORGS,
    payload: organisations
  };
}

export const SetOrgs = (organisations:Array<IOrganisationData>): Action => (setOrgsTypeHelper(organisations));

export const GetAllOrgs = (): ThunkAction<void, OrganisationState, null, Action> => async dispatch => {
  let headersContent = await GetHeadersHelper();
  let response = await http.get<Array<IOrganisationData>>("/Organisation", {headers : headersContent});
  console.log(response.data)
  dispatch(SetOrgs(response.data));
};
 