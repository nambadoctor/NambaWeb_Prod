import {
  signInWithPhoneNumber,
  getAuth,
  RecaptchaVerifier,
  ConfirmationResult,
  UserCredential,
} from "@firebase/auth";
import { loginState, login_Types } from "../../Reducers/Common/LoginReducer";
import { ThunkAction } from "redux-thunk";
import { Action } from "../../Types/ActionType";
import { RootStore } from "../../store";

let confirmationR: ConfirmationResult | null = null;

function setPhoneHelper(confirmationResult: ConfirmationResult) {
  return {
    type: login_Types.PHONE_NUMBER_VERIFIED,
    payload: confirmationResult.verificationId,
  };
}

export const SetVerifyPhone = (
  confirmationResult: ConfirmationResult
): Action => setPhoneHelper(confirmationResult);

function getAppVerifier() {
  return new RecaptchaVerifier(
    "sign-in-button",
    {
      size: "invisible",
      callback: (response: any) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        //onSignInSubmit();
      },
    },
    getAuth()
  );
}

export const VerifyPhoneNumber =
  (phoneNumber: string): ThunkAction<void, RootStore, null, Action> =>
  async (dispatch) => {
    await signInWithPhoneNumber(getAuth(), phoneNumber, getAppVerifier()).then(
      function (confirmationResult) {
        confirmationR = confirmationResult;
        dispatch(SetVerifyPhone(confirmationR));
      }
    );
  };

function setOtpHelper(result: UserCredential) {
  return {
    type: login_Types.OTP_VERIFIED,
    payload: result.user,
  };
}

export const SetVerifyOtp = (result: UserCredential): Action =>
  setOtpHelper(result);

export const VerifyOtp =
  (
    confirmationResult: loginState,
    otp: string
  ): ThunkAction<void, RootStore, null, Action> =>
  async (dispatch) => {
    confirmationR &&
      confirmationR.confirm(otp).then((result) => {
        dispatch(SetVerifyOtp(result));
      });
  };
