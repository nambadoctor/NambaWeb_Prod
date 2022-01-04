import { Action } from "../../Types/ActionType";

export enum login_Types {
  PHONE_NUMBER_VERIFIED = "PHONE_NUMBER_VERIFIED",
  OTP_VERIFIED = "OTP_VERIFIED",
}

export interface loginState {
  confirmationResult: string;
  user: string;
}

const initialState: loginState = {
  confirmationResult: "",
  user: "",
};

export const loginReducer = (
  state: loginState = initialState,
  action: Action
): loginState => {
  switch (action.type) {
    case login_Types.PHONE_NUMBER_VERIFIED:
      return {
        ...state,
        confirmationResult: action.payload,
      };
    case login_Types.OTP_VERIFIED:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
