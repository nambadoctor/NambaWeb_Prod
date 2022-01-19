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
import { Link } from "react-router-dom";


export default function ConsultationHeader() {

    const Spacer = require('react-spacer')

    const dispatch = useDispatch()
    const currentConsultationState = useSelector((state: RootState) => state.ConsultationState)

    function getPreviousAppointmentUI() {
        return (
            <Link
                to={"/Consultation/" + currentConsultationState.previousAppointment?.appointmentId}
                onClick={() => dispatch(GetAppointmentForConsultation(currentConsultationState.previousAppointment?.appointmentId ?? ""))}>
                <ArrowBackIcon style={{ height: 22, width: 22, color: 'blue' }}></ArrowBackIcon>
                <Typography style={{ fontSize: 13, textAlign: 'left', color: 'blue' }}>{currentConsultationState.previousAppointment?.customerName}</Typography>
                <Typography style={{ fontSize: 13, textAlign: 'left', color: 'blue' }}>{getReadableDateAndTimeString(currentConsultationState.previousAppointment?.scheduledAppointmentStartTime ?? "")}</Typography>
            </Link>
        );
    }

    function getNextAppointmentUI() {
        return (
            <Link
                to={"/Consultation/" + currentConsultationState.nextAppointment?.appointmentId}
                onClick={() => dispatch(GetAppointmentForConsultation(currentConsultationState.nextAppointment?.appointmentId ?? ""))}>
                <ArrowForwardIcon style={{ height: 22, width: 22, color: 'blue' }}></ArrowForwardIcon>
                <Typography style={{ fontSize: 13, textAlign: 'right', color: 'blue' }}>{currentConsultationState.nextAppointment?.customerName}</Typography>
                <Typography style={{ fontSize: 13, textAlign: 'right', color: 'blue' }}>{getReadableDateAndTimeString(currentConsultationState.nextAppointment?.scheduledAppointmentStartTime ?? "")}</Typography>
            </Link>
        );
    }

    return (
        <div className="horiztontalContainer" >
            <Container fluid>
                <Row style={{ alignItems: "flex-end" }}>
                    <Col className="col-md-1">{currentConsultationState.previousAppointment && getPreviousAppointmentUI()}</Col>
                    <Col className="col-md-10">
                        {currentConsultationState.currentCustomer &&
                            <Row style={{ marginRight: 20, alignItems: "flex-end" }}>
                                <Col>
                                    <Spacer grow='1' />
                                </Col>
                                <Col className="col-md-auto" style={{ marginLeft: 15 }}>
                                    <Typography style={{ fontSize: 10, opacity: 0.5 }}>Patient Name</Typography>
                                    <Typography style={{ fontSize: 17 }}>{currentConsultationState.currentAppointment!.customerName}</Typography>
                                </Col>
                                <Col className="col-md-auto" style={{ marginLeft: 15 }}>
                                    <Typography style={{ fontSize: 10, opacity: 0.5 }}>Phone Number</Typography>
                                    <Typography style={{ fontSize: 17 }}>+91{currentConsultationState.currentCustomer!.phoneNumbers[0].number ?? ""}</Typography>
                                </Col>
                                <Col className="col-md-auto" style={{ marginLeft: 15 }}>
                                    <Typography style={{ fontSize: 10, opacity: 0.5 }}>Age</Typography>
                                    <Col><Typography style={{ fontSize: 17 }}>{currentConsultationState.currentCustomer!.dateOfBirth.age ?? ""}</Typography></Col>
                                </Col>
                                <Col className="col-md-auto" style={{ marginLeft: 15 }}>
                                    <Typography style={{ fontSize: 10, opacity: 0.5 }}>Gender</Typography>
                                    <Col><Typography style={{ fontSize: 17 }}>{currentConsultationState.currentCustomer!.gender ?? ""}</Typography></Col>
                                </Col>
                                <Col className="col-md-auto" style={{ marginLeft: 15 }}>
                                    <Typography style={{ fontSize: 10, opacity: 0.5 }}>Appointment Time</Typography>
                                    <Col><Typography style={{ fontSize: 17 }}>{getReadableDateAndTimeString(currentConsultationState.currentAppointment?.scheduledAppointmentStartTime ?? "")} </Typography></Col>
                                </Col>
                                <Col><Spacer grow='1' /></Col>
                            </Row>}
                    </Col>
                    <Col className="col-md-1">{currentConsultationState.nextAppointment && getNextAppointmentUI()}</Col>
                </Row>
            </Container>
        </div>
    );
}