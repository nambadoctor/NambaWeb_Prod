import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ICustomerIncomingData from '../../Types/IncomingDataModels/CustomerIncoming';
import { TableFooter, TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';
import TablePaginationActions from '../Pagination/PaginationActions';
import usePaginationHook from '../../CustomHooks/usePaginationHook';
import usePatientsTableViewHook from '../../CustomHooks/usePatientsTableViewHook';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ClearContext } from '../../Actions/ClearContextAction';
import { usePatientTableStyles } from '../UIHelperComponents/TableStyles';

export default function PatientsTableView() {
    const classes = usePatientTableStyles();

    const [selectedID, setSelectedID] = useState('');

    const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
        usePaginationHook(10);

    const { search, onSearch, handleCustomerSelect, filtered } =
        usePatientsTableViewHook();

    const dispatch = useDispatch();

    function makeCustomerListDisplay() {
        return (
            rowsPerPage > 0
                ? filtered.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                  )
                : filtered
        ).map((customer: ICustomerIncomingData, index: number) => (
            <TableRow
                key={customer.customerId}
                onClick={() => {
                    setSelectedID(customer.customerId);
                }}
                selected={selectedID === customer.customerId}
            >
                <TableCell
                    align="left"
                    onClick={() => handleCustomerSelect(customer)}
                >
                    <Link
                        to={'/Patient/' + customer.customerId}
                        onClick={() => dispatch(ClearContext())}
                    >
                        {customer.firstName +
                            ' ' +
                            (customer.lastName ? customer.lastName : '')}
                    </Link>
                </TableCell>
                <TableCell align="left">{customer.gender}</TableCell>
                <TableCell align="left">{customer.dateOfBirth.age}</TableCell>
                <TableCell onClick={() => handleCustomerSelect(customer)}>
                    <Link
                        to={'/Patient/' + customer.customerId}
                        onClick={() => dispatch(ClearContext())}
                    >
                        {customer.phoneNumbers[0].number}
                    </Link>
                </TableCell>
            </TableRow>
        ));
    }

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginRight: '5em',
                }}
            >
                <h5 style={{ marginBottom: 20 }}>Add/Edit Patient</h5>
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>

            <TableContainer component={Paper} style={{ borderRadius: 15 }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow style={{ height: 10 }}>
                            <TableCell
                                className={classes.tableHeaderCell}
                                align="left"
                            >
                                Name
                            </TableCell>
                            <TableCell
                                className={classes.tableHeaderCell}
                                align="left"
                            >
                                Gender
                            </TableCell>
                            <TableCell
                                className={classes.tableHeaderCell}
                                align="left"
                            >
                                Age
                            </TableCell>
                            <TableCell
                                className={classes.tableHeaderCell}
                                align="left"
                            >
                                Phone Number
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filtered.length !== 0 && makeCustomerListDisplay()}
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[
                                    5,
                                    10,
                                    25,
                                    { label: 'All', value: -1 },
                                ]}
                                colSpan={3}
                                count={filtered.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
}
