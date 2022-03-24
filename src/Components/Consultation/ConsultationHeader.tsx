import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Col, Container, Row } from 'react-bootstrap';
import { getReadableDateAndTimeString } from '../../Utils/GeneralUtils';
import { Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function ConsultationHeader() {
    const Spacer = require('react-spacer');

    const currentConsultation = useSelector(
        (state: RootState) => state.ConsultationState,
    );
    const currentCustomer = useSelector(
        (state: RootState) => state.CurrentCustomerState.Customer,
    );

    return (
        <div className="horiztontalContainer">
            <Container fluid>
                <Row>
                    <Col>
                        {currentCustomer && (
                            <Row
                                style={{
                                    marginRight: 20,
                                    alignItems: 'flex-end',
                                }}
                            >
                                <Col>
                                    <Spacer grow="1" />
                                </Col>
                                <Col
                                    className="col-md-auto"
                                    style={{ marginLeft: 15 }}
                                >
                                    <Typography
                                        style={{ fontSize: 10, opacity: 0.5 }}
                                    >
                                        Patient Name
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 17,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {currentConsultation.Appointment
                                            ?.customerName ??
                                            currentCustomer.firstName}
                                    </Typography>
                                </Col>
                                <Col
                                    className="col-md-auto"
                                    style={{ marginLeft: 15 }}
                                >
                                    <Typography
                                        style={{ fontSize: 10, opacity: 0.5 }}
                                    >
                                        Phone Number
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 17,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        +91
                                        {currentCustomer?.phoneNumbers[0]
                                            .number ?? ''}
                                    </Typography>
                                </Col>
                                <Col
                                    className="col-md-auto"
                                    style={{ marginLeft: 15 }}
                                >
                                    <Typography
                                        style={{ fontSize: 10, opacity: 0.5 }}
                                    >
                                        Age
                                    </Typography>
                                    <Col>
                                        <Typography style={{ fontSize: 17 }}>
                                            {currentCustomer?.dateOfBirth.age ??
                                                ''}
                                        </Typography>
                                    </Col>
                                </Col>
                                <Col
                                    className="col-md-auto"
                                    style={{ marginLeft: 15 }}
                                >
                                    <Typography
                                        style={{ fontSize: 10, opacity: 0.5 }}
                                    >
                                        Gender
                                    </Typography>
                                    <Col>
                                        <Typography style={{ fontSize: 17 }}>
                                            {currentCustomer?.gender ?? ''}
                                        </Typography>
                                    </Col>
                                </Col>
                                <Col
                                    className="col-md-auto"
                                    style={{ marginLeft: 15 }}
                                >
                                    {currentConsultation.Appointment && (
                                        <div>
                                            <Typography
                                                style={{
                                                    fontSize: 10,
                                                    opacity: 0.5,
                                                }}
                                            >
                                                Appointment Time
                                            </Typography>
                                            <Col>
                                                <Typography
                                                    style={{ fontSize: 17 }}
                                                >
                                                    {getReadableDateAndTimeString(
                                                        currentConsultation
                                                            .Appointment
                                                            ?.scheduledAppointmentStartTime ??
                                                            '',
                                                    )}{' '}
                                                </Typography>
                                            </Col>
                                        </div>
                                    )}
                                </Col>
                                <Col>
                                    <Spacer grow="1" />
                                </Col>
                            </Row>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
