import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { isDatesEqual } from '../Utils/GeneralUtils';
import { makeStyles } from '@mui/styles';
import { TableFooter, TablePagination } from '@mui/material';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import IAppointmentData from '../Types/IncomingDataModels/Appointment';
import NoAppointmentsView from '../Components/Appointments/NoAppointmentsView';
import TablePaginationActions from '../Components/Pagination/PaginationActions';
import usePaginationHook from '../CustomHooks/usePaginationHook';
import { createSelector } from 'reselect';
import { UploadReportForConsultation } from '../ServiceActions/ReportActions';
import { UploadPrescriptionForConsultation } from '../ServiceActions/PrescriptionActions';
import { MobileReportUploadPicker } from './MobileReportUploadPicker';
import { MobilePrescriptionUploadPicker } from './MobilePrescriptionUploadPicker';

const useAppointmentTableStyles = makeStyles(() => ({
    table: {
        minWidth: 300,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
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

export default function MobileAppointmentsTableView() {
    const classes = useAppointmentTableStyles();

    const dates = useSelector(
        (state: RootState) => state.SelectedDatesState.selectedDateRage,
    );

    const showAppointmentReports = createSelector(
        (state: RootState) => state.AppointmentState.appointments,
        (appointments) =>
            appointments.filter((appointment) =>
                isDatesEqual(
                    dates[0],
                    new Date(appointment.scheduledAppointmentStartTime),
                ),
            ),
    );

    const appointments = useSelector(showAppointmentReports);

    const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
        usePaginationHook(-1);

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
                <TableCell align="left" style={{ wordBreak: 'break-word' }}>
                    {appointment.customerName}
                </TableCell>
                <TableCell align="left">
                    <MobileReportUploadPicker
                        handlePhotoCallBack={UploadReportForConsultation}
                        uploadButtonColor="#1672f9"
                    />
                </TableCell>
                <TableCell align="left">
                    <MobilePrescriptionUploadPicker
                        handlePhotoCallBack={UploadPrescriptionForConsultation}
                        uploadButtonColor="#1672f9"
                    />
                </TableCell>
            </TableRow>
        ));
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
                        <TableCell className={classes.tableHeaderCell}>
                            Report
                        </TableCell>
                        <TableCell
                            className={classes.tableHeaderCell}
                            align="left"
                        >
                            Prescription
                        </TableCell>
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
