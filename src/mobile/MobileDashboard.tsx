import { SeverityLevel } from '@microsoft/applicationinsights-web';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Home from '@mui/icons-material/Home';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { SetInitialLoadingStartTime } from '../actions/LoadedStatesActions';
import { SetSelectedDateRange } from '../actions/SelectedDateActions';
import '../App.css';
import { clearAuthToken } from '../auth/FirebaseUserInfoHelper';
import AddPatientForm from '../components/AddPatientAndBookAppointment/AddPatientAndBookAppointmentForm';
import ConsultationView from '../components/Consultation/ConsultationView';
import DetailedPatient from '../components/DetailedPatient/DetailedPatient';
import OrganisationInitialModalPickerComponent from '../components/OrganisationPicker/OrganisationInitialModalPickerComponent';
import { PatientsTableView } from '../components/PatientsList/PatientsTableView';
import CriticalAlertDisplay from '../components/UIHelperComponents/CriticalAlertDisplay';
import FullPageLoadingDisplay from '../components/UIHelperComponents/FullPageLoadingDisplay';
import NonExistentUserDisplayComponent from '../components/UIHelperComponents/NonExistentUserDisplayComponent';
import { GetServiceProviderBasic } from '../service-actions/ServiceProviderBasicActions';
import { RootState } from '../store';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import MobileAppointmentsTableView from './MobileAppointmentsTableView';
import { MobileCalendar } from './MobileCalendar';

export default function MobileDashboard() {
    const dispatch = useDispatch();
    const serviceProviderBasicState = useSelector(
        (state: RootState) => state.ServiceProviderBasicState,
    );
    useEffect(() => {
        console.log('hello init mobile');
        SetTrackTrace(
            'Dashboard Mounted',
            'Dashboard',
            SeverityLevel.Information,
        );
        clearAuthToken();
        dispatch(SetInitialLoadingStartTime());
        dispatch(GetServiceProviderBasic());
    }, [dispatch]);

    const onCalendarDateChange = (date: Date) => {
        dispatch(SetSelectedDateRange([date, date]));
    };

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
                        <Col md="3">
                            <h5 style={{ marginBottom: 20, marginTop: 30 }}>
                                Appointments
                            </h5>
                            <Row style={{ marginBottom: 20, marginTop: 30 }}>
                                <MobileCalendar
                                    onDateChange={onCalendarDateChange}
                                />
                            </Row>
                        </Col>
                        <Col md="9">
                            <MobileAppointmentsTableView />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    return (
        <div className="h-screen">
            {serviceProviderBasicState.serviceProvider ? (
                <Box>
                    <CssBaseline />
                    <div>
                        <Routes>
                            <Route
                                path="/Appointments"
                                element={AppointmentsAndCalendarView()}
                            />
                            <Route
                                path="/"
                                element={AppointmentsAndCalendarView()}
                            />
                            <Route
                                path="/Patients"
                                element={
                                    <div className="p-4">
                                        <PatientsTableView
                                            setIsSchedulingAppointment={null}
                                        />
                                    </div>
                                }
                            />
                            <Route
                                path="/AddOrBook"
                                element={
                                    <div className="p-4">
                                        <AddPatientForm />
                                    </div>
                                }
                            />
                            <Route
                                path="/Consultation/:id"
                                element={<ConsultationView />}
                            />
                            <Route
                                path="/Patient/:id"
                                element={<DetailedPatient />}
                            />
                        </Routes>
                    </div>

                    <Paper
                        className="fixed bottom-0 flex w-full justify-between px-4"
                        elevation={3}
                    >
                        <Link
                            to={'/Appointments'}
                            style={{
                                color: 'black',
                                fontSize: 18,
                                fontWeight: '600',
                                textDecoration: 'none',
                            }}
                        >
                            <div className="flex flex-column justify-content-center align-items-center">
                                <Home color="primary" />
                                <div className="text-[#1976D2]">
                                    Appointments
                                </div>
                            </div>
                        </Link>
                        <Link
                            to={'/AddOrBook'}
                            style={{
                                color: 'black',
                                fontSize: 18,
                                fontWeight: '600',
                                textDecoration: 'none',
                            }}
                        >
                            <div className="flex flex-column justify-content-center align-items-center">
                                <AddBoxIcon color="primary" />
                                <div className="text-[#1976D2]">Add</div>
                            </div>
                        </Link>
                        <Link
                            to={'/Patients'}
                            style={{
                                color: 'black',
                                fontSize: 18,
                                fontWeight: '600',
                                textDecoration: 'none',
                            }}
                        >
                            <div className="flex flex-column justify-content-center align-items-center">
                                <PeopleAlt color="primary" />
                                <div className="text-[#1976D2]">Patients</div>
                            </div>
                        </Link>
                    </Paper>
                </Box>
            ) : (
                <NonExistentUserDisplayComponent />
            )}
            <OrganisationInitialModalPickerComponent />
            <FullPageLoadingDisplay />
            <CriticalAlertDisplay />
        </div>
    );
}
