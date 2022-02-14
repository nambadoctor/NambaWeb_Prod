import '../../Styles/login.css';
import useOtpPageHook from '../../CustomHooks/useOtpPageHook';

export default function OtpPage() {
    const { otp, onOtpChange, verifyOtp } = useOtpPageHook();

    return (
        <div className="container">
            <div>
                <label>Enter Otp</label>
                <input type="tel" onChange={onOtpChange} placeholder="otp" />
            </div>
            <button id="sign-in-button" onClick={verifyOtp} disabled={!otp}>
                Verify Otp
            </button>
            <button>Resend Otp</button>
        </div>
    );
}
