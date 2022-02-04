import "../../Styles/topbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OrganisationPicker from "../OrganisationPicker/OrganisationPicker";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { SignOut } from "../../ServiceActions/LoginActions";
import { useDispatch } from "react-redux";
import { ClearAddPatientState } from "../../Actions/AddPatientActions";
import { ClearAllValuesForConsultation } from "../../Actions/ConsultationActions";
import { useState } from "react";

export default function NavBar() {
  const logo = require("../../Assets/NDLogo.png");
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  function switchTabs() {
    dispatch(ClearAddPatientState());
    dispatch(ClearAllValuesForConsultation());
  }

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      bg="topBarBlue"
      variant="dark"
      fixed="top"
    >
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
      <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse>
        <Nav
          className="ms-auto"
          style={{
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <OrganisationPicker />
          <Link
            to="/Appointments"
            onClick={() => {
              switchTabs();
              setExpanded(false);
            }}
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "600",
              marginRight: 40,
              textDecoration: "none",
            }}
          >
            Appointments
          </Link>
          <div
            onClick={SignOut}
            style={{
              background: "#1054c4",
              padding: 10,
              borderRadius: 30,
              marginLeft: 10,
              marginRight: 20,
            }}
          >
            <LogoutIcon style={{ color: "white" }} />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
