import { Routes, Route } from "react-router-dom";
import AppointmentsTableView from "../Appointments/AppointmentsTableView";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import OrganisationInitialModalPickerComponent from "../OrganisationPicker/OrganisationInitialModalPickerComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import { GetServiceProviderBasic } from "../../ServiceActions/ServiceProviderBasicActions";
import SetTrackTrace from "../../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import Calendar from "../CalendarPicker/Calendar";
import FullPageLoadingDisplay from "../UIHelperComponents/FullPageLoadingDisplay";
import NonExistentUserDisplayComponent from "../UIHelperComponents/NonExistentUserDisplayComponent";
import CriticalAlertDisplay from "../UIHelperComponents/CriticalAlertDisplay";
import { SetInitialLoadingStartTime } from "../../Actions/LoadedStatesActions";
import NavBar from "./NavBar";
import MobileConsultationView from "./MobileConsultationView";

function MobileDashboard() {
  const dispatch = useDispatch();
  const serviceProviderBasicState = useSelector(
    (state: RootState) => state.ServiceProviderBasicState
  );

  //SINCE THIS IS VERY FIRST COMPONENT LOAD. THIS IS INITIAL TRIGGER POINT
  useEffect(() => {
    SetTrackTrace("Dashboard Mounted", "Dashboard", SeverityLevel.Information);
    dispatch(SetInitialLoadingStartTime());
    dispatch(GetServiceProviderBasic());
  }, []);
  //END

  function AppointmentsAndCalendarView() {
    return (
      <div
        style={{ margin: 20, display: "flex", flexDirection: "row", gap: 20 }}
      >
        <Container fluid>
          <Row>
            <Col md="9">
              <h5 style={{ marginBottom: 20 }}>Appointments</h5>
              <AppointmentsTableView />
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

  function MainDashboardView() {
    return (
      <div>
        <NavBar />
        <div style={{ marginTop: 110 }}>
          <Routes>
            <Route
              path="/Appointments"
              element={AppointmentsAndCalendarView()}
            />
            <Route path="/" element={AppointmentsAndCalendarView()} />
            <Route
              path="/Consultation/:id"
              element={<MobileConsultationView />}
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

export default MobileDashboard;
