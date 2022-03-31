import { SeverityLevel } from '@microsoft/applicationinsights-web';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { Action } from '../types/ActionType';
import IOrganisationBasic from '../types/IncomingDataModels/OrganisationBasic';
import IServiceProvider from '../types/IncomingDataModels/ServiceProvider';
import IServiceProviderBasic from '../types/IncomingDataModels/ServiceProviderBasic';

export enum Org_Types {
    SET_ORGANISATIONS = 'SET_LOCAL_ORGS',
    SET_SELECTED_ORGANISATION = 'SET_SELECTED_ORGANISATION',
    SET_SERVICE_PROVIDERS_IN_ORG = 'SET_SERVICE_PROVIDERS_IN_ORG',
    SET_SELECTED_SERVICE_PROVIDER = 'SET_SELECTED_SERVICE_PROVIDER',
}

export interface OrganisationState {
    organisations: IOrganisationBasic[];
    selectedOrganisation?: IOrganisationBasic;
}

const initialState: OrganisationState = {
    organisations: [],
};

export const orgReducer = (
    state: OrganisationState = initialState,
    action: Action,
): OrganisationState => {
    switch (action.type) {
        case Org_Types.SET_ORGANISATIONS:
            return {
                ...state,
                organisations: action.payload,
            };
        case Org_Types.SET_SELECTED_ORGANISATION:
            return {
                ...state,
                selectedOrganisation: action.payload,
            };
        default:
            return state;
    }
};
