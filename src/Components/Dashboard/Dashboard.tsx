import { useSelector, useDispatch } from "react-redux";
import { getAllOrgs } from "../../Actions/OrganisationActions";
import { RootStore } from "../../store";

function Dashboard() {
  const dispatch = useDispatch();

  const orgState = useSelector((state: RootStore) => state.Org);

  const getAllOrganisations = () => {
    dispatch(getAllOrgs());
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