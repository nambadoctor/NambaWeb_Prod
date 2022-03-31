import { Paper, TextField, IconButton, Divider } from '@mui/material';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import useGeoLocation from '../../hooks/useGeoLocation';
import Otp from './OTP.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import '../../styles/otpstyles.css';

import {
    SetCodeAction,
    SetConfirmationResultAction,
    SetOtpAction,
    SetOtpShowAction,
    SetPNOAction,
} from '../../actions/LoginActions';
import useAuthHook from '../../hooks/useAuthHook';

export const PhoneNumberLogin: React.FC = () => {
    const { countryCode } = useGeoLocation();
    const dispatch = useDispatch();

    const { otp, otpShow, pno, code, SignInWithPhoneNumberHelper, VerifyOtp } =
        useAuthHook();

    useEffect(() => {
        dispatch(SetCodeAction(countryCode));
    }, [countryCode]);

    function isNumeric(n: any) {
        return !isNaN(parseInt(n)) && isFinite(n);
    }

    return (
        <div>
            <Paper style={{ padding: 20, width: 300 }}>
                <h3
                    style={{
                        textAlign: 'center',
                        alignItems: 'center',
                        color: '#076bf7',
                        marginTop: 7,
                        marginBottom: 0,
                        fontSize: 20,
                    }}
                >
                    N A M B A D O C T O R
                </h3>
                <Divider
                    variant="middle"
                    style={{
                        marginBottom: 40,
                        marginTop: 10,
                        backgroundColor: '#076bf7',
                    }}
                />

                {!otpShow ? (
                    <h5 style={{ marginBottom: 20, fontSize: 17 }}>
                        Enter your Phone Number
                    </h5>
                ) : (
                    <h5 style={{ marginBottom: 20, fontSize: 17 }}>
                        Enter the OTP
                    </h5>
                )}
                <div>
                    {!otpShow ? (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    marginRight: 10,
                                    width: 60,
                                }}
                            >
                                <TextField
                                    id="code"
                                    label="Code"
                                    color="secondary"
                                    disabled={true}
                                    value={code}
                                    onChange={(e) => {
                                        dispatch(SetCodeAction(e.target.value));
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="phone"
                                    label="Phone"
                                    color="secondary"
                                    value={pno}
                                    onChange={(e) => {
                                        if (
                                            (e.target.value[
                                                e.target.value.length - 1
                                            ] >= '0' &&
                                                e.target.value[
                                                    e.target.value.length - 1
                                                ] <= '9') ||
                                            !e.target.value
                                        ) {
                                            dispatch(
                                                SetPNOAction(e.target.value),
                                            );
                                        }
                                    }}
                                    inputProps={{ maxLength: 10 }}
                                />
                            </div>
                        </div>
                    ) : (
                        <Otp />
                    )}
                    {otpShow ? (
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 5,
                                fontSize: 13,
                            }}
                        >
                            Didn't receive an OTP?{' '}
                            <Button
                                onClick={() => {
                                    SignInWithPhoneNumberHelper();
                                    dispatch(SetOtpAction(''));
                                }}
                                color="primary"
                                style={{ textTransform: 'none', fontSize: 13 }}
                            >
                                Resend OTP
                            </Button>
                        </div>
                    ) : null}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 20,
                            marginRight: 15,
                            marginLeft: 15,
                        }}
                    >
                        {otpShow && (
                            <IconButton
                                onClick={() => {
                                    dispatch(SetConfirmationResultAction(null));
                                    dispatch(SetOtpShowAction(false));
                                    dispatch(SetOtpAction(''));
                                }}
                                size="small"
                                style={{ fontSize: 15 }}
                            >
                                <ArrowBackIcon
                                    style={{
                                        width: 18,
                                        height: 18,
                                        marginRight: 5,
                                    }}
                                />
                                PhoneNumber
                            </IconButton>
                        )}

                        {!otpShow ? (
                            <Button
                                id="recaptcha-container"
                                variant="contained"
                                disabled={
                                    pno.length !== 10 ||
                                    code === null ||
                                    !isNumeric(pno)
                                }
                                color="secondary"
                                style={{
                                    color: 'white',
                                    marginLeft: 'auto',
                                    textTransform: 'none',
                                }}
                                onClick={() => SignInWithPhoneNumberHelper()}
                            >
                                Next
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                color="secondary"
                                disabled={otp.length !== 6}
                                style={{
                                    color: 'white',
                                    marginLeft: 'auto',
                                    textTransform: 'none',
                                }}
                                onClick={() => VerifyOtp()}
                            >
                                Verify
                            </Button>
                        )}
                    </div>
                </div>
            </Paper>
        </div>
    );
};
