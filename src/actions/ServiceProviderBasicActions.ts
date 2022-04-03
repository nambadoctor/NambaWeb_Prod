import { ServiceProviderBasicReducer_Types } from '../reducers/Common/ServiceProviderBasicReducer';
import { Action } from '../types/ActionType';
import IServiceProviderBasic from '../types/IncomingDataModels/ServiceProviderBasic';

export const SetServiceProviderBasicAction = (
    serviceProviderBasic: IServiceProviderBasic,
): Action => ({
    type: ServiceProviderBasicReducer_Types.SET_SERVICE_PROVIDER_BASIC,
    payload: serviceProviderBasic,
});
