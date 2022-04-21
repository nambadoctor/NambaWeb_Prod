import { SeverityLevel } from '@microsoft/applicationinsights-web';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccountBox from '@mui/icons-material/AccountBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { SetInitialLoadingStartTime } from '../actions/LoadedStatesActions';
import { SetSelectedDateRange } from '../actions/SelectedDateActions';
import '../App.css';
import { clearAuthToken } from '../auth/FirebaseUserInfoHelper';
import AddPatientForm from '../components/AddPatientAndBookAppointment/AddPatientAndBookAppointmentForm';
import AppointmentsTableView from '../components/Appointments/AppointmentsTableView';
import ConsultationView from '../components/Consultation/ConsultationView';
import DetailedPatient from '../components/DetailedPatient/DetailedPatient';
import OrganisationInitialModalPickerComponent from '../components/OrganisationPicker/OrganisationInitialModalPickerComponent';
import { PatientAddEdit } from '../components/PatientsList/PatientAddEdit';
import { PatientsTableView } from '../components/PatientsList/PatientsTableView';
import CriticalAlertDisplay from '../components/UIHelperComponents/CriticalAlertDisplay';
import FullPageLoadingDisplay from '../components/UIHelperComponents/FullPageLoadingDisplay';
import NonExistentUserDisplayComponent from '../components/UIHelperComponents/NonExistentUserDisplayComponent';
import { GetServiceProviderBasic } from '../service-actions/ServiceProviderBasicActions';
import { RootState } from '../store';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { MobileCalendar } from './MobileCalendar';
import { ProfilePage } from './ProfilePage';

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
            <div className="flex flex-col justify-center items-center my-3 mx-2 gap-3">
                <span className="text-xl font-bold mb-4">Appointments</span>
                <MobileCalendar onDateChange={onCalendarDateChange} />
                <AppointmentsTableView />
            </div>
        );
    }

    return (
        <div className="h-screen">
            {serviceProviderBasicState.serviceProvider ? (
                <Box>
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
                                    <div className="p-4 mb-28">
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
                                path="/EditPatient"
                                element={
                                    <div className="p-4">
                                        <PatientAddEdit
                                            isSchedulingAppointment={false}
                                        />
                                    </div>
                                }
                            />
                            <Route
                                path="/Consultation/:id"
                                element={
                                    <div className="mb-28">
                                        <ConsultationView />
                                    </div>
                                }
                            />
                            <Route
                                path="/Patient/:id"
                                element={
                                    <div className="mb-28">
                                        <DetailedPatient />
                                    </div>
                                }
                            />
                            <Route
                                path="/Profile"
                                element={
                                    <div className="mb-20">
                                        <ProfilePage />
                                    </div>
                                }
                            />
                        </Routes>
                    </div>

                    <Paper
                        className="fixed bottom-0 flex w-full justify-between px-4"
                        elevation={3}
                    >
                        <Link
                            className="text-black text-sm font-bold decoration-white py-2"
                            to={'/Appointments'}
                        >
                            <div className="flex flex-column justify-content-center align-items-center">
                                <AccessTimeFilledIcon color="primary" />
                                <div className="text-[#1976D2]">
                                    Appointments
                                </div>
                            </div>
                        </Link>
                        <Link
                            to={'/AddOrBook'}
                            className="text-black text-sm font-bold decoration-white py-2"
                        >
                            <div className="flex flex-column justify-content-center align-items-center">
                                <AddBoxIcon color="primary" />
                                <div className="text-[#1976D2]">Add</div>
                            </div>
                        </Link>
                        <Link
                            to={'/Patients'}
                            className="text-black text-sm font-bold decoration-white py-2"
                        >
                            <div className="flex flex-column justify-content-center align-items-center">
                                <PeopleAlt color="primary" />
                                <div className="text-[#1976D2]">Patients</div>
                            </div>
                        </Link>
                        <Link
                            to={'/Profile'}
                            className="text-black text-sm font-bold decoration-white py-2"
                        >
                            <div className="flex flex-column justify-content-center align-items-center">
                                <AccountBox color="primary" />
                                <div className="text-[#1976D2]">Profile</div>
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
