import { Action } from "../../Types/ActionType"

export enum GetUserType_Types {
  SET_LOCAL_USER_TYPES = "SET_LOCAL_USER_TYPES"
}

export interface UserTypeState {
  userType: string,
  userId: string
}

const initialState: UserTypeState = {
  userType: "Not Registered",
  userId: ""
}

function splitUserType(userType: string): string[] {
  return userType.split(",", 2);
}

export const userStateReducer = (state: UserTypeState = initialState, action: Action): UserTypeState => {
  switch (action.type) {
    case GetUserType_Types.SET_LOCAL_USER_TYPES:
      var splitValues = splitUserType(action.payload);
      return {
        userType: splitValues[0].trim(),
        userId: splitValues[1].trim()
      }
    default:
      return state
  }
};
