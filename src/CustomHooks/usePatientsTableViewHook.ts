import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { CheckIfCustomerExists } from "../ServiceActions/CustomerActions";
import {
  SetAddPatientIsCheckingForCustomer,
  SetAddPatientPhoneNumber,
} from "../Actions/AddPatientActions";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";

export default function usePatientsTableViewHook() {
  const dispatch = useDispatch();

  const customerState = useSelector((state: RootState) => state.CustomersState);

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(customerState.customers);

  useEffect(() => {
    customerState && setFiltered(customerState.customers);
  }, [customerState]);

  const onSearch = (value: any) => {
    setSearch(value);
    var filterWithNames = customerState.customers.filter((customer) =>
      customer.firstName.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(filterWithNames);
  };

  function handleCustomerSelect(customer: ICustomerIncomingData) {
    dispatch(SetAddPatientIsCheckingForCustomer(true));
    dispatch(
      CheckIfCustomerExists(
        customer.phoneNumbers[0].number,
        customer.organisationId
      )
    );
    dispatch(SetAddPatientPhoneNumber(customer.phoneNumbers[0].number));
  }

  return {
    search,
    onSearch,
    handleCustomerSelect,
    filtered,
  };
}
