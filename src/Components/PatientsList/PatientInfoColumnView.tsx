import { Divider } from "@mui/material";
import { Row } from "react-bootstrap";
import EditPatientView from "../EditPatient/EditPatientView";
import NotesView from "../Notes/NotesView";
import { AllPrescriptionImagesView } from "../PrescriptionUpload/AllPrescriptionImagesView";
import { AllReportImagesView } from "../ReportUpload/AllReportImagesView";

export default function PatientInfoColumnView() {
  return (
    <div>
      <h5 style={{ marginBottom: 20 }}>Add/Edit Patient</h5>
      <EditPatientView></EditPatientView>

      <Row>
        <Divider style={{ marginTop: 20 }}></Divider>
      </Row>

      <AllPrescriptionImagesView
        showUploadButton={true}
        showCancelImageButton={true}
      ></AllPrescriptionImagesView>

      <Row>
        <Divider style={{ marginTop: 20 }}></Divider>
      </Row>

      <AllReportImagesView
        showUploadButton={true}
        showCancelImageButton={true}
      ></AllReportImagesView>

      <Row>
        <Divider style={{ marginTop: 20 }}></Divider>
      </Row>

      {/* <NotesView></NotesView> */}
    </div>
  );
}
