import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Col, Container, Row } from "react-bootstrap";
import { getReadableDateAndTimeString } from "../../Utils/GeneralUtils";
import { Typography } from "@mui/material";

export default function MobileConsultationHeader() {
  const currentConsultationState = useSelector(
    (state: RootState) => state.ConsultationState
  );

  return (
    <div className="horiztontalContainer">
      <Container fluid>
        {currentConsultationState.currentCustomer && (
          <>
            <Row>
              <Col>
                <Typography style={{ fontSize: 10, opacity: 0.5 }}>
                  Patient Name
                </Typography>
                <Typography style={{ fontSize: 17 }}>
                  {currentConsultationState.currentAppointment!.customerName}
                </Typography>
              </Col>
              <Col style={{ paddingLeft: "8em" }}>
                <Typography style={{ fontSize: 10, opacity: 0.5 }}>
                  Age
                </Typography>
                <Typography style={{ fontSize: 17 }}>
                  {currentConsultationState.currentCustomer!.dateOfBirth.age ??
                    ""}
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col>
                <Typography style={{ fontSize: 10, opacity: 0.5 }}>
                  Phone Number
                </Typography>
                <Typography style={{ fontSize: 17 }}>
                  +91
                  {currentConsultationState.currentCustomer!.phoneNumbers[0]
                    .number ?? ""}
                </Typography>
              </Col>
              <Col style={{ paddingLeft: "5em" }}>
                <Typography style={{ fontSize: 10, opacity: 0.5 }}>
                  Gender
                </Typography>
                <Typography style={{ fontSize: 17 }}>
                  {currentConsultationState.currentCustomer!.gender ?? ""}
                </Typography>
              </Col>
            </Row>
            <Row>
              <Typography style={{ fontSize: 10, opacity: 0.5 }}>
                Appointment Time
              </Typography>
              <Typography style={{ fontSize: 17 }}>
                {getReadableDateAndTimeString(
                  currentConsultationState.currentAppointment
                    ?.scheduledAppointmentStartTime ?? ""
                )}
              </Typography>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
}