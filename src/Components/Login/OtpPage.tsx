import "../../Styles/login.css";
import useLoginPageHook from "../../CustomHooks/useLoginHook";

export default function OtpPage() {
  const { onOtpChange, verifyOtp } = useLoginPageHook();

  return (
    <form className="form">
      <div>
        <label>Enter Otp</label>
        <input type="tel" onChange={onOtpChange} placeholder="otp" />
      </div>
      <button id="sign-in-button" onClick={verifyOtp}>
        Verify Otp
      </button>
    </form>
  );
}
