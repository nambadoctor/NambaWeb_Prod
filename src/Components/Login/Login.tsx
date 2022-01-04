import useLoginPageHook from "../../CustomHooks/useLoginHook";
import OtpPage from "./OtpPage";
import "../../Styles/login.css";
import PhonePage from "./PhonePage";

export default function Login() {
  const { result } = useLoginPageHook();

  return (
    <div className="container">
      {!result.confirmationResult ? <PhonePage /> : <OtpPage />}
    </div>
  );
}
