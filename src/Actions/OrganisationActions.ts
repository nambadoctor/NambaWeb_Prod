import { ThunkAction } from 'redux-thunk';
import { Org_Types } from '../Reducers/OrganisationsReducer';
import IOrganisationBasic from '../Types/IncomingDataModels/OrganisationBasic';
import { RootState } from '../store';
import { SetOrgPickerModalToggle } from './Common/UIControlActions';
import { checkForDefaultOrgHelpers } from '../Helpers/OrganisationHelpers';
import { GetCurrentServiceProvider } from '../ServiceActions/ServiceProviderActions';
import { Action } from '../Types/ActionType';
import SetTrackTrace from '../Telemetry/SetTrackTrace';
import { SeverityLevel } from '@microsoft/applicationinsights-web';

function setOrgsTypeHelper(organisations: Array<IOrganisationBasic>) {
    return {
        type: Org_Types.SET_ORGANISATIONS,
        payload: organisations,
    };
}

function setSelectedOrgTypeHelper(organisation?: IOrganisationBasic) {
    return {
        type: Org_Types.SET_SELECTED_ORGANISATION,
        payload: organisation,
    };
}

export const SetOrgs = (organisations: Array<IOrganisationBasic>): Action =>
    setOrgsTypeHelper(organisations);
export const SetLocallySelectedOrg = (
    organisation?: IOrganisationBasic,
): Action => setSelectedOrgTypeHelper(organisation);

export const CheckForDefaultOrg =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        SetTrackTrace(
            'Enter Check For Default Org Action',
            'CheckForDefaultOrg',
            SeverityLevel.Information,
        );

        const currentServiceProvider =
            getState().ServiceProviderBasicState.serviceProvider;

        if (currentServiceProvider) {
            SetTrackTrace(
                'Retrieved Current Service Provider Basic From Store {SPID: ' +
                    currentServiceProvider!.serviceProviderId +
                    '} and {OrgListLength: ' +
                    currentServiceProvider!.organisations.length +
                    '}',
                'CheckForDefaultOrg',
                SeverityLevel.Information,
            );

            //LOG: Getting default org
            const defaultOrg = checkForDefaultOrgHelpers(
                currentServiceProvider.organisations,
            );

            if (defaultOrg != null) {
                SetTrackTrace(
                    'Setting Locally Selected Org as Default Org: ' +
                        defaultOrg,
                    'CheckForDefaultOrg',
                    SeverityLevel.Information,
                );
                dispatch(SetLocallySelectedOrg(defaultOrg));
                dispatch(GetCurrentServiceProvider());
            } else {
                SetTrackTrace(
                    'DEFAULT ORG DOES NOT EXIST. ASKING USER TO SELECT',
                    'CheckForDefaultOrg',
                    SeverityLevel.Warning,
                );
                dispatch(SetOrgPickerModalToggle(true));
            }

            SetTrackTrace(
                'Setting Locally Org List: ' +
                    currentServiceProvider!.organisations.length,
                'CheckForDefaultOrg',
                SeverityLevel.Information,
            );
            dispatch(SetOrgs(currentServiceProvider!.organisations));
        } else {
            SetTrackTrace(
                'Current Service Provider Does Not Exist!',
                'CheckForDefaultOrg',
                SeverityLevel.Error,
            );
        }
    };
