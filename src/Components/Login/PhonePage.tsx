import useLoginPageHook from "../../CustomHooks/useLoginHook";
import "../../Styles/login.css";

export default function PhonePage() {
  const { onPhoneNumberChange, verifyPhoneNumber } = useLoginPageHook();

  return (
    <form className="form">
      <div>
        <label>PhoneNumber</label>
        <input
          type="tel"
          onChange={onPhoneNumberChange}
          placeholder="phonenumber"
        />
      </div>
      <button id="sign-in-button" onClick={verifyPhoneNumber}>
        Verify Number
      </button>
    </form>
  );
}
