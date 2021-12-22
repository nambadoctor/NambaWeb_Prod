import { Action } from "../../Types/ActionType"

export enum GetUserType_Types {
    SET_LOCAL_USER_TYPES = "SET_LOCAL_USER_TYPES"
}

export interface UserTypeState {
    userType:string
}

const initialState:UserTypeState = {
    userType: "Not Registered"
}

export const orgReducer = (state: UserTypeState = initialState, action: Action) : UserTypeState => {
    switch (action.type) {
      case GetUserType_Types.SET_LOCAL_USER_TYPES:
        return {
          userType: action.payload,
        }
      default:
        return state
    }
  };
  