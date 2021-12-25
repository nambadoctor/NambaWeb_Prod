import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import "../../Styles/topbar.css";
import OrganisationPicker from "../OrganisationPicker/OrganisationPicker";
import { Link } from "react-router-dom";
import { ZStack, Box } from "native-base"
import { setSelectedUserTab } from "../../Actions/SelectedTabActions";
import { TopBarNavItemConstants } from "../../Reducers/SelectedTabReducer";

export default function Topbar() {
  const dispatch = useDispatch()
  const logo = require('../../Assets/NDLogo.png');

  const selectedTabState = useSelector((state: RootStore) => state.SelectedUserTabStateReducer)

  function getBottomDivider() {
    return <ZStack alignItems="center" justifyContent="center">
      <Box bg="white" size="2" width="150" marginTop="95" />
    </ZStack>
  }

  function setSelectedCategory(category: string) {
    dispatch(setSelectedUserTab(category))
  }

  return (
    <div className="topbar">
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
    </div>
  );
}