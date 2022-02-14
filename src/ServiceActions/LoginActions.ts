import {
    signInWithPhoneNumber,
    getAuth,
    RecaptchaVerifier,
    ConfirmationResult,
    UserCredential,
} from '@firebase/auth';
import { clearAuthToken } from '../Auth/FirebaseUserInfoHelper';

let confirmationR: ConfirmationResult | null = null;
let userCredential: UserCredential | any | null = null;

function getAppVerifier() {
    return new RecaptchaVerifier(
        'sign-in-button',
        {
            size: 'invisible',
            callback: (response: any) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                //onSignInSubmit();
            },
        },
        getAuth(),
    );
}

export const SignInWithPhoneNumberHelper = async (phoneNumber: string) => {
    try {
        await signInWithPhoneNumber(
            getAuth(),
            phoneNumber,
            getAppVerifier(),
        ).then(function (confirmationResult) {
            confirmationR = confirmationResult;
        });
        return confirmationR?.verificationId;
    } catch (error: any) {
        return 'error';
    }
};

export const VerifyOtp = async (otp: string) => {
    try {
        confirmationR &&
            (await confirmationR.confirm(otp).then((result) => {
                userCredential = result;
            }));
        return userCredential;
    } catch (error: any) {
        return 'error';
    }
};

export function SignOut() {
    if (window.confirm('Are you sure you want to logout?')) {
        clearAuthToken();
        getAuth().signOut();
    }
}
