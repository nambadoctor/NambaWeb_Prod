import { useState, ChangeEvent, MouseEvent } from 'react';
import { VerifyOtp } from '../ServiceActions/LoginActions';
import { UserCredential } from '@firebase/auth';

export default function useOtpPageHook() {
    const [otp, setOtp] = useState('');
    const [credential, setCredential] = useState<
        UserCredential | null | 'wrong otp'
    >(null);

    const onOtpChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        value.length === 6 ? setOtp(value) : setOtp('');
    };

    const verifyOtp = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        let userCredential = await VerifyOtp(otp);
        setCredential(userCredential);
    };

    return { otp, credential, onOtpChange, verifyOtp };
}
