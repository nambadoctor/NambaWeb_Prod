import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createSelector } from 'reselect';
import { ClearContext } from '../actions/ClearContextAction';
import { SetSelectedAppointmentForConsultation } from '../actions/ConsultationActions';
import NoAppointmentsView from '../components/Appointments/NoAppointmentsView';
import usePaginationHook from '../hooks/usePaginationHook';
import { RootState } from '../store';
import IAppointmentData from '../types/IncomingDataModels/Appointment';
import { isDatesEqual } from '../utils/GeneralUtils';
import { MobilePrescriptionUploadPicker } from './MobilePrescriptionUploadPicker';
import { MobileReportUploadPicker } from './MobileReportUploadPicker';
import { UploadPrescriptionForConsultation } from './ServiceActions/PrescriptionActions';
import { UploadReportForConsultation } from './ServiceActions/ReportActions';

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
    const dispatch = useDispatch();

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
        return appointments.map(
            (appointment: IAppointmentData, _index: number) => {
                const getAppointment = () => {
                    dispatch(
                        SetSelectedAppointmentForConsultation(appointment),
                    );
                };
                return (
                    <TableRow
                        key={appointment.appointmentId}
                        onClick={getAppointment}
                    >
                        <TableCell
                            align="left"
                            style={{ wordBreak: 'break-word' }}
                        >
                            <Link
                                to={
                                    '/Consultation/' + appointment.appointmentId
                                }
                                onClick={() => dispatch(ClearContext())}
                            >
                                {appointment.customerName}
                            </Link>
                        </TableCell>
                        <TableCell align="left">
                            <MobileReportUploadPicker
                                handlePhotoCallBack={
                                    UploadReportForConsultation
                                }
                                uploadButtonColor="#1672f9"
                            />
                        </TableCell>
                        <TableCell align="left">
                            <MobilePrescriptionUploadPicker
                                handlePhotoCallBack={
                                    UploadPrescriptionForConsultation
                                }
                                uploadButtonColor="#1672f9"
                            />
                        </TableCell>
                    </TableRow>
                );
            },
        );
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
            </Table>
        </TableContainer>
    );
}
