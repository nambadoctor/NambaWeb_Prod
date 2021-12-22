import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetUserType } from "../../Actions/Common/GetUserTypeActions";
import { GetAllOrgs } from "../../Actions/OrganisationActions";
import { RootStore } from "../../store";
import AppointmentsTable from "../Appointments/AppointmentsTable"

function Dashboard() {
  const dispatch = useDispatch();

  const userState = useSelector((state: RootStore) => state.UserStateReducer);
  const orgState = useSelector((state: RootStore) => state.OrgReducer);

  const getAllOrganisations = () => {
    dispatch(GetAllOrgs());
  }; 

  const getUserType = () => {
    dispatch(GetUserType())
  }

  useEffect(() => {
    getUserType()
  }, [])

  return (
    <>
      <AppointmentsTable></AppointmentsTable>
    </>
  );
}

export default Dashboard;