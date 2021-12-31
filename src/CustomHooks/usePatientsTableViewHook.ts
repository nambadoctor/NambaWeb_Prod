import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../store";
import { GetAllCustomersForServiceProviderInOrg } from "../Actions/CustomerActions";

export default function usePatientsTableViewHook() {
  const dispatch = useDispatch();

  const customerState = useSelector(
    (state: RootStore) => state.CustomersReducer
  );

  useEffect(() => {
    dispatch(GetAllCustomersForServiceProviderInOrg());
  }, []);

  return { customerState };
}
