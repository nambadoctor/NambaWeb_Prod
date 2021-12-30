import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetUserType } from "../../Actions/Common/GetUserTypeActions";
import DatePickerComponent from "../../Components/CalendarPicker/DatePickerComponent"
import Topbar from "../Topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import PatientsTableView from "../PatientsList/PatientsTableView";
import AppointmentsTableView from "../Appointments/AppointmentsTableView";
import { Container, Row, Col } from 'react-bootstrap'

function Dashboard() {
  const dispatch = useDispatch();

  const getUserType = () => {
    dispatch(GetUserType())
  }

  useEffect(() => {
    getUserType()
  }, [])

  function AppointmentsAndCalendarComp() {
    return <div style={{ margin: 20, display: 'flex', flexDirection: 'row', gap: 20 }}>
      <AppointmentsTableView></AppointmentsTableView>
      <DatePickerComponent></DatePickerComponent>
    </div>
  }

  function PatientsViewComp() {
    return <div style={{ margin: 20 }}>
      <PatientsTableView></PatientsTableView>
    </div>
  }

  return (
    <>
      <div>
        <Topbar />

        <div style={{marginTop:100}}>
          <Routes>
            <Route path="/Appointments" element={AppointmentsAndCalendarComp()} />
            <Route path="/Patients" element={PatientsViewComp()} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;