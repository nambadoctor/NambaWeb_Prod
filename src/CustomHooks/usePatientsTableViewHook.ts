import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { CheckIfCustomerExists } from "../ServiceActions/CustomerActions";
import {
  ClearAddPatientState,
  SetAddPatientIsCheckingForCustomer,
  SetAddPatientPhoneNumber,
} from "../Actions/AddPatientActions";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { GetAllReportsForCustomer } from "../ServiceActions/ReportActions";
import { GetAllPrescriptionsForCustomer } from "../ServiceActions/PrescriptionActions";
import { ClearAllValuesForConsultation } from "../Actions/ConsultationActions";
import { SetSelectedCustomer } from "../Actions/CustomerActions";

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
    dispatch(SetSelectedCustomer(customer))
  }

  return {
    search,
    onSearch,
    handleCustomerSelect,
    filtered,
  };
}
