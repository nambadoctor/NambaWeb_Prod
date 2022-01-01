import DatePickerComponent from "../../Components/CalendarPicker/DatePickerComponent";
import Topbar from "../Topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import PatientsTableView from "../PatientsList/PatientsTableView";
import AppointmentsTableView from "../Appointments/AppointmentsTableView";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css"
import useServiceProviderBasicHook from "../../CustomHooks/useGetUserTypeHook";
import OrganisationInitialModalPickerComponent from "../OrganisationPicker/OrganisationInitialModalPickerComponent";

function Dashboard() {

  const { serviceProviderBasicState } = useServiceProviderBasicHook();

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
              <Row><DatePickerComponent /></Row>
              {/* <Row><PhoneNumberEntryView /></Row> */}
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
          <PatientsTableView />
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
            <Route
              path="/Appointments"
              element={AppointmentsAndCalendarView()}
            />
            <Route path="/Patients" element={PatientsView()} />
          </Routes>
        </div>
      </div>
    );
  }

  //MAIN RENDER FUNCTION
  return (
    <>
      <div>
        {serviceProviderBasicState.serviceProvider ? MainDashboardView() : <div>TODO: Handle Non Existent User</div>}
        <OrganisationInitialModalPickerComponent/>
      </div>
    </>
  );
}

export default Dashboard;
