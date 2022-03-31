import Topbar from '../Topbar/Topbar';
import { Routes, Route } from 'react-router-dom';
import AppointmentsTableView from '../Appointments/AppointmentsTableView';
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css';
import OrganisationInitialModalPickerComponent from '../OrganisationPicker/OrganisationInitialModalPickerComponent';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { GetServiceProviderBasic } from '../../service-actions/ServiceProviderBasicActions';
import AddPatientForm from '../AddPatientAndBookAppointment/AddPatientAndBookAppointmentForm';
import { Divider } from '@mui/material';
import SetTrackTrace from '../../telemetry/SetTrackTrace';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import ConsultationView from '../Consultation/ConsultationView';
import PatientsTabMainView from '../PatientsList/PatientsTabMainView';
import Calendar from '../CalendarPicker/Calendar';
import FullPageLoadingDisplay from '../UIHelperComponents/FullPageLoadingDisplay';
import NonExistentUserDisplayComponent from '../UIHelperComponents/NonExistentUserDisplayComponent';
import CriticalAlertDisplay from '../UIHelperComponents/CriticalAlertDisplay';
import { SetInitialLoadingStartTime } from '../../actions/LoadedStatesActions';
import { clearAuthToken } from '../../auth/FirebaseUserInfoHelper';
import Treatments from '../TreatmentsTab/Treatments';
import DetailedPatient from '../DetailedPatient/DetailedPatient';
import MobileDashboard from '../../mobile/MobileDashboard';
import MobileDesktopToggleView from '../MobileDesktopToggleView/MobileDesktopToggleView';

function Dashboard() {
    const dispatch = useDispatch();
    const serviceProviderBasicState = useSelector(
        (state: RootState) => state.ServiceProviderBasicState,
    );

    const isViewingImage = useSelector(
        (state: RootState) => state.UITriggerState.isViewingImage,
    );

    const treatmentsExistForPatient = useSelector(
        (state: RootState) =>
            (state.CurrentCustomerState.Treatments?.length ?? 0) > 0,
    );

    //SINCE THIS IS VERY FIRST COMPONENT LOAD. THIS IS INITIAL TRIGGER POINT
    useEffect(() => {
        console.log('hello init');
        SetTrackTrace(
            'Dashboard Mounted',
            'Dashboard',
            SeverityLevel.Information,
        );
        clearAuthToken();
        dispatch(SetInitialLoadingStartTime());
        dispatch(GetServiceProviderBasic());
    }, []);
    //END

    const isMobileCheck = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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
                            {isMobileCheck && (
                                <MobileDesktopToggleView></MobileDesktopToggleView>
                            )}
                            <h5 style={{ marginBottom: 20 }}> Appointments </h5>
                            <AppointmentsTableView />
                        </Col>
                        <Col md="3">
                            <Row>
                                <AddPatientForm></AddPatientForm>
                            </Row>
                            <Row>
                                <Divider style={{ marginBottom: 20 }}></Divider>
                            </Row>
                            <Row>
                                <Calendar />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    function PatientsView() {
        return (
            <div style={{ margin: 20 }}>
                <Container fluid>
                    <PatientsTabMainView />
                </Container>
            </div>
        );
    }

    function MainDashboardView() {
        return (
            <div>
                {!isViewingImage && <Topbar />}
                <div style={{ marginTop: 110 }}>
                    <Routes>
                        <Route
                            path="/Appointments"
                            element={AppointmentsAndCalendarView()}
                        />
                        <Route
                            path="/*"
                            element={AppointmentsAndCalendarView()}
                        />
                        <Route path="/Patients" element={PatientsView()} />
                        <Route
                            path="/Treatments"
                            element={<Treatments></Treatments>}
                        />
                        <Route
                            path="/Consultation/:id"
                            element={<ConsultationView></ConsultationView>}
                        />
                        <Route
                            path="/Patient/:id"
                            element={<DetailedPatient></DetailedPatient>}
                        />
                    </Routes>
                </div>
            </div>
        );
    }

    //MAIN RENDER FUNCTION
    return (
        <>
            <div>
                {serviceProviderBasicState.serviceProvider ? (
                    MainDashboardView()
                ) : (
                    <NonExistentUserDisplayComponent />
                )}
                <OrganisationInitialModalPickerComponent />
                <FullPageLoadingDisplay />
                <CriticalAlertDisplay />
            </div>
        </>
    );
}

export default Dashboard;
