import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
    getReadableDateAndTimeString,
    isDatesEqual,
} from '../../Utils/GeneralUtils';
import { makeStyles } from '@mui/styles';
import { Box, TableFooter, TablePagination, Typography } from '@mui/material';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import IAppointmentData from '../../Types/IncomingDataModels/Appointment';
import { Link } from 'react-router-dom';
import NoAppointmentsView from './NoAppointmentsView';
import TablePaginationActions from '../Pagination/PaginationActions';
import usePaginationHook from '../../CustomHooks/usePaginationHook';
import { CancelAppointment } from '../../ServiceActions/AppointmentActions';
import CancelIcon from '@mui/icons-material/Cancel';
import { createSelector } from 'reselect';
import { ClearContext } from '../../Actions/ClearContextAction';

const useAppointmentTableStyles = makeStyles(() => ({
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950,
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: '#e5f0fe',
        color: '#000000',
    },
    avatar: {
        backgroundColor: '#000000',
        color: '#FFFFFF',
    },
    name: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        borderRadius: 6,
        padding: '5px 12px',
        display: 'inline-block',
    },
}));

export default function AppointmentsTable() {
    const classes = useAppointmentTableStyles();
    const dispatch = useDispatch();

    const dates = useSelector(
        (state: RootState) => state.SelectedDatesState.selectedDateRage,
    );

    const showAppointments = createSelector(
        (state: RootState) => state.AppointmentState.appointments,
        (appointments) =>
            appointments.filter((appointment) =>
                isDatesEqual(
                    dates[0],
                    new Date(appointment.scheduledAppointmentStartTime),
                ),
            ),
    );

    const appointments = useSelector(showAppointments);

    const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
        usePaginationHook(-1);

    function getBackgroundColorForAppointmentState(appointmentState: string) {
        // return is [background color, font color]
        var colorCodesToReturn = ['', ''];
        switch (appointmentState) {
            // case AppointmentTypeEnum.Consultation:
            //     colorCodesToReturn = ['#e5faf2', '#3bb077'];
            //     break;
            // case AppointmentTypeEnum.Treatment:
            //     colorCodesToReturn = ['#ebf1fe', '#2a7ade'];
            //     break;
            case 'Finished':
                colorCodesToReturn = ['#fff0f1', '#d95087'];
                break;
            default:
                colorCodesToReturn = ['#ebf1fe', '#2a7ade'];
                break;
        }

        return colorCodesToReturn;
    }

    function GetAppointmentList() {
        return (
            rowsPerPage > 0
                ? appointments.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                  )
                : appointments
        ).map((appointment: IAppointmentData, index: number) => (
            <TableRow key={appointment.appointmentId}>
                <TableCell align="left">
                    <Link
                        to={'/Consultation/' + appointment.appointmentId}
                        onClick={() => dispatch(ClearContext())}
                    >
                        {appointment.customerName}
                    </Link>
                </TableCell>
                <TableCell>
                    <Typography
                        className={classes.status}
                        style={{
                            backgroundColor:
                                getBackgroundColorForAppointmentState(
                                    appointment.status,
                                )[0],
                            color: getBackgroundColorForAppointmentState(
                                appointment.status,
                            )[1],
                        }}
                    >
                        {appointment.status}
                    </Typography>
                </TableCell>
                <TableCell align="left">
                    {getReadableDateAndTimeString(
                        appointment.scheduledAppointmentStartTime,
                    )}
                </TableCell>
                <TableCell align="left">
                    <div onClick={() => cancelAppointment(appointment)}>
                        <CancelIcon />
                    </div>
                </TableCell>
            </TableRow>
        ));
    }

    function cancelAppointment(appointment: IAppointmentData) {
        if (window.confirm('Do you want to delete this appointment?')) {
            dispatch(CancelAppointment(appointment));
        }
    }

    return (
        <TableContainer
            component={Paper}
            style={{ borderRadius: 15, marginBottom: 10 }}
        >
            <Table sx={{ minWidth: 300 }} aria-label="customized table">
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
                            Status
                        </TableCell>
                        <TableCell
                            className={classes.tableHeaderCell}
                            align="left"
                        >
                            Appointment Time
                        </TableCell>
                        <TableCell
                            className={classes.tableHeaderCell}
                            align="left"
                        ></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments && appointments.length !== 0 ? (
                        GetAppointmentList()
                    ) : (
                        <TableCell colSpan={6}>
                            <NoAppointmentsView />
                        </TableCell>
                    )}
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
                            count={appointments.length}
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
    );
}
