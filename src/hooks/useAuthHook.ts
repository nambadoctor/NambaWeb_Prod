import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from '@firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    ClearLoginStates,
    SetConfirmationResultAction,
    SetOtpShowAction,
} from '../actions/LoginActions';
import { RootState } from '../store';

export default function useAuthHook() {
    const auth = getAuth();

    const dispatch = useDispatch();

    const code = '+91';
    // useSelector((state: RootState) => state.loginState.code)
    const pno = useSelector((state: RootState) => state.loginState.pno);
    const otpShow = useSelector((state: RootState) => state.loginState.otpShow);
    const otp = useSelector((state: RootState) => state.loginState.otp);
    const confirmationR = useSelector(
        (state: RootState) => state.loginState.confirmationR,
    );

    useEffect(() => {}, [confirmationR]);

    function getAppVerifier() {
        return new RecaptchaVerifier(
            'recaptcha-container',
            {
                size: 'invisible',
                callback: () => {},
                'expired-callback': () => {},
            },
            auth,
        );
    }

    const SignInWithPhoneNumberHelper = async () => {
        const phoneNumber = code + '' + pno;
        await signInWithPhoneNumber(auth, phoneNumber, getAppVerifier())
            .then(function (confirmationResult) {
                dispatch(SetConfirmationResultAction(confirmationResult));
                dispatch(SetOtpShowAction(true));
            })
            .catch(() => {
                // User couldn't sign in (bad verification code?)
                // ...
            });
    };

    const VerifyOtp = () => {
        confirmationR &&
            confirmationR
                .confirm(otp)
                .then((_result) => {
                    // User signed in successfully.
                    dispatch(ClearLoginStates());
                    // ...
                })
                .catch(() => {
                    // User couldn't sign in (bad verification code?)
                    // ...
                });
    };

    function SignOut() {
        if (window.confirm('Are you sure you want to logout?')) {
            dispatch(ClearLoginStates());
            getAuth().signOut();
        }
    }

    return {
        code,
        pno,
        otpShow,
        otp,
        SignInWithPhoneNumberHelper,
        VerifyOtp,
        SignOut,
    };
}
