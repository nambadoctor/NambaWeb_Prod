import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Col, Container, Row } from "react-bootstrap";
import { getReadableDateAndTimeString } from "../../Utils/GeneralUtils";
import { Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { GetAppointment } from "../../ServiceActions/AppointmentActions";
import { Link } from "react-router-dom";

export default function PreviousAndNextConsultations() {
  const dispatch = useDispatch();
  const currentConsultation = useSelector(
    (state: RootState) => state.ConsultationState
  );

  function getPreviousAppointmentUI() {
    return (
      <Button
        startIcon={
          <ArrowBackIcon
            style={{ height: 22, width: 22, color: "blue" }}
          ></ArrowBackIcon>
        }
      >
        <Link
          to={
            "/Consultation/" +
            currentConsultation.previousAppointment?.appointmentId
          }
          onClick={() =>
            dispatch(
              GetAppointment(
                currentConsultation.previousAppointment?.appointmentId ?? ""
              )
            )
          }
        >
          <Typography
            style={{ fontSize: 13, textAlign: "left", color: "blue" }}
          >
            {currentConsultation.previousAppointment?.customerName}
          </Typography>
          <Typography
            style={{ fontSize: 13, textAlign: "left", color: "blue" }}
          >
            {getReadableDateAndTimeString(
              currentConsultation.previousAppointment
                ?.scheduledAppointmentStartTime ?? ""
            )}
          </Typography>
        </Link>
      </Button>
    );
  }

  function getNextAppointmentUI() {
    return (
      <Button
        endIcon={
          <ArrowForwardIcon
            style={{ height: 22, width: 22, color: "blue" }}
          ></ArrowForwardIcon>
        }
      >
        <Link
          to={
            "/Consultation/" +
            currentConsultation.nextAppointment?.appointmentId
          }
          onClick={() =>
            dispatch(
              GetAppointment(
                currentConsultation.nextAppointment?.appointmentId ?? ""
              )
            )
          }
        >
          <div>
            <Typography
              style={{ fontSize: 13, textAlign: "right", color: "blue" }}
            >
              {currentConsultation.nextAppointment?.customerName}
            </Typography>
          </div>
          <Typography
            style={{ fontSize: 13, textAlign: "right", color: "blue" }}
          >
            {getReadableDateAndTimeString(
              currentConsultation.nextAppointment
                ?.scheduledAppointmentStartTime ?? ""
            )}
          </Typography>
        </Link>
      </Button>
    );
  }

  return (
    <div className="horiztontalContainer">
      <Container fluid>
        <Row>
          <Col>
            {currentConsultation.previousAppointment &&
              getPreviousAppointmentUI()}
          </Col>
          <Col>
            {currentConsultation.nextAppointment && getNextAppointmentUI()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
