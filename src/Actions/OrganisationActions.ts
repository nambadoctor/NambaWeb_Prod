import { ThunkAction } from "redux-thunk";
import { OrganisationState, Org_Types } from "../Reducers/OrganisationsReducer";
import http from "../http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import IOrganisationBasic from "../Types/ClientDataModels/OrganisationBasic";
import { RootState } from "../store";
import { SetOrgPickerModalToggle } from "./Common/UIControlActions";
import { checkForDefaultOrgHelpers } from "../Helpers/OrganisationHelpers";
import { GetCurrentServiceProvider } from "./ServiceProviderActions";
import { Action } from "../Types/ActionType";

function setOrgsTypeHelper(organisations: Array<IOrganisationBasic>) {
  return {
    type: Org_Types.SET_LOCAL_ORGS,
    payload: organisations
  };
}

function setSelectedOrgTypeHelper(organisation?: IOrganisationBasic) {
  return {
    type: Org_Types.SET_LOCAL_SELECTED_ORG,
    payload: organisation
  };
}

export const SetOrgs = (organisations: Array<IOrganisationBasic>): Action => (setOrgsTypeHelper(organisations));
export const SetLocallySelectedOrg = (organisation?: IOrganisationBasic): Action => (setSelectedOrgTypeHelper(organisation))

export const SetSelectOrgModal = (): ThunkAction<void, OrganisationState, null, Action> => async dispatch => {
  let headersContent = await GetHeadersHelper();
  let response = await http.get<Array<IOrganisationBasic>>("/Organisation", { headers: headersContent });
  dispatch(SetOrgs(response.data));
};

export const CheckForDefaultOrg = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
  const serviceProviderBasicState = getState().ServiceProviderBasicState

  //LOG: Log service provider state retrieved from store (log sPId and Orgs in object)

  if (serviceProviderBasicState.serviceProvider != undefined || serviceProviderBasicState.serviceProvider != null) {

    if (serviceProviderBasicState.serviceProvider.organisations == null || serviceProviderBasicState.serviceProvider.organisations.length == 0) {
      //LOG: service provider object from store has empty organisation list
    }

    //LOG: Getting default org
    const defaultOrg = checkForDefaultOrgHelpers(serviceProviderBasicState.serviceProvider.organisations)

    if (defaultOrg != null) {
      dispatch(SetLocallySelectedOrg(defaultOrg))
      dispatch(GetCurrentServiceProvider())
    } else {
      //LOG: Default Org Does not exist
      dispatch(SetOrgPickerModalToggle(true))
    }

    dispatch(SetOrgs(serviceProviderBasicState.serviceProvider!.organisations))

  } else {
    //TODO: LOG "Service Provider From Store is Null | Undefined"
  }
};