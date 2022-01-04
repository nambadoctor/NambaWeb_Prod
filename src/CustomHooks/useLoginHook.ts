import { useState, ChangeEvent, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VerifyPhoneNumber, VerifyOtp } from "../Actions/Common/LoginActions";
import { RootStore } from "../store";

export default function useLoginHook() {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const result = useSelector((state: RootStore) => state.LoginReducer);

  const onPhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.currentTarget.value);
  };

  const verifyPhoneNumber = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(VerifyPhoneNumber(phoneNumber));
  };

  const onOtpChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOtp(event.currentTarget.value);
  };

  const verifyOtp = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(VerifyOtp(result, otp));
  };

  return {
    onPhoneNumberChange,
    verifyPhoneNumber,
    onOtpChange,
    verifyOtp,
    result,
  };
}
