import { Action } from '../Types/ActionType';
import { ThunkAction } from 'redux-thunk';
import { ServiceProviderBasicReducer_Types } from '../Reducers/Common/ServiceProviderBasicReducer';
import IServiceProviderBasic from '../Types/IncomingDataModels/ServiceProviderBasic';
import { CheckForDefaultOrg } from '../Actions/OrganisationActions';
import { RootState } from '../store';
import { getCall } from '../Http/http-helpers';
import { GetServiceProviderBasicEndPoint } from '../Helpers/EndPointHelpers';
import SetTrackTrace from '../Telemetry/SetTrackTrace';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import {
    SetFatalError,
    SetLinearLoadingBarToggle,
} from '../Actions/Common/UIControlActions';
import { SetServiceProviderBasicLoadedState } from '../Actions/LoadedStatesActions';
import { SetServiceProviderBasicAction } from '../Actions/ServiceProviderBasicActions';

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
