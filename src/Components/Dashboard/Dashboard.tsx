import { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrgs } from "../../Actions/OrganisationActions";
import { OrganisationState } from "../../Reducers/OrganisationsReducer";
import getUserType from "../../Services/Common/GetUserTypeService"

type Props = {}

type State = {
  temp: string
}

function Dashboard() {
  const dispatch = useDispatch();
  const {orgs} = useSelector(this.state => state.)

  const getAllOrganisations = () => {
    dispatch(getAllOrgs());
  };

  return (
    <>
      <button onClick={getAllOrganisations}> CLICK ME </button>
    </>
  );
}

export default Dashboard;