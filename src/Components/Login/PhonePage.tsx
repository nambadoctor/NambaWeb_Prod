import useLoginHook from "../../CustomHooks/useLoginHook";
import "../../Styles/login.css";
import OtpPage from "./OtpPage";

export default function PhonePage() {
  const {
    code,
    phoneNumber,
    onCodeChange,
    onPhoneNumberChange,
    verifyPhoneNumber,
    confirmation,
  } = useLoginHook();

  return (
    <div className="container">
      {!confirmation ? (
        <>
          <form className="form">
            <div>
              <input
                id="code"
                type="tel"
                onChange={onCodeChange}
                placeholder="Code"
              />

              <input
                id="phone"
                type="tel"
                onChange={onPhoneNumberChange}
                placeholder="Phone number"
                disabled={code.length !== 2}
              />
            </div>
            <button
              id="sign-in-button"
              className={
                phoneNumber.length === 10
                  ? "validSignInBtn"
                  : "invalidSignInBtn"
              }
              onClick={verifyPhoneNumber}
              disabled={phoneNumber.length !== 10}
            >
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
