import "../../App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Col, Container, Row } from "react-bootstrap";
import { getReadableDateAndTimeString } from "../../Utils/GeneralUtils";
import { Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { GetAppointmentForConsultation } from "../../Actions/ConsultationActions";

export default function ConsultationHeader() {

    const dispatch = useDispatch()
    const currentConsultationState = useSelector((state: RootState) => state.ConsultationState)

    function getPreviousAppointmentUI() {
        return (
            <div onClick={() => dispatch(GetAppointmentForConsultation(currentConsultationState.previousAppointment?.appointmentId ?? ""))}>
                <ArrowBackIcon></ArrowBackIcon>
                <Typography style={{ fontSize: 15 }}>{currentConsultationState.previousAppointment?.customerName}</Typography>
                <Typography style={{ fontSize: 15 }}>{getReadableDateAndTimeString(currentConsultationState.previousAppointment?.scheduledAppointmentStartTime ?? "")}</Typography>
            </div>
        );
    }

    function getNextAppointmentUI() {
        return (
            <div onClick={() => dispatch(GetAppointmentForConsultation(currentConsultationState.nextAppointment?.appointmentId ?? ""))}>
                <ArrowForwardIcon></ArrowForwardIcon>
                <Typography style={{ fontSize: 15 }}>{currentConsultationState.nextAppointment?.customerName}</Typography>
                <Typography style={{ fontSize: 15 }}>{getReadableDateAndTimeString(currentConsultationState.nextAppointment?.scheduledAppointmentStartTime ?? "")}</Typography>
            </div>
        );
    }

    return (
        <div className="horiztontalContainer" >
            <Container fluid>
                <Row>
                    <Col className="col-md-1">{currentConsultationState.previousAppointment && getPreviousAppointmentUI()}</Col>
                    <Col className="col-md-9">
                        <Row style={{ marginRight: 20, alignItems: "baseline" }}>
                            <Col><h1>{currentConsultationState.currentAppointment?.customerName}</h1></Col>
                            <Col className="col-md-auto">
                                <Typography style={{ fontSize: 10, opacity: 0.5 }}>Phone Number</Typography>
                                <Typography style={{ fontSize: 17 }}>+917530043008</Typography>
                            </Col>

                            <Col className="col-md-auto">
                                <Typography style={{ fontSize: 10, opacity: 0.5 }}>Age / Gender</Typography>
                                <Col className="col-md-auto"><Typography style={{ fontSize: 17 }}>25 / Male</Typography></Col>
                            </Col>

                            <Col className="col-md-auto">
                                <Typography style={{ fontSize: 10, opacity: 0.5 }}>Appointment Time</Typography>
                                <Col className="col-md-auto"><Typography style={{ fontSize: 17 }}>{getReadableDateAndTimeString(currentConsultationState.currentAppointment?.scheduledAppointmentStartTime ?? "")} </Typography></Col>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-md-1">{currentConsultationState.nextAppointment && getNextAppointmentUI()}</Col>
                </Row>
            </Container>
        </div>
    );
}