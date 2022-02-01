import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Col, Container, Row } from "react-bootstrap";
import { getReadableDateAndTimeString } from "../../Utils/GeneralUtils";
import { Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { GetAppointmentForConsultation } from "../../ServiceActions/ConsultationActions";
import { Link } from "react-router-dom";

export default function PreviousAndNextConsultations() {
  const dispatch = useDispatch();
  const currentConsultationState = useSelector(
    (state: RootState) => state.ConsultationState
  );

  function getPreviousAppointmentUI() {
    return (
      <Button
        startIcon={
          <ArrowBackIcon style={{ height: 22, width: 22, color: "blue" }} />
        }
      >
        <Link
          to={
            "/Consultation/" +
            currentConsultationState.previousAppointment?.appointmentId
          }
          onClick={() =>
            dispatch(
              GetAppointmentForConsultation(
                currentConsultationState.previousAppointment?.appointmentId ??
                  ""
              )
            )
          }
        >
          <Typography
            style={{ fontSize: 13, textAlign: "left", color: "blue" }}
          >
            {currentConsultationState.previousAppointment?.customerName}
          </Typography>
          <Typography
            style={{ fontSize: 13, textAlign: "left", color: "blue" }}
          >
            {getReadableDateAndTimeString(
              currentConsultationState.previousAppointment
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
          <ArrowForwardIcon style={{ height: 22, width: 22, color: "blue" }} />
        }
      >
        <Link
          to={
            "/Consultation/" +
            currentConsultationState.nextAppointment?.appointmentId
          }
          onClick={() =>
            dispatch(
              GetAppointmentForConsultation(
                currentConsultationState.nextAppointment?.appointmentId ?? ""
              )
            )
          }
        >
          <div>
            <Typography
              style={{ fontSize: 13, textAlign: "right", color: "blue" }}
            >
              {currentConsultationState.nextAppointment?.customerName}
            </Typography>
          </div>
          <Typography
            style={{ fontSize: 13, textAlign: "right", color: "blue" }}
          >
            {getReadableDateAndTimeString(
              currentConsultationState.nextAppointment
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
            {currentConsultationState.previousAppointment &&
              getPreviousAppointmentUI()}
          </Col>
          <Col>
            {currentConsultationState.nextAppointment && getNextAppointmentUI()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
