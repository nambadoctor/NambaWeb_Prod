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

    const Spacer = require('react-spacer')

    const dispatch = useDispatch()
    const currentConsultationState = useSelector((state: RootState) => state.ConsultationState)

    function getPreviousAppointmentUI() {
        return (
            <div onClick={() => dispatch(GetAppointmentForConsultation(currentConsultationState.previousAppointment?.appointmentId ?? ""))}>
                <ArrowBackIcon style={{ height: 22, width: 22, color: 'blue' }}></ArrowBackIcon>
                <Typography style={{ fontSize: 13, textAlign: 'left', color: 'blue' }}>{currentConsultationState.previousAppointment?.customerName}</Typography>
                <Typography style={{ fontSize: 13, textAlign: 'left', color: 'blue' }}>{getReadableDateAndTimeString(currentConsultationState.previousAppointment?.scheduledAppointmentStartTime ?? "")}</Typography>
            </div>
        );
    }

    function getNextAppointmentUI() {
        return (
            <div onClick={() => dispatch(GetAppointmentForConsultation(currentConsultationState.nextAppointment?.appointmentId ?? ""))}>
                <ArrowForwardIcon style={{ height: 22, width: 22, color:'blue' }}></ArrowForwardIcon>
                <Typography style={{ fontSize: 13, textAlign: 'right', color: 'blue' }}>{currentConsultationState.nextAppointment?.customerName}</Typography>
                <Typography style={{ fontSize: 13, textAlign: 'right', color: 'blue' }}>{getReadableDateAndTimeString(currentConsultationState.nextAppointment?.scheduledAppointmentStartTime ?? "")}</Typography>
            </div>
        );
    }

    return (
        <div className="horiztontalContainer" >
            <Container fluid>
                <Row style={{ alignItems: "flex-end" }}>
                    <Col className="col-md-1">{currentConsultationState.previousAppointment && getPreviousAppointmentUI()}</Col>
                    <Col className="col-md-10">
                        <Row style={{ marginRight: 20, alignItems: "flex-end" }}>
                            <Col>
                                <Spacer grow='1' />
                            </Col>
                            <Col className="col-md-2">
                                <Typography style={{ fontSize: 10, opacity: 0.5 }}>Patient Name</Typography>
                                <Typography style={{ fontSize: 25 }}>{currentConsultationState.currentAppointment?.customerName}</Typography>
                            </Col>
                            <Col className="col-md-2">
                                <Typography style={{ fontSize: 10, opacity: 0.5 }}>Phone Number</Typography>
                                <Typography style={{ fontSize: 17 }}>+917530043008</Typography>
                            </Col>
                            <Col className="col-md-2">
                                <Typography style={{ fontSize: 10, opacity: 0.5 }}>Age / Gender</Typography>
                                <Col><Typography style={{ fontSize: 17 }}>25 / Male</Typography></Col>
                            </Col>
                            <Col className="col-md-2">
                                <Typography style={{ fontSize: 10, opacity: 0.5 }}>Appointment Time</Typography>
                                <Col><Typography style={{ fontSize: 17 }}>{getReadableDateAndTimeString(currentConsultationState.currentAppointment?.scheduledAppointmentStartTime ?? "")} </Typography></Col>
                            </Col>
                            <Col><Spacer grow='1' /></Col>
                        </Row>
                    </Col>
                    <Col className="col-md-1">{currentConsultationState.nextAppointment && getNextAppointmentUI()}</Col>
                </Row>
            </Container>
        </div>
    );
}