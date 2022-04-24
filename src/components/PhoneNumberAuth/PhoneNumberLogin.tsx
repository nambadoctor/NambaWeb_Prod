import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, IconButton, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    SetCodeAction,
    SetConfirmationResultAction,
    SetOtpAction,
    SetOtpShowAction,
    SetPNOAction,
} from '../../actions/LoginActions';
import useAuthHook from '../../hooks/useAuthHook';
import useGeoLocation from '../../hooks/useGeoLocation';
import '../../styles/otpstyles.css';
import Otp from './OTP.js';

export const PhoneNumberLogin: React.FC = () => {
    const { countryCode } = useGeoLocation();
    const dispatch = useDispatch();

    const { otp, otpShow, pno, code, SignInWithPhoneNumberHelper, VerifyOtp } =
        useAuthHook();

    useEffect(() => {
        dispatch(SetCodeAction(countryCode));
    }, [countryCode, dispatch]);

    function isNumeric(n: any) {
        return !isNaN(parseInt(n)) && isFinite(n);
    }

    return (
        <div>
            <section className="h-full gradient-form md:h-screen bg-gradient-to-b from-white to-blue-300">
                <div className="h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="xl:w-10/12">
                            <div className="block bg-white shadow-lg rounded-lg">
                                <div className="lg:flex lg:flex-wrap g-0">
                                    <div className="lg:w-6/12 px-4 md:px-0">
                                        <div className="md:p-12 md:mx-6 md:mb-0 mb-8">
                                            <div className="text-center">
                                                <img
                                                    className="mx-auto w-48"
                                                    src="/assets/NDLogo.png"
                                                    alt="logo"
                                                />
                                                <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                                                    Welcome to Namba Doctor
                                                </h4>
                                            </div>
                                            {!otpShow ? (
                                                <h5
                                                    className="text-center"
                                                    style={{
                                                        marginBottom: 20,
                                                        fontSize: 17,
                                                    }}
                                                >
                                                    Enter your Phone Number
                                                </h5>
                                            ) : (
                                                <h5
                                                    className="text-center"
                                                    style={{
                                                        marginBottom: 20,
                                                        fontSize: 17,
                                                    }}
                                                >
                                                    Enter the OTP
                                                </h5>
                                            )}
                                            <div>
                                                {!otpShow ? (
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                alignItems:
                                                                    'flex-end',
                                                                justifyContent:
                                                                    'center',
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
                                                                onChange={(
                                                                    e,
                                                                ) => {
                                                                    dispatch(
                                                                        SetCodeAction(
                                                                            e
                                                                                .target
                                                                                .value,
                                                                        ),
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                        <div>
                                                            <TextField
                                                                id="phone"
                                                                label="Phone"
                                                                color="secondary"
                                                                value={pno}
                                                                onChange={(
                                                                    e,
                                                                ) => {
                                                                    if (
                                                                        (e
                                                                            .target
                                                                            .value[
                                                                            e
                                                                                .target
                                                                                .value
                                                                                .length -
                                                                                1
                                                                        ] >=
                                                                            '0' &&
                                                                            e
                                                                                .target
                                                                                .value[
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                                    .length -
                                                                                    1
                                                                            ] <=
                                                                                '9') ||
                                                                        !e
                                                                            .target
                                                                            .value
                                                                    ) {
                                                                        dispatch(
                                                                            SetPNOAction(
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                            ),
                                                                        );
                                                                    }
                                                                }}
                                                                inputProps={{
                                                                    maxLength: 10,
                                                                }}
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
                                                            justifyContent:
                                                                'center',
                                                            alignItems:
                                                                'center',
                                                            marginTop: 5,
                                                            fontSize: 13,
                                                        }}
                                                    >
                                                        Didn't receive an OTP?{' '}
                                                        <Button
                                                            onClick={() => {
                                                                SignInWithPhoneNumberHelper();
                                                                dispatch(
                                                                    SetOtpAction(
                                                                        '',
                                                                    ),
                                                                );
                                                            }}
                                                            color="primary"
                                                            style={{
                                                                textTransform:
                                                                    'none',
                                                                fontSize: 13,
                                                            }}
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
                                                                dispatch(
                                                                    SetConfirmationResultAction(
                                                                        null,
                                                                    ),
                                                                );
                                                                dispatch(
                                                                    SetOtpShowAction(
                                                                        false,
                                                                    ),
                                                                );
                                                                dispatch(
                                                                    SetOtpAction(
                                                                        '',
                                                                    ),
                                                                );
                                                            }}
                                                            size="small"
                                                            style={{
                                                                fontSize: 15,
                                                            }}
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
                                                                pno.length !==
                                                                    10 ||
                                                                code === null ||
                                                                !isNumeric(pno)
                                                            }
                                                            color="secondary"
                                                            style={{
                                                                color: 'white',
                                                                marginLeft:
                                                                    'auto',
                                                                textTransform:
                                                                    'none',
                                                            }}
                                                            onClick={() =>
                                                                SignInWithPhoneNumberHelper()
                                                            }
                                                        >
                                                            Next
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            disabled={
                                                                otp.length !== 6
                                                            }
                                                            style={{
                                                                color: 'white',
                                                                marginLeft:
                                                                    'auto',
                                                                textTransform:
                                                                    'none',
                                                            }}
                                                            onClick={() =>
                                                                VerifyOtp()
                                                            }
                                                        >
                                                            Verify
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none min-h-[500px]">
                                        <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                            <h4 className="text-xl font-semibold mb-6">
                                                More than just a company
                                            </h4>
                                            <p className="text-sm">
                                                We are a dedicated team of
                                                entrepreneurs and doctors
                                                focussed on helping doctors
                                                manage their patient records and
                                                get insights on their business.
                                                <br />
                                                <br />
                                                You can contact us anytime at
                                                nambadoctor@gmail.com or
                                                Call/Whatsapp us at
                                                +91-8281863638.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
