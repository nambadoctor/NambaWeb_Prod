import { useSelector, useDispatch } from "react-redux";
import { GetUserType } from "../../Actions/Common/GetUserTypeActions";
import { RootStore } from "../../store";

function Dashboard() {
  const dispatch = useDispatch();

  const orgState = useSelector((state: RootStore) => state.Org);

  const getAllOrganisations = () => {
    dispatch(GetUserType());
  };

  return (
    <>
      <div>
        <button onClick={getAllOrganisations}> {orgState.organisations != null ? orgState.organisations.length : "Testing"} </button>
      </div>

    </>
  );
}

export default Dashboard;