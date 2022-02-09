import { signInWithPhoneNumber, getAuth, RecaptchaVerifier } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { useState, ChangeEvent } from "react";
import { clearAuthToken } from "../Auth/FirebaseUserInfoHelper";

function getAppVerifier() {
    return new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response: any) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            //onSignInSubmit();
        }
    }, getAuth());
}

export default function useAuthHook() {
    async function SignInWithPhoneNumberHelper(phoneNumber: string) {
        await signInWithPhoneNumber(getAuth(), phoneNumber, getAppVerifier())
            .then(function (confirmationResult) {
                var verificationCode = window.prompt('Please enter the verification ' +
                    'code that was sent to your mobile device.');

                var confirmationResultTemp = confirmationResult.confirm(verificationCode!).then((result) => {
                    // User signed in successfully.
                    // ...
                }).catch((error) => {
                    // User couldn't sign in (bad verification code?)
                    // ...
                });

                return confirmationResultTemp;
            })
            .catch(function (error) {
                // Handle Errors here.
            });
    }

    function SignOut() {
        if (window.confirm("Are you sure you want to logout?")) {
            clearAuthToken()
            getAuth().signOut();
        }
    }
    return { SignInWithPhoneNumberHelper, SignOut };
}

