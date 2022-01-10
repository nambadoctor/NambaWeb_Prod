import {
  signInWithPhoneNumber,
  getAuth,
  RecaptchaVerifier,
  ConfirmationResult,
  UserCredential,
} from "@firebase/auth";

let confirmationR: ConfirmationResult | null = null;
let userCredential: UserCredential | null = null;

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

export const VerifyPhoneNumber = async (code: string, phoneNumber: string) => {
  let phone = "+" + code + phoneNumber;
  await signInWithPhoneNumber(getAuth(), phone, getAppVerifier()).then(
    function (confirmationResult) {
      console.log("confirmationResult from auth", confirmationResult);
      confirmationR = confirmationResult;
    }
  );
  return confirmationR?.verificationId;
};

export const VerifyOtp = (otp: string) => {
  confirmationR &&
    confirmationR.confirm(otp).then((result) => {
      console.log("result from auth", result);
      userCredential = result;
    });
  return userCredential;
};
