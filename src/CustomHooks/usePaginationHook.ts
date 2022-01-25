import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { CheckIfCustomerExists } from "../ServiceActions/CustomerActions";
import {
  SetAddPatientIsCheckingForCustomer,
  SetAddPatientPhoneNumber,
} from "../Actions/AddPatientActions";

export default function usePaginationHook() {
  const dispatch = useDispatch();

  const customerState = useSelector((state: RootState) => state.CustomersState);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(customerState.customers);

  useEffect(() => {
    customerState && setFiltered(customerState.customers);
  }, [customerState]);

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

  const onSearch = (value: any) => {
    setSearch(value);
    var filterWithPhone = customerState.customers
      .map((customer) => [
        customer.firstName,
        customer.phoneNumbers.filter((number) =>
          (number.countryCode + number.number).includes(value)
        ),
      ])
      .filter((arr) => arr[1].length !== 0 && arr[0]);

    var filterWithNames = customerState.customers.filter((customer) =>
      customer.firstName.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(filterWithNames);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    handleCustomerSelect,
    search,
    onSearch,
    filtered,
    customerState,
  };
}
