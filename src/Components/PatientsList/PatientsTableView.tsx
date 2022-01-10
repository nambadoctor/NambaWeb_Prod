import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import ICustomerIncomingData from "../../Types/IncomingDataModels/CustomerIncoming";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { CheckIfCustomerExists, SetCustomer } from "../../Actions/CustomerActions";
import { SetAddPatientPhoneNumber } from "../../Actions/AddPatientActions";

const usePatientTableStyles = makeStyles(() => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "#e5f0fe",
    color: "#000000",
  },
  avatar: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
  },
  name: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    borderRadius: 6,
    padding: "5px 12px",
    display: "inline-block",
  },
}));

export default function PatientsTableView() {
  const dispatch = useDispatch();
  const classes = usePatientTableStyles();

  const customerState = useSelector(
    (state: RootState) => state.CustomersState
  );

  function handleCustomerSelect(customer: ICustomerIncomingData) {
    dispatch(CheckIfCustomerExists(customer.phoneNumbers[0].number, customer.organisationId))
    dispatch(SetAddPatientPhoneNumber(customer.phoneNumbers[0].number))
  }

  return (
    <TableContainer component={Paper} style={{ borderRadius: 15 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow style={{ height: 10 }}>
            <TableCell className={classes.tableHeaderCell} align="left">
              Name
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="left">
              Age/Gender
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="left">
              Phone Number
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="left">
              Added On
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customerState.customers.length !== 0 &&
            customerState.customers.map(
              (customer: ICustomerIncomingData, index: number) => (
                <TableRow key={customer.customerId}>
                  <TableCell align="left">
                    {customer.firstName + " " + (customer.lastName ? customer.lastName : "")}
                  </TableCell>
                  <TableCell align="left">
                    {customer.gender}/age
                  </TableCell>
                  <TableCell onClick={() => handleCustomerSelect(customer)}>{customer.phoneNumbers[0].number}</TableCell>
                  <TableCell align="left">
                    GET CREATED DATE{/* {getReadableDateString(customer.createdDate)} */}
                  </TableCell>
                </TableRow>
              )
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
