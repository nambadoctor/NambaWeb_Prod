import { SeverityLevel } from '@microsoft/applicationinsights-web';
import SetTrackTrace from '../Telemetry/SetTrackTrace';
import { Action } from '../Types/ActionType';
import IOrganisationBasic from '../Types/IncomingDataModels/OrganisationBasic';

export enum Org_Types {
    SET_ORGANISATIONS = 'SET_LOCAL_ORGS',
    SET_SELECTED_ORGANISATION = 'SET_SELECTED_ORGANISATION',
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
    SetTrackTrace(
        'Entered Organisation Reducer: ' + action.type,
        'OrganisationReducer',
        SeverityLevel.Information,
    );
    switch (action.type) {
        case Org_Types.SET_ORGANISATIONS:
            SetTrackTrace(
                'Entered Organisation Reducer SET_LOCAL_ORGS SUCCESS',
                'OrganisationReducer',
                SeverityLevel.Information,
            );
            return {
                ...state,
                organisations: action.payload,
            };
        case Org_Types.SET_SELECTED_ORGANISATION:
            SetTrackTrace(
                'Entered Organisation Reducer SET_LOCAL_SELECTED_ORG SUCCESS',
                'OrganisationReducer',
                SeverityLevel.Information,
            );
            return {
                ...state,
                selectedOrganisation: action.payload,
            };
        default:
            SetTrackTrace(
                'Organisation Reducer Hits default switch: Returns original state',
                'OrganisationReducer',
                SeverityLevel.Error,
            );
            return state;
    }
};
