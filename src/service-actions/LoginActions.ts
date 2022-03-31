import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from '@firebase/auth';
import { clearAuthToken } from '../auth/FirebaseUserInfoHelper';

function getAppVerifier() {
    return new RecaptchaVerifier(
        'sign-in-button',
        {
            size: 'invisible',
            callback: (_: any) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                //onSignInSubmit();
            },
        },
        getAuth(),
    );
}

export default function useAuthHook() {
    async function SignInWithPhoneNumberHelper(phoneNumber: string) {
        await signInWithPhoneNumber(getAuth(), phoneNumber, getAppVerifier())
            .then(function (confirmationResult) {
                var verificationCode = window.prompt(
                    'Please enter the verification ' +
                        'code that was sent to your mobile device.',
                );

                var confirmationResultTemp = confirmationResult
                    .confirm(verificationCode!)
                    .then((_) => {
                        // User signed in successfully.
                        // ...
                    })
                    .catch((_) => {
                        // User couldn't sign in (bad verification code?)
                        // ...
                    });

                return confirmationResultTemp;
            })
            .catch(function (_) {
                // Handle Errors here.
            });
    }

    function SignOut() {
        if (window.confirm('Are you sure you want to logout?')) {
            clearAuthToken();
            getAuth().signOut();
        }
    }

    return { SignInWithPhoneNumberHelper, SignOut };
}
