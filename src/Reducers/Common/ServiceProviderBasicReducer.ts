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
  switch (action.type) {
    case GetUserType_Types.SET_LOCAL_USER_TYPES:
      return { serviceProvider: action.payload }
    default:
      return state
  }
};
