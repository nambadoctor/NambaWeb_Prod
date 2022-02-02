import "../../App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Col, Container, Row } from "react-bootstrap";
import { getReadableDateAndTimeString } from "../../Utils/GeneralUtils";
import { Button, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import { GetAppointment } from "../../ServiceActions/AppointmentActions";


export default function ConsultationHeader() {

    const Spacer = require('react-spacer')

    const dispatch = useDispatch()
    const currentConsultation = useSelector((state: RootState) => state.ConsultationState)
    const currentCustomer = useSelector((state: RootState) => state.CurrentCustomerState.currentCustomer)

    function getPreviousAppointmentUI() {
        return (
            <Button startIcon={<ArrowBackIcon style={{ height: 22, width: 22, color: 'blue' }}></ArrowBackIcon>}>
                <Link
                    to={"/Consultation/" + currentConsultation.previousAppointment?.appointmentId}
                    onClick={() => dispatch(GetAppointment(currentConsultation.previousAppointment?.appointmentId ?? ""))}>

                    <Typography style={{ fontSize: 13, textAlign: 'left', color: 'blue' }}>{currentConsultation.previousAppointment?.customerName}</Typography>
                    <Typography style={{ fontSize: 13, textAlign: 'left', color: 'blue' }}>{getReadableDateAndTimeString(currentConsultation.previousAppointment?.scheduledAppointmentStartTime ?? "")}</Typography>
                </Link>
            </Button>
        );
    }

    function getNextAppointmentUI() {
        return (
            <Button endIcon={<ArrowForwardIcon style={{ height: 22, width: 22, color: 'blue' }}></ArrowForwardIcon>}>
                <Link
                    to={"/Consultation/" + currentConsultation.nextAppointment?.appointmentId}
                    onClick={() => dispatch(GetAppointment(currentConsultation.nextAppointment?.appointmentId ?? ""))}>
                    <div>
                        <Typography style={{ fontSize: 13, textAlign: 'right', color: 'blue' }}>{currentConsultation.nextAppointment?.customerName}</Typography>
                    </div>
                    <Typography style={{ fontSize: 13, textAlign: 'right', color: 'blue' }}>{getReadableDateAndTimeString(currentConsultation.nextAppointment?.scheduledAppointmentStartTime ?? "")}</Typography>
                </Link>
            </Button>
        );
    }

    return (
        <div className="horiztontalContainer" >
            <Container fluid>
                <Row style={{ alignItems: "flex-end" }}>
                    <Col className="col-md-1">{currentConsultation.previousAppointment && getPreviousAppointmentUI()}</Col>
                    <Col className="col-md-10">
                        {currentCustomer &&
                            <Row style={{ marginRight: 20, alignItems: "flex-end" }}>
                                <Col>
                                    <Spacer grow='1' />
                                </Col>
                                <Col className="col-md-auto" style={{ marginLeft: 15 }}>
                                    <Typography style={{ fontSize: 10, opacity: 0.5 }}>Patient Name</Typography>
                                    <Typography style={{ fontSize: 17 }}>{currentConsultation.Appointment!.customerName}</Typography>
                                </Col>
                                <Col className="col-md-auto" style={{ marginLeft: 15 }}>
                                    <Typography style={{ fontSize: 10, opacity: 0.5 }}>Phone Number</Typography>
                                    <Typography style={{ fontSize: 17 }}>+91{currentCustomer!.phoneNumbers[0].number ?? ""}</Typography>
                                </Col>
                                <Col className="col-md-auto" style={{ marginLeft: 15 }}>
                                    <Typography style={{ fontSize: 10, opacity: 0.5 }}>Age</Typography>
                                    <Col><Typography style={{ fontSize: 17 }}>{currentCustomer!.dateOfBirth.age ?? ""}</Typography></Col>
                                </Col>
                                <Col className="col-md-auto" style={{ marginLeft: 15 }}>
                                    <Typography style={{ fontSize: 10, opacity: 0.5 }}>Gender</Typography>
                                    <Col><Typography style={{ fontSize: 17 }}>{currentCustomer!.gender ?? ""}</Typography></Col>
                                </Col>
                                <Col className="col-md-auto" style={{ marginLeft: 15 }}>
                                    <Typography style={{ fontSize: 10, opacity: 0.5 }}>Appointment Time</Typography>
                                    <Col><Typography style={{ fontSize: 17 }}>{getReadableDateAndTimeString(currentConsultation.Appointment?.scheduledAppointmentStartTime ?? "")} </Typography></Col>
                                </Col>
                                <Col><Spacer grow='1' /></Col>
                            </Row>}
                    </Col>
                    <Col className="col-md-1">{currentConsultation.nextAppointment && getNextAppointmentUI()}</Col>
                </Row>
            </Container>
        </div>
    );
}