import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetUserType } from "../../Actions/Common/GetUserTypeActions";
import AppointmentsTable from "../Appointments/AppointmentsTable"
import DatePickerComponent from "../../Components/CalendarPicker/DatePickerComponent"
import Topbar from "../Topbar/Topbar";
import "../../Styles/main_page.css";
import { Routes, Route } from "react-router-dom";


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
      <AppointmentsTable></AppointmentsTable>
      <DatePickerComponent></DatePickerComponent>
    </div>
  }

  return(
    <>
      <div>
        <Topbar />
        <Routes>
          <Route path="/Appointments" element={AppointmentsAndCalendarComp()} />
          <Route path="/Patients" element={<div>Hello Patients</div>} />
        </Routes>
      </div>
    </>
  );
}

export default Dashboard;