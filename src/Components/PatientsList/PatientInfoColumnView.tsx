import { Divider } from "@mui/material";
import EditPatientView from "../EditPatient/EditPatientView";
import PrescriptionImageView from "../PrescriptionUpload/PrescriptionImageView";
import ReportImageView from "../ReportUpload/ReportImageView";

export default function PatientInfoColumnView() {
  return (
    <div>
      <h5 style={{ marginBottom: 20 }}>Add/Edit Patient</h5>
      <EditPatientView />
      <ReportImageView />
      <PrescriptionImageView />
    </div>
  );
}
