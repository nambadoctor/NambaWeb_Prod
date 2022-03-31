import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import useAuthHook from '../service-actions/LoginActions';

export default function useLoginHook() {
    const dispatch = useDispatch();
    const { SignInWithPhoneNumberHelper } = useAuthHook();
    const [phoneNumber, setPhoneNumber] = useState('');

    const onPhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.currentTarget.value);
    };

    const verifyPhoneNumber = () => {
        dispatch(SignInWithPhoneNumberHelper(phoneNumber));
    };

    return { onPhoneNumberChange, verifyPhoneNumber };
}
