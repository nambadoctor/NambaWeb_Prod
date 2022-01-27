import { Divider } from "@mui/material";
import EditPatientView from "../EditPatient/EditPatientView";
import AllPrescriptionsImageView from "../PrescriptionUpload/AllPrescriptionsImageView";
import PrescriptionImageView from "../PrescriptionUpload/PrescriptionImageView";
import AllReportsImageView from "../ReportUpload/AllReportsImageView";
import ReportImageView from "../ReportUpload/ReportImageView";

export default function PatientInfoColumnView() {
  return (
    <div>
      <h5 style={{ marginBottom: 20 }}>Add/Edit Patient</h5>
      <EditPatientView />
      <AllReportsImageView />
      <AllPrescriptionsImageView />
    </div>
  );
}
