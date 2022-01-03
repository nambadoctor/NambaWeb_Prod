import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { convertDaysIntoNearestUnit, getReadableDateString } from "../../Utils/GeneralUtils";
import { PeopleAltRounded, VideoCameraFront } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import AppointmentStatusEnum from "../../Types/Enums/AppointmentStatusEnums";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import IAppointmentData from "../../Types/ClientDataModels/Appointment";

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

  const appointmentState = useSelector((state: RootState) => state.AppointmentState);
  
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

  return (
    <TableContainer component={Paper} style={{ borderRadius: 15, marginBottom: 10 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow style={{ height: 10 }}>
            <TableCell
              className={classes.tableHeaderCell}
              align="left"
            ></TableCell>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {appointmentState.filteredAppointments.length !== 0 &&
            appointmentState.filteredAppointments
              .map(
                (appointment: IAppointmentData, index: number) => (
                  <TableRow key={appointment.appointmentId}>
                    <TableCell align="left">
                      <span className="appointmentTableName">
                        {/* TODO: CHECK WHAT THE RETURN TYPE FOR THIS IS */}
                        {appointment.appointmentType == "In Person" ? (
                          <PeopleAltRounded
                            style={{ color: "#149c4a" }}
                          ></PeopleAltRounded>
                        ) : (
                          <VideoCameraFront
                            style={{ color: "#0863e4" }}
                          ></VideoCameraFront>
                        )}
                      </span>
                    </TableCell>
                    <TableCell align="left">
                      {appointment.customerName}
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
                  </TableRow>
                )
              )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
