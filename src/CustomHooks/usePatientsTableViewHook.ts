import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { CheckIfCustomerExists } from "../ServiceActions/CustomerActions";
import {
  SetAddPatientIsCheckingForCustomer,
  SetAddPatientPhoneNumber,
} from "../Actions/AddPatientActions";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { GetAllReportsForCustomer } from "../ServiceActions/ReportActions";
import { GetAllPrescriptionsForCustomer } from "../ServiceActions/PrescriptionActions";

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
    
    var filterWithNames = customerState.customers.filter((customer) => {
      return(
        customer.firstName.toLowerCase().includes(value.toLowerCase()) ||
        customer.phoneNumbers[0].number.toLowerCase().includes(value.toLowerCase()))
    });
    setFiltered(filterWithNames);
  };

  function handleCustomerSelect(customer: ICustomerIncomingData) {
    dispatch(SetAddPatientIsCheckingForCustomer(true));
    dispatch(GetAllReportsForCustomer(customer.organisationId, customer.customerId, null))
    dispatch(GetAllPrescriptionsForCustomer(customer.organisationId, customer.customerId, null))
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
