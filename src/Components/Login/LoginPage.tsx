import useLoginPageHook from '../../CustomHooks/useLoginPageHook';
import '../../Styles/login.css';
import OtpPage from './OtpPage';

export default function LoginPage() {
    const {
        phoneNumber,
        onPhoneNumberChange,
        verifyPhoneNumber,
        verifyPhoneOnPressEnter,
        confirmation,
    } = useLoginPageHook();
    return (
        <div className="container">
            {!confirmation ? (
                <>
                    <label>PhoneNumber</label>
                    <div>
                        <input id="code" value="+91" disabled />
                        <input
                            type="tel"
                            onChange={onPhoneNumberChange}
                            placeholder="phonenumber"
                            onKeyPress={(event) =>
                                event.key === 'Enter' &&
                                verifyPhoneOnPressEnter(event)
                            }
                        />
                    </div>
                    <button
                        id="sign-in-button"
                        onClick={verifyPhoneNumber}
                        disabled={!phoneNumber}
                    >
                        Verify Number
                    </button>
                </>
            ) : (
                <OtpPage />
            )}
        </div>
    );
}
