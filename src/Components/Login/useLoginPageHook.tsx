import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { SignInWithPhoneNumberHelper } from "../../Actions/Common/LoginActions";

export default function useLoginPageHook() {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const onPhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.currentTarget.value);
  };

  const verifyPhoneNumber = () => {
    dispatch(SignInWithPhoneNumberHelper(phoneNumber));
  };

  return { onPhoneNumberChange, verifyPhoneNumber };
}
