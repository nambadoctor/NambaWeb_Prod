import { useState, ChangeEvent, MouseEvent } from "react";
import { VerifyPhoneNumber, VerifyOtp } from "../Auth/LoginFirebaseAuth";
import { ConfirmationResult, UserCredential } from "@firebase/auth";

export default function useTestLoginHook() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(
    null
  );
  const [credential, setCredential] = useState<UserCredential | null>(null);

  const onPhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.currentTarget.value);
  };

  const verifyPhoneNumber = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await VerifyPhoneNumber(phoneNumber).then((result) => {
      setConfirmation(result);
    });
  };

  const onOtpChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOtp(event.currentTarget.value);
  };

  const verifyOtp = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let userCredential = await VerifyOtp(otp);
    setCredential(userCredential);
  };

  return {
    onPhoneNumberChange,
    verifyPhoneNumber,
    onOtpChange,
    verifyOtp,
    confirmation,
    credential,
  };
}
