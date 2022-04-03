import { ThunkAction } from 'redux-thunk';
import { Org_Types } from '../reducers/OrganisationsReducer';
import IOrganisationBasic from '../types/IncomingDataModels/OrganisationBasic';
import { RootState } from '../store';
import { SetOrgPickerModalToggle } from './common/UIControlActions';
import { checkForDefaultOrgHelpers } from '../utils/OrganisationHelpers';
import { GetCurrentServiceProvider } from '../service-actions/ServiceProviderActions';
import { Action } from '../types/ActionType';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import IServiceProvider from '../types/IncomingDataModels/ServiceProvider';

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

function setServiceProvidersInOrgHelper(serviceProviders?: IServiceProvider[]) {
    return {
        type: Org_Types.SET_SERVICE_PROVIDERS_IN_ORG,
        payload: serviceProviders,
    };
}

function setSelectedServiceProviderHelper(serviceProvider?: IServiceProvider) {
    return {
        type: Org_Types.SET_SELECTED_SERVICE_PROVIDER,
        payload: serviceProvider,
    };
}

export const SetOrgs = (organisations: Array<IOrganisationBasic>): Action =>
    setOrgsTypeHelper(organisations);
export const SetSelectedOrg = (organisation?: IOrganisationBasic): Action =>
    setSelectedOrgTypeHelper(organisation);
export const SetServiceProvidersInOrg = (
    serviceProviders?: IServiceProvider[],
): Action => setServiceProvidersInOrgHelper(serviceProviders);
export const SetSelectedServiceProvider = (
    serviceProvider?: IServiceProvider,
): Action => setSelectedServiceProviderHelper(serviceProvider);

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
                dispatch(SetSelectedOrg(defaultOrg));
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

export const ResetSelectedServiceProvider =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        const currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider;

        dispatch(SetSelectedServiceProvider(currentServiceProvider));
    };
