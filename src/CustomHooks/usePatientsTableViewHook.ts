import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { GetAllCustomersForServiceProviderInOrg } from "../Actions/CustomerActions";

export default function usePatientsTableViewHook() {
  const dispatch = useDispatch();

  const customerState = useSelector(
    (state: RootState) => state.CustomersState
  );

  useEffect(() => {
    dispatch(GetAllCustomersForServiceProviderInOrg());
  }, []);

  return { customerState };
}
