import useLoginPageHook from "./useLoginPageHook";
import "../../Styles/loginPage.css";

export default function LoginPage() {
  const { onPhoneNumberChange, verifyPhoneNumber } = useLoginPageHook();

  return (
    <div className="container">
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
    </div>
  );
}
