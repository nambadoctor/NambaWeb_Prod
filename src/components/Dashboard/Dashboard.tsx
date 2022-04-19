import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { Divider } from '@mui/material';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SetInitialLoadingStartTime } from '../../actions/LoadedStatesActions';
import '../../App.css';
import { clearAuthToken } from '../../auth/FirebaseUserInfoHelper';
import { GetServiceProviderBasic } from '../../service-actions/ServiceProviderBasicActions';
import { RootState } from '../../store';
import SetTrackTrace from '../../telemetry/SetTrackTrace';
import AddPatientForm from '../AddPatientAndBookAppointment/AddPatientAndBookAppointmentForm';
import AppointmentsTableView from '../Appointments/AppointmentsTableView';
import Calendar from '../CalendarPicker/Calendar';
import ConsultationView from '../Consultation/ConsultationView';
import DetailedPatient from '../DetailedPatient/DetailedPatient';
import MobileDesktopToggleView from '../MobileDesktopToggleView/MobileDesktopToggleView';
import OrganisationInitialModalPickerComponent from '../OrganisationPicker/OrganisationInitialModalPickerComponent';
import PatientsTabMainView from '../PatientsList/PatientsTabMainView';
import Topbar from '../Topbar/Topbar';
import Treatments from '../TreatmentsTab/Treatments';
import CriticalAlertDisplay from '../UIHelperComponents/CriticalAlertDisplay';
import FullPageLoadingDisplay from '../UIHelperComponents/FullPageLoadingDisplay';
import NonExistentUserDisplayComponent from '../UIHelperComponents/NonExistentUserDisplayComponent';

function Dashboard() {
    const dispatch = useDispatch();
    const serviceProviderBasicState = useSelector(
        (state: RootState) => state.ServiceProviderBasicState,
    );

    const isViewingImage = useSelector(
        (state: RootState) => state.UITriggerState.isViewingImage,
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
    }, [dispatch]);
    //END

    const isMobileCheck = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    function AppointmentsAndCalendarView() {
        return (
            <div className="flex lg:flex-row flex-col justify-center lg:px-4 px-8 lg:gap-24 gap-8">
                <div>
                    {isMobileCheck && <MobileDesktopToggleView />}
                    <span className="font-bold mb-5 text-lg">Appointments</span>
                    <div className="mt-4 lg:min-w-[800px]">
                        <AppointmentsTableView />
                    </div>
                </div>
                <div className="flex flex-col max-w-sm">
                    <AddPatientForm />
                    <Divider style={{ marginBottom: 20 }}></Divider>
                    <Calendar />
                </div>
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
