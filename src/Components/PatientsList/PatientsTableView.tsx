import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../store';
import { getReadableDateString } from '../../Utils/GeneralUtils';
import { makeStyles } from '@mui/styles';
import ICustomerData from '../../Types/Customer'
import { GetAllCustomersForServiceProviderInOrg } from '../../Actions/CustomerActions';

const usePatientTableStyles = makeStyles(() => ({
    table: {
        minWidth: 650
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: "#e5f0fe",
        color: "#000000"
    },
    avatar: {
        backgroundColor: "#000000",
        color: "#FFFFFF"
    },
    name: {
        fontWeight: 'bold',
        color: "#FFFFFF"
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        borderRadius: 6,
        padding: '5px 12px',
        display: 'inline-block'
    }
}));


export default function PatientsTableView() {
    const dispatch = useDispatch()

    const customerState = useSelector((state: RootStore) => state.CustomersReducer)
    const classes = usePatientTableStyles();

    useEffect(() => {
        dispatch(GetAllCustomersForServiceProviderInOrg())
    }, [])


    return (
        <TableContainer component={Paper} style={{ borderRadius: 15 }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow style={{ height: 10 }}>
                        <TableCell className={classes.tableHeaderCell} align="left">Name</TableCell>
                        <TableCell className={classes.tableHeaderCell} align="left">Age/Gender</TableCell>
                        <TableCell className={classes.tableHeaderCell} align="left">Phone Number</TableCell>
                        <TableCell className={classes.tableHeaderCell} align="left">Added On</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customerState.customers.length != 0 &&
                        customerState.customers
                            .map((customer: ICustomerData, index: number) => (
                                <TableRow key={customer.id}>
                                    <TableCell align="left">{customer.firstName + " " + customer.lastName}</TableCell>
                                    <TableCell align="left">{customer.gender}/{customer.age}</TableCell>
                                    <TableCell>{customer.phoneNumbers[0].number}</TableCell>
                                    <TableCell align="left">{getReadableDateString(customer.createdDate)}</TableCell>
                                </TableRow>
                            ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
