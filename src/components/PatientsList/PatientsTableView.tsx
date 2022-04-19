import DateRangeIcon from '@mui/icons-material/DateRange';
import EditIcon from '@mui/icons-material/Edit';
import { TableFooter, TablePagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Dispatch, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ClearContext } from '../../actions/ClearContextAction';
import { ClearCurrentCustomerState } from '../../actions/CurrentCustomerActions';
import usePaginationHook from '../../hooks/usePaginationHook';
import usePatientsTableViewHook from '../../hooks/usePatientsTableViewHook';
import ICustomerIncomingData from '../../types/IncomingDataModels/CustomerIncoming';
import TablePaginationActions from '../Pagination/PaginationActions';
import { usePatientTableStyles } from '../UIHelperComponents/TableStyles';

interface EditPatientViewProps {
    setIsSchedulingAppointment: Dispatch<SetStateAction<boolean>> | null;
}

export const PatientsTableView: React.FC<EditPatientViewProps> = (props) => {
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
        ).map((customer: ICustomerIncomingData, _index: number) => (
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

                <TableCell>
                    <EditIcon
                        color="primary"
                        onClick={() => {
                            dispatch(ClearCurrentCustomerState());
                            props.setIsSchedulingAppointment &&
                                props.setIsSchedulingAppointment(false);
                            handleCustomerSelect(customer);
                        }}
                        style={{ cursor: 'pointer' }}
                    ></EditIcon>
                    <DateRangeIcon
                        color="primary"
                        onClick={() => {
                            dispatch(ClearCurrentCustomerState());
                            props.setIsSchedulingAppointment &&
                                props.setIsSchedulingAppointment(true);
                            handleCustomerSelect(customer);
                        }}
                        style={{ marginLeft: 15, cursor: 'pointer' }}
                    ></DateRangeIcon>
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
                <span className="font-bold pt-2">Patients</span>
                <input
                    className="w-48 bg-white text-black p-1 rounded-lg border-2 border-solid border-blue-500"
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>

            <TableContainer
                component={Paper}
                style={{ borderRadius: 15, marginTop: 10 }}
            >
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
                            <TableCell
                                className={classes.tableHeaderCell}
                                align="left"
                            >
                                {' '}
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
};
