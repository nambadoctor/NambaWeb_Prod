import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import "../../Styles/topbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import OrganisationPicker from "../OrganisationPicker/OrganisationPicker";
import { Link } from "react-router-dom";
import { ZStack, Box } from "native-base"
import { setSelectedUserTab } from "../../Actions/SelectedTabActions";
import { TopBarNavItemConstants } from "../../Reducers/SelectedTabReducer";
import { Navbar, Nav } from "react-bootstrap";

export default function Topbar() {
  const dispatch = useDispatch()
  const logo = require('../../Assets/NDLogo.png');

  const selectedTabState = useSelector((state: RootStore) => state.SelectedUserTabStateReducer)

  function getBottomDivider() {
    return <ZStack alignItems="center" justifyContent="center">
      <Box bg="white" size="1" width="150" marginTop="95" />
    </ZStack>
  }

  function setSelectedCategory(category: string) {
    dispatch(setSelectedUserTab(category))
  }

  return (
    <Navbar bg="topBarBlue" fixed="top" expand="sm">
      <Navbar.Brand>
        <img alt='logo' style={{ width: 60, height: 60, borderRadius: 15, marginRight: 10, marginLeft: 10 }} src={String(logo)} />
        <span className="logo">NAMBA DOCTOR</span>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto" style={{ marginRight: 20, alignItems: 'center' }}>
          <OrganisationPicker></OrganisationPicker>
          <Nav.Link href="Appointments" style={{ color: 'white', fontSize: 18, fontWeight: '600', marginLeft: 20, marginRight: 30 }}>Appointments</Nav.Link>
          <Nav.Link href="Patients" style={{ color: 'white', fontSize: 18, fontWeight: '600', marginLeft: 20, marginRight: 40 }}>Patients</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

{/* <div className="topbar">
<div className="topbarWrapper">
  <div className="topLeft">
    <img alt='logo' style={{ width: 60, height: 60, borderRadius: 15, marginRight: 10 }} src={String(logo)} />
    <span className="logo">NAMBA DOCTOR</span>
  </div>
  <div className="topRight">
    <OrganisationPicker></OrganisationPicker>
    <div>
      {selectedTabState.selectedTab == TopBarNavItemConstants.APPOINTMENTS ?
        getBottomDivider()
        :
        <div />
      }
      <Link onClick={() => setSelectedCategory(TopBarNavItemConstants.APPOINTMENTS)} className="topbarIconContainer" style={{ textDecoration: 'none' }} to="/Dashboard/Appointments">Appointments</Link>
    </div>
    <div>
      {selectedTabState.selectedTab == TopBarNavItemConstants.PATIENTS ?
        getBottomDivider()
        :
        <div />
      }
      <Link onClick={() => setSelectedCategory(TopBarNavItemConstants.PATIENTS)} className="topbarIconContainer" style={{ textDecoration: 'none' }} to="/Dashboard/Patients">Patients</Link>
    </div>
  </div>
</div>
</div> */}