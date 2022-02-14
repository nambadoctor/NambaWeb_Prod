import '../../Styles/login.css';
import useOtpPageHook from '../../CustomHooks/useOtpPageHook';

export default function OtpPage() {
    const { otp, credential, onOtpChange, verifyOtp } = useOtpPageHook();

    return (
        <div className="container">
            <div>
                <label>Enter Otp</label>
                <input type="tel" onChange={onOtpChange} placeholder="otp" />
            </div>
            <button id="sign-in-button" onClick={verifyOtp} disabled={!otp}>
                Verify Otp
            </button>
            {/* <button disabled={credential !== 'error'}>Resend Otp</button> */}
            {credential === 'error' && alert('Ivalid Otp!')}
            {window.location.reload()}
        </div>
    );
}
