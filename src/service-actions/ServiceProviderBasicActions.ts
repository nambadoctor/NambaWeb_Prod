import { Action } from '../types/ActionType';
import { ThunkAction } from 'redux-thunk';
import IServiceProviderBasic from '../types/IncomingDataModels/ServiceProviderBasic';
import { CheckForDefaultOrg } from '../actions/OrganisationActions';
import { RootState } from '../store';
import { getCall } from '../http/http-helpers';
import { GetServiceProviderBasicEndPoint } from '../utils/EndPointHelpers';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import {
    SetFatalError,
    SetLinearLoadingBarToggle,
} from '../actions/common/UIControlActions';
import { SetServiceProviderBasicLoadedState } from '../actions/LoadedStatesActions';
import { SetServiceProviderBasicAction } from '../actions/ServiceProviderBasicActions';

export const GetServiceProviderBasic =
    (): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
        dispatch(SetLinearLoadingBarToggle(true));

        SetTrackTrace(
            'Get Service Provider Basic Start',
            'GetServiceProviderBasic',
            SeverityLevel.Information,
        );

        try {
            const response = await getCall(
                {} as IServiceProviderBasic,
                GetServiceProviderBasicEndPoint(),
                'Action-GetServiceProviderBasic',
            );

            if (response) {
                SetTrackTrace(
                    'Get Service Provider Basic Response' + response.data,
                    'GetServiceProviderBasic',
                    SeverityLevel.Information,
                );
                dispatch(SetServiceProviderBasicLoadedState(true));

                SetTrackTrace(
                    'Dispatch Set Service Provider Basic' + response.data,
                    'GetServiceProviderBasic',
                    SeverityLevel.Information,
                );
                dispatch(SetServiceProviderBasicAction(response.data));

                SetTrackTrace(
                    'Dispatch Check For Default Orgs',
                    'GetServiceProviderBasic',
                    SeverityLevel.Information,
                );
                dispatch(CheckForDefaultOrg());
            }
        } catch (error) {
            dispatch(SetFatalError('CANNOT GET SERVICE PROVIDER BASIC'));
            throw error;
        }
    };
