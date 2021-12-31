import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IDeNormalisedAppointmentData from "../../Types/DeNormalisedAppointment";
import { getReadableDateString } from "../../Utils/GeneralUtils";
import { PeopleAltRounded, VideoCameraFront } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import useAppointmentsTableHook from "../../CustomHooks/useAppointmentsTableHook";

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
  const {
    appointmentState,
    appointmentCategoryState,
    getLastVisitForCustomer,
    getBackgroundColorForAppointmentState,
    getDisplayNameForAppointmentState,
  } = useAppointmentsTableHook();
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
          {appointmentState.appointments.length !== 0 &&
            appointmentState.filteredAppointments
              .filter(
                (appointment) =>
                  appointment.appointment.status ===
                  appointmentCategoryState.selectedCategory ||
                  appointmentCategoryState.selectedCategory === "Total"
              )
              .map(
                (appointment: IDeNormalisedAppointmentData, index: number) => (
                  <TableRow key={appointment.appointment.id}>
                    <TableCell align="left">
                      <span className="appointmentTableName">
                        {appointment.appointment.isInPersonAppointment ? (
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
                        appointment.appointment.customerId
                      )}
                    </TableCell>
                    <TableCell>
                      <Typography
                        className={classes.status}
                        style={{
                          backgroundColor:
                            getBackgroundColorForAppointmentState(
                              appointment.appointment.status
                            )[0],
                          color: getBackgroundColorForAppointmentState(
                            appointment.appointment.status
                          )[1],
                        }}
                      >
                        {getDisplayNameForAppointmentState(
                          appointment.appointment.status
                        )}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      {getReadableDateString(
                        appointment.appointment.scheduledAppointmentStartTime
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
