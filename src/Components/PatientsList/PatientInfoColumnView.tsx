import { Divider } from "@mui/material";
import { Row } from 'react-bootstrap'
import EditPatientView from '../EditPatient/EditPatientView'
import {AllPrescriptionImagesView} from "../PrescriptionUpload/AllPrescriptionImagesView";
import {AllReportImagesView} from "../ReportUpload/AllReportImagesView";

export default function PatientInfoColumnView() {
    return (
        <div>
            <h5 style={{ marginBottom: 20 }}>Add/Edit Patient</h5>
            <EditPatientView></EditPatientView>

            <Row><Divider style={{ marginTop: 20 }}></Divider></Row>

            <AllPrescriptionImagesView showUploadButton={true} showCancelImageButton={true}></AllPrescriptionImagesView>
            <AllReportImagesView showUploadButton={true} showCancelImageButton={true}></AllReportImagesView>
        </div>
    )
}
