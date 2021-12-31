import "../../Styles/topbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OrganisationPicker from "../OrganisationPicker/OrganisationPicker";
import { Navbar, Nav } from "react-bootstrap";

export default function Topbar() {
  const logo = require("../../Assets/NDLogo.png");

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
          <Nav.Link
            href="Appointments"
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "600",
              marginLeft: 20,
              marginRight: 30,
            }}
          >
            Appointments
          </Nav.Link>
          <Nav.Link
            href="Patients"
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "600",
              marginLeft: 20,
              marginRight: 40,
            }}
          >
            Patients
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
