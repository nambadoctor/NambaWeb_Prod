import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GetAllAppointments, setFilteredAppointments } from '../../Actions/AppointmentActions';
import { RootStore } from '../../store';
import IDeNormalisedAppointmentData from '../../Types/DeNormalisedAppointment';
import { convertDaysIntoNearestUnit, getReadableDateString } from '../../Utils/GeneralUtils';
import { PeopleAltRounded, VideoCameraFront } from '@mui/icons-material';
import "../../Styles/main_page.css"
import AppointmentStatusEnum from '../../Types/Enums/AppointmentStatusEnums';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles(() => ({
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

export default function AppointmentsTable() {
    const dispatch = useDispatch();
    const appointmentState = useSelector((state: RootStore) => state.AppointmentReducer);
    const appointmentCategoryState = useSelector((state: RootStore) => state.AppointmentCategoryReducer);
    const selectedDatesState = useSelector((state: RootStore) => state.SelectedDatesReducer);
    const organisationState = useSelector((state: RootStore) => state.OrgReducer)

    const classes = useStyles();

    const getAllAppointments = () => {
        dispatch(GetAllAppointments());
    };

    useEffect(() => {
        dispatch(setFilteredAppointments(selectedDatesState.dates, appointmentState.appointments, organisationState.selectedOrganisation))
    }, [appointmentCategoryState.selectedCategory, selectedDatesState.dates, organisationState.selectedOrganisation])

    useEffect(() => {
        getAllAppointments()
    }, [])

    function getLastVisitForCustomer(customerId: string) {
        var lastVisitedDate = new Date();
        appointmentState.appointments.forEach(element => {
            if (element.appointment.customerId == customerId) {
                var currentAppointmentDate = new Date(element.appointment.scheduledAppointmentStartTime);
                if (currentAppointmentDate < lastVisitedDate) {
                    lastVisitedDate = currentAppointmentDate;
                }
            }
        })

        var currentDate = new Date();
        var Time = currentDate.getTime() - lastVisitedDate.getTime();
        var days = Time / (1000 * 3600 * 24);
        return convertDaysIntoNearestUnit(days);
    }

    function getDisplayNameForAppointmentState(appointmentState: string) {
        switch (appointmentState) {
            case AppointmentStatusEnum.Confirmed:
                return "Confirmed";
            case AppointmentStatusEnum.StartedConsultation:
                return "Started";
            case AppointmentStatusEnum.Finished:
                return "Finished";
            case AppointmentStatusEnum.Cancelled:
                return "Cancelled";
        }
    }

    function getBackgroundColorForAppointmentState(appointmentState: string) { // return is [background color, font color]
        var colorCodesToReturn = ["", ""]
        switch (appointmentState) {
            case AppointmentStatusEnum.Confirmed:
                colorCodesToReturn = ["#e5faf2", "#3bb077"];
                break;
            case AppointmentStatusEnum.StartedConsultation:
                colorCodesToReturn = ["#ebf1fe", "#2a7ade"];
                break;
            case AppointmentStatusEnum.Finished:
                colorCodesToReturn = ["#fff0f1", "#d95087"];
                break;
            case AppointmentStatusEnum.Cancelled:
                colorCodesToReturn = ["", ""];
                break;
        }

        return colorCodesToReturn;
    }

    return (
        <TableContainer component={Paper} style={{ marginTop: 20, marginLeft: 20, borderRadius: 15 }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow style={{ height: 10 }}>
                        <TableCell className={classes.tableHeaderCell} align="left">Name</TableCell>
                        <TableCell className={classes.tableHeaderCell} align="left">Last Visit</TableCell>
                        <TableCell className={classes.tableHeaderCell} align="left">Status</TableCell>
                        <TableCell className={classes.tableHeaderCell} align="left">Appointment Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointmentState.appointments.length != 0 &&
                        appointmentState.filteredAppointments
                            .filter(appointment => (appointment.appointment.status == appointmentCategoryState.selectedCategory || appointmentCategoryState.selectedCategory == "Total"))
                            .map((appointment: IDeNormalisedAppointmentData, index: number) => (
                                <TableRow key={appointment.appointment.id}>
                                    <TableCell align="left">{appointment.customerName}</TableCell>
                                    <TableCell align="left">{getLastVisitForCustomer(appointment.appointment.customerId)}</TableCell>
                                    <TableCell>
                                        <Typography
                                            className={classes.status}
                                            style={{
                                                backgroundColor: getBackgroundColorForAppointmentState(appointment.appointment.status)[0],
                                                color: getBackgroundColorForAppointmentState(appointment.appointment.status)[1]
                                            }}
                                        >{getDisplayNameForAppointmentState(appointment.appointment.status)}</Typography>
                                    </TableCell>
                                    <TableCell align="left">{getReadableDateString(appointment.appointment.scheduledAppointmentStartTime)}</TableCell>
                                </TableRow>
                            ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
