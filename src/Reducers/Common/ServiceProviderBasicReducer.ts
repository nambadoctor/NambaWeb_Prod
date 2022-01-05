import { SeverityLevel } from "@microsoft/applicationinsights-web";
import SetTrackTrace from "../../Telemetry/SetTrackTrace";
import { Action } from "../../Types/ActionType"
import IServiceProviderBasic from "../../Types/ClientDataModels/ServiceProviderBasic";

export enum GetUserType_Types {
  SET_LOCAL_USER_TYPES = "SET_LOCAL_USER_TYPES"
}

export interface ServiceProviderBasicState {
  serviceProvider?: IServiceProviderBasic
}

const initialState: ServiceProviderBasicState = {
  serviceProvider: undefined
}

export const serviceProviderBasicReducer = (state: ServiceProviderBasicState = initialState, action: Action): ServiceProviderBasicState => {
  SetTrackTrace("Entered Service Provider Basic Reducer: " + action.type, "ServiceProviderBasicReducer", SeverityLevel.Information)
  switch (action.type) {
    case GetUserType_Types.SET_LOCAL_USER_TYPES:
      SetTrackTrace("Service Provider Basic Reducer Set Local User Types SUCCESS", "ServiceProviderBasicReducer", SeverityLevel.Information)
      return { serviceProvider: action.payload }
    default:
      SetTrackTrace("Service Provider Basic Reducer Hits default switch: Returns original state", "ServiceProviderBasicReducer", SeverityLevel.Error)
      return state
  }
};
