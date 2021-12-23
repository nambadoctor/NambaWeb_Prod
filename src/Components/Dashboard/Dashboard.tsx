import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetUserType } from "../../Actions/Common/GetUserTypeActions";
import AppointmentsTable from "../Appointments/AppointmentsTable"
import DatePickerComponent from "../../Components/CalendarPicker/DatePickerComponent"
import OrganisationPicker from "../OrganisationPicker/OrganisationPicker";
import "../../Styles/main_page.css"

function Dashboard() {
  const dispatch = useDispatch();

  const getUserType = () => {
    dispatch(GetUserType())
  }

  useEffect(() => {
    getUserType()
  }, [])

  return (
    <>
      <div className="rowWith20PXGap">
        <OrganisationPicker></OrganisationPicker>
        <AppointmentsTable></AppointmentsTable>
        <DatePickerComponent></DatePickerComponent>
      </div>
    </>
  );
}

export default Dashboard;