import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, IconButton, TextField } from '@mui/material';
import { useEffect } from 'react';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { BiCalendar, BiPhoneCall } from 'react-icons/bi';
import { BsArrowBarDown } from 'react-icons/bs';
import { GoCloudUpload } from 'react-icons/go';
import { HiDocumentSearch } from 'react-icons/hi';
import {
    MdNotificationsActive,
    MdOutlineDevices,
    MdOutlineSupportAgent,
} from 'react-icons/md';
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
import { FeatureCard } from './FeatureCard';
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

    const sections = [
        {
            title: 'Patient document uploads',
            caption:
                "Keep a track of your patient's documents and progress pictures from the moment they walk in.",
            image: <GoCloudUpload size={'72px'} />,
        },
        {
            title: 'Easy search',
            caption:
                'Easily find the data you want by powerful patient search and sorting by date/patient details.',
            image: <HiDocumentSearch size={'72px'} />,
        },
        {
            title: 'Reminders and notifications',
            caption:
                'Send reminders and notifications for your patients to keep them informed about their progress.',
            image: <MdNotificationsActive size={'72px'} />,
        },
        {
            title: 'Appointment management',
            caption:
                "Book appointments, track follow-up visits, and manage your patient's appointments.",
            image: <BiCalendar size={'72px'} />,
        },
        {
            title: 'Access anywhere',
            caption:
                'Totally web-based, can access patient records on all platforms. iOS, Android, Laptop, Tablets.',
            image: <MdOutlineDevices size={'72px'} />,
        },
        {
            title: '24/7 live support',
            caption:
                'Receive the best customer service ever with our 24/7 live support and highly trained team of healthcare workers.',
            image: <MdOutlineSupportAgent size={'72px'} />,
        },
    ];

    return (
        <div className="flex flex-col bg-blue-100">
            <section className="relative flex flex-col items-center hero md:h-[100vh] md:justify-center md:flex-row-reverse gradient-form">
                <div className="w-full px-8 pt-8 pb-8 text-blue-900 bg-white md:px-16 md:h-full md:w-1/2 md:pt-24">
                    <div className="text-center">
                        <img
                            className="w-48 mx-auto"
                            src="/assets/NDLogo.png"
                            alt="logo"
                        />
                        <h4 className="pb-1 mt-1 mb-12 text-xl font-semibold">
                            Sign-in to Namba Doctor
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
                                            dispatch(
                                                SetCodeAction(e.target.value),
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
                                        onChange={(e) => {
                                            if (
                                                (e.target.value[
                                                    e.target.value.length - 1
                                                ] >= '0' &&
                                                    e.target.value[
                                                        e.target.value.length -
                                                            1
                                                    ] <= '9') ||
                                                !e.target.value
                                            ) {
                                                dispatch(
                                                    SetPNOAction(
                                                        e.target.value,
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
                                    style={{
                                        textTransform: 'none',
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
                                            SetConfirmationResultAction(null),
                                        );
                                        dispatch(SetOtpShowAction(false));
                                        dispatch(SetOtpAction(''));
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
                </div>
                <div className="flex flex-col items-center w-full px-4 pt-12 pb-4 text-center text-blue-900 bg-blue-100 md:w-1/2">
                    <span className="t__heading--h2">Namba Doctor</span>
                    <span className="px-8 mt-8 xl:px-24 t__body--b2">
                        We are a dedicated team of doctors and engineers
                        focussed on helping doctors manage their patient records
                        and get insights on their business.
                    </span>
                    <img
                        src="/assets/splash.svg"
                        className="mt-20 md:max-h-96"
                        alt="Patient management"
                    />
                </div>
                <div className="absolute bottom-0 flex-col items-center justify-center hidden w-48 mt-auto text-blue-900 left-4 md:flex">
                    <BsArrowBarDown />
                    <span className="t__body--b3">Scroll down</span>
                </div>
            </section>
            <section className="bg-blue-100">
                <div className="relative flex flex-col mt-16 mb-16 text-blue-900 md:mt-32 section__container md:flex-row">
                    <header className="md:w-1/2">
                        <div className="pr-8 mb-4 section__heading t__heading--h3 lg:pr-12">
                            Why choose us
                        </div>
                        <div className="pr-8 mb-16 text-xl font-light text-blue-800 t__body--b1 lg:pr-20">
                            Tailor made experiences. Whatever your requirement,
                            we make sure you can serve your patients in the
                            simplest and smartest way possible. We're there for
                            you when you need help.
                        </div>
                    </header>
                    <div className="grid gap-4 md:w-1/2 md:ml-8 card-grid lg:grid-cols-2 md:grid-cols-2 lg:gap-8">
                        {sections.map((section, index) => (
                            <FeatureCard
                                key={index}
                                {...section}
                                imageHeight={64}
                                imageWidth={64}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="pb-16 text-blue-900 bg-blue-100">
                <div className="relative flex flex-col mt-8 mb-16 text-center md:mt-32 md:flex-row">
                    <header className="md:w-1/2">
                        <div className="px-8 mb-4 section__heading t__heading--h3 lg:pr-12">
                            Hear from our doctors
                        </div>
                        <div className="px-8 mb-16 text-xl font-light md:px-24 t__body--b1 lg:pr-12">
                            Real doctors. Real impact. We have very satisfied
                            doctors using the app in their daily practice.
                        </div>
                    </header>
                    <div className="flex flex-col px-16 space-y-16 md:w-1/2 md:px-0">
                        <div className="flex flex-col items-center space-y-4 text-center md:space-x-4 md:space-y-0 md:flex-row md:text-left">
                            <img
                                className="mb-auto"
                                src="/assets/dr_sujatha.png"
                                alt="Dr Sujatha"
                                height={'128px'}
                                width={'128px'}
                            />
                            <div className="flex flex-col md:text-left">
                                <span className=" t__body--b1">
                                    Dr. Sujatha Rajnikanth
                                </span>
                                <span className=" t__body--b3">
                                    Gynaecologist, Chennai
                                </span>
                                <span className="mt-3 md:w-4/5">
                                    "Nambadoctor has been a great help in my
                                    clinic for patient electronic recording,
                                    fixing appointments, reminders on day of
                                    consult. Works seamlessly. Good customer
                                    support team with immediate response and
                                    rectification. Would like their online
                                    consultation to come back :) Otherwise great
                                    app. Easy to use, not many confusing tabs
                                    and less clutter"
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4 text-center md:space-x-4 md:space-y-0 md:flex-row md:text-left">
                            <img
                                className="mb-auto"
                                src="/assets/dr_rajesh.jpg"
                                alt="Dr Rajesh Balasubramanian"
                                height={'128px'}
                                width={'128px'}
                            />
                            <div className="flex flex-col md:text-left">
                                <span className=" t__body--b1">
                                    Dr Rajesh Balasubramanian
                                </span>
                                <span className=" t__body--b3">
                                    Breast Surgeon, Chennai
                                </span>
                                <span className="mt-3 md:w-4/5">
                                    "Managing patient records, tracking their
                                    progress with pre and post-op recovery
                                    documents has been hugely helpful. Highly
                                    recommend the app."
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-blue-900 bg-blue-100">
                <div className="relative flex flex-col mt-8 mb-16 text-center md:mt-32 md:flex-row">
                    <header className="px-8 md:px-32">
                        <div className="pr-8 mb-4 section__heading t__heading--h3 lg:pr-12">
                            Contact us
                        </div>
                        <div className="pr-8 mb-16 text-xl font-light t__body--b1 lg:pr-12">
                            Want to schedule a demo?
                        </div>
                    </header>
                    <div className="flex flex-col pr-4 space-x-4 space-y-4 md:ml-auto md:pr-16 lg:space-x-12 md:space-y-0 md:flex-row">
                        <div className="flex flex-col items-center space-y-2 text-blue-900">
                            <AiOutlineWhatsApp size={'48px'} />{' '}
                            <span className="text-blue-900">
                                +44 7712 403366
                            </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2 text-blue-900">
                            <BiPhoneCall size={'48px'} />{' '}
                            <span className="text-blue-900">
                                +91 82175 99596
                            </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2 text-blue-900">
                            <AiOutlineMail size={'48px'} />{' '}
                            <span className="text-blue-900">
                                admin@nambadoctor.com
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
