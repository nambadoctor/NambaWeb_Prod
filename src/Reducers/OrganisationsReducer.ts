import { SeverityLevel } from "@microsoft/applicationinsights-web";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { Action } from "../Types/ActionType"
import IOrganisationBasic from "../Types/IncomingDataModels/OrganisationBasic";
import IServiceProvider from "../Types/IncomingDataModels/ServiceProvider";
import IServiceProviderBasic from "../Types/IncomingDataModels/ServiceProviderBasic";

export enum Org_Types {
  SET_ORGANISATIONS = "SET_LOCAL_ORGS",
  SET_SELECTED_ORGANISATION = "SET_SELECTED_ORGANISATION",
  SET_SERVICE_PROVIDERS_IN_ORG = "SET_SERVICE_PROVIDERS_IN_ORG",
  SET_SELECTED_SERVICE_PROVIDER = "SET_SELECTED_SERVICE_PROVIDER"
}

export interface OrganisationState {
  organisations: IOrganisationBasic[];
  selectedOrganisation?: IOrganisationBasic;
  serviceProvidersInOrg?: IServiceProvider[];
  selectedServiceProvider?: IServiceProvider;
}

const initialState: OrganisationState = {
  organisations: []
}

export const orgReducer = (state: OrganisationState = initialState, action: Action): OrganisationState => {
  switch (action.type) {
    case Org_Types.SET_ORGANISATIONS:
      return {
        ...state,
        organisations: action.payload,
      }
    case Org_Types.SET_SELECTED_ORGANISATION:
      return {
        ...state,
        selectedOrganisation: action.payload,
      }
    case Org_Types.SET_SERVICE_PROVIDERS_IN_ORG:
      return {
        ...state,
        serviceProvidersInOrg: action.payload,
      }
    case Org_Types.SET_SELECTED_SERVICE_PROVIDER:
      return {
        ...state,
        selectedServiceProvider: action.payload,
      }
    default:
      return state
  }
};
