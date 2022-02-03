import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SignInWithPhoneNumberHelper } from '../../ServiceActions/LoginActions';
import '../../Styles/login.css';

export default function LoginPage() {
    const dispatch = useDispatch();
    const [phoneNumber, setPhoneNumber] = useState('');

    const onPhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.currentTarget.value);
    };

    const verifyPhoneNumber = () => {
        dispatch(SignInWithPhoneNumberHelper('+91' + phoneNumber));
    };

    return (
        <div className="container">
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
        </div>
    );
}
