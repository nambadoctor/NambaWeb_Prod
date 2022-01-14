import Topbar from "../Topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import AppointmentsTableView from "../Appointments/AppointmentsTableView";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css"
import OrganisationInitialModalPickerComponent from "../OrganisationPicker/OrganisationInitialModalPickerComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import { GetServiceProviderBasic } from "../../Actions/ServiceProviderBasicActions";
import AddPatientForm from "../AddPatientAndBookAppointment/AddPatientAndBookAppointmentForm";
import { Divider } from '@mui/material';
import SetTrackTrace from "../../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import ConsultationView from "../Consultation/ConsultationView";
import PatientsTabMainView from "../PatientsList/PatientsTabMainView";
import Calendar from "../CalendarPicker/Calendar";
import FullPageLoadingDisplay from "../UIHelperComponents/FullPageLoadingDisplay";
import NonExistentUserDisplayComponent from "../UIHelperComponents/NonExistentUserDisplayComponent";
import CriticalAlertDisplay from "../UIHelperComponents/CriticalAlertDisplay";

function Dashboard() {

  const dispatch = useDispatch();
  const serviceProviderBasicState = useSelector((state: RootState) => state.ServiceProviderBasicState)

  //SINCE THIS IS VERY FIRST COMPONENT LOAD. THIS IS INITIAL TRIGGER POINT
  useEffect(() => {

    SetTrackTrace("Dashboard Mounted", "Dashboard", SeverityLevel.Information);

    dispatch(GetServiceProviderBasic());
  }, [])
  //END

  function AppointmentsAndCalendarView() {
    return (
      <div
        style={{ margin: 20, display: "flex", flexDirection: "row", gap: 20 }}
      >
        <Container fluid>
          <Row>
            <Col md="9">
              <AppointmentsTableView />
            </Col>
            <Col md="3">
              <Row><Calendar /></Row>
              <Row><Divider style={{ marginTop: 20 }}></Divider></Row>
              <Row><AddPatientForm></AddPatientForm></Row>
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
        <Topbar />
        <div style={{ marginTop: 110 }}>
          <Routes>
            <Route path="/Appointments" element={AppointmentsAndCalendarView()} />
            <Route path="/" element={AppointmentsAndCalendarView()} />
            <Route path="/Patients" element={PatientsView()} />
            <Route path="/Consultation/:id" element={<ConsultationView></ConsultationView>} />
          </Routes>
        </div>
      </div>
    );
  }

  //MAIN RENDER FUNCTION
  return (
    <>
      <div>
        {serviceProviderBasicState.serviceProvider ? MainDashboardView() : <NonExistentUserDisplayComponent />}
        <OrganisationInitialModalPickerComponent />
        <FullPageLoadingDisplay />
        <CriticalAlertDisplay />
      </div>
    </>
  );
}

export default Dashboard;
