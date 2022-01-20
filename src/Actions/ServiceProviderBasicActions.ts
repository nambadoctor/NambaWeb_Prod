import { ServiceProviderBasicReducer_Types } from "../Reducers/Common/ServiceProviderBasicReducer";
import { Action } from "../Types/ActionType";
import IServiceProviderBasic from "../Types/IncomingDataModels/ServiceProviderBasic";

export const SetServiceProviderBasicAction = (serviceProviderBasic: IServiceProviderBasic): Action => ({
    type: ServiceProviderBasicReducer_Types.SET_SERVICE_PROVIDER_BASIC,
    payload: serviceProviderBasic
});
