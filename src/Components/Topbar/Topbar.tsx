import { Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import "../../Styles/topbar.css";
import OrganisationPicker from "../OrganisationPicker/OrganisationPicker";

export default function Topbar() {

  const logo = require('../../Assets/NDLogo.png');

  const selectedTabState = useSelector((state: RootStore) => state.SelectedUserTabStateReducer)

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img alt='logo' style={{ width: 60, height: 60, borderRadius: 15, marginRight: 10 }} src={String(logo)} />
          <span className="logo">NAMBA DOCTOR</span>
        </div>
        <div className="topRight">
          <OrganisationPicker></OrganisationPicker>
          <div className="topbarIconContainer">
            <div>Appointments</div>
            {selectedTabState.selectedTab == "Appointments" ? <Divider style={{
              borderBottomColor: 'white',
              borderBottomWidth: 5,
              opacity: 100
            }} /> : <div />}
          </div>
          <div className="topbarIconContainer">
            Patients
          </div>
        </div>
      </div>
    </div>
  );
}