import useLoginPageHook from "../../CustomHooks/useLoginHook";
import OtpPage from "./OtpPage";
import "../../Styles/login.css";
import PhonePage from "./PhonePage";

export default function Login() {
  const { confirmation } = useLoginPageHook();

  return (
    <div className="container">
      {console.log("confirmationR kjh", confirmation)}
      {confirmation ? <OtpPage /> : <PhonePage />}
    </div>
  );
}
