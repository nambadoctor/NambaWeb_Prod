import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetUserType } from "../../Actions/Common/GetUserTypeActions";
import DatePickerComponent from "../../Components/CalendarPicker/DatePickerComponent"
import Topbar from "../Topbar/Topbar";
import "../../Styles/main_page.css";
import { Routes, Route } from "react-router-dom";
import PatientsTable from "../PatientsList/PatientsTable";
import AppointmentsTableView from "../Appointments/AppointmentsTableView";


function Dashboard() {
  const dispatch = useDispatch();

  const getUserType = () => {
    dispatch(GetUserType())
  }

  useEffect(() => {
    getUserType()
  }, [])

  function AppointmentsAndCalendarComp() {
    return <div className="rowWith20PXGap">
      <AppointmentsTableView></AppointmentsTableView>
      <DatePickerComponent></DatePickerComponent>
    </div>
  }

  function PatientsViewComp () {
    return <div>
      <PatientsTable></PatientsTable>
    </div>
  }

  return (
    <>
      <div>
        <Topbar />
        <Routes>
          <Route path="/Appointments" element={AppointmentsAndCalendarComp()} />
          <Route path="/Patients" element={PatientsViewComp()} />
        </Routes>
      </div>
    </>
  );
}

export default Dashboard;