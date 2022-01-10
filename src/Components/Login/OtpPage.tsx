import "../../Styles/login.css";
import useLoginHook from "../../CustomHooks/useLoginHook";

export default function OtpPage() {
  const { otp, onOtpChange, verifyOtp } = useLoginHook();

  return (
    <form className="form">
      <div>
        <label>Enter Otp</label>
        <input type="tel" onChange={onOtpChange} placeholder="otp" />
      </div>
      <button
        id="sign-in-button"
        onClick={verifyOtp}
        disabled={otp.length !== 6}
      >
        Verify Otp
      </button>
    </form>
  );
}
