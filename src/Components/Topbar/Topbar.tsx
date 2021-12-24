import React from "react";
import "./topbar.css";
import OrganisationPicker from "../OrganisationPicker/OrganisationPicker";

export default function Topbar() {

  const logo = require('../../Assets/NDLogo.png');

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
            Appointments
          </div>
          <div className="topbarIconContainer">
            Patients
          </div>
        </div>
      </div>
    </div>
  );
}