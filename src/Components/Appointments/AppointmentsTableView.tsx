import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { convertDaysIntoNearestUnit, getReadableDateString } from "../../Utils/GeneralUtils";
import { makeStyles } from "@mui/styles";
import { Box, TableFooter, TablePagination, Typography } from "@mui/material";
import AppointmentStatusEnum from "../../Types/Enums/AppointmentStatusEnums";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import IAppointmentData from "../../Types/IncomingDataModels/Appointment";
import { Link } from "react-router-dom";
import { GetAppointmentForConsultation, GetCustomerForConsultation } from "../../Actions/ConsultationActions";
import NoAppointmentsView from "./NoAppointmentsView";
import TablePaginationActions from "../Pagination/PaginationActions";
import usePaginationHook from "../../CustomHooks/usePaginationHook";
import { CancelAppointment } from "../../Actions/AppointmentActions";
import CancelIcon from '@mui/icons-material/Cancel';

const useAppointmentTableStyles = makeStyles(() => ({
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

export default function AppointmentsTable() {
  const classes = useAppointmentTableStyles();
  const dispatch = useDispatch();

  const appointmentState = useSelector((state: RootState) => state.AppointmentState);

  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = usePaginationHook()

  //Once this is moved to service, instead of listening to appointment state, UI can listen directly to filtered appointments
  function getLastVisitForCustomer(customerId: string) {
    var lastVisitedDate = new Date();
    appointmentState.appointments.forEach((element) => {
      if (element.customerId === customerId) {
        var currentAppointmentDate = new Date(
          element.scheduledAppointmentStartTime
        );
        if (currentAppointmentDate < lastVisitedDate) {
          lastVisitedDate = currentAppointmentDate;
        }
      }
    });

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
      default:
        break;
    }
  }

  function getBackgroundColorForAppointmentState(appointmentState: string) {
    // return is [background color, font color]
    var colorCodesToReturn = ["", ""];
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
      default:
        break;
    }

    return colorCodesToReturn;
  }

  function GetAppointmentList() {

    return (rowsPerPage > 0
      ? appointmentState.filteredAppointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : appointmentState.filteredAppointments
    ).map(
      (appointment: IAppointmentData, index: number) => (
        <TableRow key={appointment.appointmentId}>
          <TableCell align="left">
            <Link to={"/Consultation/" + appointment.appointmentId}>{appointment.customerName}</Link>
          </TableCell>
          <TableCell align="left">
            {getLastVisitForCustomer(
              appointment.customerId
            )}
          </TableCell>
          <TableCell>
            <Typography
              className={classes.status}
              style={{
                backgroundColor:
                  getBackgroundColorForAppointmentState(
                    appointment.status
                  )[0],
                color: getBackgroundColorForAppointmentState(
                  appointment.status
                )[1],
              }}
            >
              {getDisplayNameForAppointmentState(
                appointment.status
              )}
            </Typography>
          </TableCell>
          <TableCell align="left">
            {getReadableDateString(
              appointment.scheduledAppointmentStartTime
            )}
          </TableCell>
          <TableCell align="left">
            <div onClick={() => cancelAppointment(appointment)}><CancelIcon /></div>
          </TableCell>
        </TableRow>
      )
    )
  }

  function cancelAppointment(appointment: IAppointmentData) {
    if (window.confirm("Do you want to delete this appointment?")) {
      dispatch(CancelAppointment(appointment))
    }
  }

  return (
    <TableContainer component={Paper} style={{ borderRadius: 15, marginBottom: 10 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow style={{ height: 10 }}>
            <TableCell className={classes.tableHeaderCell} align="left">
              Name
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="left">
              Last Visit
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="left">
              Status
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="left">
              Appointment Time
            </TableCell>
            <TableCell className={classes.tableHeaderCell} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointmentState.filteredAppointments && appointmentState.filteredAppointments.length !== 0 ?
            GetAppointmentList() :
            <TableCell colSpan={6}><NoAppointmentsView /></TableCell>
          }
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={appointmentState.filteredAppointments.length}
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