import { Action } from "../Types/ActionType";
import IOrganisationData from "../Types/Organisation";
import {ThunkAction} from "redux-thunk";
import { OrganisationState, Org_Types } from "../Reducers/OrganisationsReducer";
import http from "../http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import IOrganisationBasic from "../Types/ClientDataModels/OrganisationBasic";

function setOrgsTypeHelper (organisations:Array<IOrganisationBasic>) {
  return {
    type: Org_Types.SET_LOCAL_ORGS,
    payload: organisations
  };
}

function setSelectedOrgTypeHelper (organisation?:IOrganisationBasic) {
  return {
    type: Org_Types.SET_LOCAL_SELECTED_ORG,
    payload: organisation
  };
}

export const SetOrgs = (organisations:Array<IOrganisationBasic>): Action => (setOrgsTypeHelper(organisations));
export const SetLocallySelectedOrg = (organisation?:IOrganisationBasic) : Action => (setSelectedOrgTypeHelper(organisation))

export const GetAllOrgs = (): ThunkAction<void, OrganisationState, null, Action> => async dispatch => {
  let headersContent = await GetHeadersHelper();
  let response = await http.get<Array<IOrganisationBasic>>("/Organisation", {headers : headersContent});
  dispatch(SetOrgs(response.data));
};