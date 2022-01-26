import "../../Styles/topbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OrganisationPicker from "../OrganisationPicker/OrganisationPicker";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { SignOut } from "../../ServiceActions/LoginActions";
import { useDispatch } from "react-redux";
import { ClearAddPatientState } from "../../Actions/AddPatientActions";
import { ClearAllValuesForConsultation } from "../../Actions/ConsultationActions";

export default function Topbar() {
  const logo = require("../../Assets/NDLogo.png");
  const dispatch = useDispatch()

  function TabOnClick() {
    dispatch(ClearAddPatientState())
    dispatch(ClearAllValuesForConsultation())
  }

  return (
    <Navbar bg="topBarBlue" fixed="top" expand="sm">
      <Navbar.Brand>
        <img
          alt="logo"
          style={{
            width: 60,
            height: 60,
            borderRadius: 15,
            marginRight: 10,
            marginLeft: 10,
          }}
          src={String(logo)}
        />
        <span className="logo">NAMBA DOCTOR</span>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav
          className="ms-auto"
          style={{ marginRight: 20, alignItems: "center" }}
        >
          <OrganisationPicker></OrganisationPicker>
          <Link
            to='/Appointments'
            onClick={TabOnClick}
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "600",
              marginLeft: 20,
              marginRight: 40,
              textDecoration: 'none'
            }}>Appointments
          </Link>
          <Link
            to='/Patients'
            onClick={TabOnClick}
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "600",
              marginLeft: 20,
              marginRight: 40,
              textDecoration: 'none'
            }}>Patients
          </Link>
          <div onClick={SignOut} style={{ background: "#1054c4", padding: 10, borderRadius: 30, marginLeft: 10, marginRight: 20 }}>
            <LogoutIcon style={{ color: 'white' }}> </LogoutIcon>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}