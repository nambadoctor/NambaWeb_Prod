import { useState, ChangeEvent, MouseEvent } from "react";
import { VerifyPhoneNumber, VerifyOtp } from "../Auth/LoginFirebaseAuth";
import { UserCredential } from "@firebase/auth";

export default function useLoginHook() {
  const [code, setCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState<string>();
  const [credential, setCredential] = useState<UserCredential | null>(null);

  const onCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.currentTarget.value);
  };

  const onPhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.currentTarget.value);
  };

  const verifyPhoneNumber = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await VerifyPhoneNumber(code, phoneNumber).then((result) => {
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
    code,
    phoneNumber,
    onCodeChange,
    onPhoneNumberChange,
    verifyPhoneNumber,
    otp,
    onOtpChange,
    verifyOtp,
    confirmation,
    credential,
  };
}
