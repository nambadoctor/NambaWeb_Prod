import { useState, ChangeEvent, MouseEvent, KeyboardEvent } from 'react';
import { SignInWithPhoneNumberHelper } from '../ServiceActions/LoginActions';

export default function useLoginPageHook() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirmation, setConfirmation] = useState<String>();

    const onPhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        value.length === 10 ? setPhoneNumber(value) : setPhoneNumber('');
    };

    const verifyPhoneNumber = async (
        event: MouseEvent<HTMLButtonElement> | KeyboardEvent,
    ) => {
        event.preventDefault();
        SignInWithPhoneNumberHelper('+91' + phoneNumber).then((result) =>
            setConfirmation(result),
        );
    };

    const verifyPhoneOnPressEnter = async (event: KeyboardEvent) => {
        event.preventDefault();
        event.key === 'Enter' &&
            SignInWithPhoneNumberHelper('+91' + phoneNumber).then((result) =>
                setConfirmation(result),
            );
    };

    return {
        phoneNumber,
        onPhoneNumberChange,
        verifyPhoneNumber,
        verifyPhoneOnPressEnter,
        confirmation,
    };
}
