import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import MobileAppointmentsTableView from './MobileAppointmentsTableView';
import { Container, Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import MobileDesktopToggleView from '../components/MobileDesktopToggleView/MobileDesktopToggleView';
import { Routes, Route, Link } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import '../App.css';
import ConsultationView from '../components/Consultation/ConsultationView';
import { PatientsTableView } from '../components/PatientsList/PatientsTableView';

export default function FixedBottomNavigation() {
    function AppointmentsAndCalendarView() {
        return (
            <div
                style={{
                    margin: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}
            >
                <Container fluid>
                    <Row>
                        <Col md="9">
                            <MobileDesktopToggleView></MobileDesktopToggleView>
                            <h5 style={{ marginBottom: 20 }}>Appointments</h5>
                            <MobileAppointmentsTableView />
                        </Col>
                        <Col md="3">
                            <h5 style={{ marginBottom: 20 }}>Calendar</h5>
                            <Row>
                                <Calendar />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <div style={{ marginBottom: 200 }}>
                <Routes>
                    <Route
                        path="/Appointments"
                        element={AppointmentsAndCalendarView()}
                    />
                    <Route path="/" element={AppointmentsAndCalendarView()} />
                    <Route
                        path="/Patients"
                        element={<PatientsTableView setIsSchedulingAppointment={null}></PatientsTableView>}
                    />
                    <Route
                        path="/AddOrBook"
                        element={AppointmentsAndCalendarView()}
                    />
                    <Route
                        path="/Consultation/:id"
                        element={<ConsultationView></ConsultationView>}
                    />
                </Routes>
            </div>

            <Paper
                sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    // value={value}
                    // onChange={(_event, newValue) => {
                    //     setValue(newValue);
                    // }}
                >
                    <Link
                        to={'/Appointments'}
                        style={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: '600',
                            marginLeft: 20,
                            marginRight: 40,
                            textDecoration: 'none',
                        }}
                    >
                        <div className="row d-flex flex-column justify-content-center align-items-center">
                            <AcUnitIcon />
                            <div>Appointments</div>
                        </div>
                    </Link>
                    <Link
                        to={'/Patients'}
                        style={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: '600',
                            marginLeft: 20,
                            marginRight: 40,
                            textDecoration: 'none',
                        }}
                    >
                        <div className="row d-flex flex-column justify-content-center align-items-center">
                            <AcUnitIcon />
                            <div>Patients</div>
                        </div>
                    </Link>
                    <Link
                        to={'/'}
                        style={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: '600',
                            marginLeft: 20,
                            marginRight: 40,
                            textDecoration: 'none',
                        }}
                    >
                        <div className="row d-flex flex-column justify-content-center align-items-center">
                            <AcUnitIcon />
                            <div>Add</div>
                        </div>
                    </Link>
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
