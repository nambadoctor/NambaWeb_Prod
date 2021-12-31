import DatePickerComponent from "../../Components/CalendarPicker/DatePickerComponent";
import Topbar from "../Topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import PatientsTableView from "../PatientsList/PatientsTableView";
import AppointmentsTableView from "../Appointments/AppointmentsTableView";
import { Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  function AppointmentsAndCalendarComp() {
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
              <DatePickerComponent />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  function PatientsViewComp() {
    return (
      <div style={{ margin: 20 }}>
        <Container fluid>
          <PatientsTableView />
        </Container>
      </div>
    );
  }

  return (
    <>
      <div>
        <Topbar />
        <div style={{ marginTop: 100 }}>
          <Routes>
            <Route
              path="/Appointments"
              element={AppointmentsAndCalendarComp()}
            />
            <Route path="/Patients" element={PatientsViewComp()} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
