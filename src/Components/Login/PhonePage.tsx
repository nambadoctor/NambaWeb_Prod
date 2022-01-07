import useLoginHook from "../../CustomHooks/useLoginHook";
import "../../Styles/login.css";
import OtpPage from "./OtpPage";

export default function PhonePage() {
  const { onPhoneNumberChange, verifyPhoneNumber, confirmation } =
    useLoginHook();

  return (
    <div className="container">
      {!confirmation ? (
        <>
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
        </>
      ) : (
        <OtpPage />
      )}
    </div>
  );
}
