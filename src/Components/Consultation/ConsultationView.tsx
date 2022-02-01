import { ReportUploadPicker } from "../ReportUpload/ReportUploadPicker";
import ReportImageView from "../ReportUpload/ReportImageView";
import ConsultationHeader from "./ConsultationHeader";
import { PrescriptionUploadPicker } from "../PrescriptionUpload/PrescriptionUploadPicker";
import PrescriptionImageView from "../PrescriptionUpload/PrescriptionImageView";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAppointmentForConsultation } from "../../ServiceActions/ConsultationActions";
import { Col, Row } from "react-bootstrap";
import "../../../src/App.css";
import { RootState } from "../../store";
import { AllReportImagesView } from "../ReportUpload/AllReportImagesView";
import { AllPrescriptionImagesView } from "../PrescriptionUpload/AllPrescriptionImagesView";
import { UploadReportForConsultation } from "../../ServiceActions/ReportActions";
import { UploadPrescriptionForConsultation } from "../../ServiceActions/PrescriptionActions";
import { TextField } from "@mui/material";
import NotesView from "../Notes/NotesView";

export default function ConsultationView() {
  const dispatch = useDispatch();
  const currentServiceProvider = useSelector(
    (state: RootState) => state.CurrentServiceProviderState.serviceProvider
  );
  const { id } = useParams();

  useEffect(() => {
    if (currentServiceProvider) {
      dispatch(GetAppointmentForConsultation(id as string));
    }
  }, [currentServiceProvider]);

  return (
    <div>
      <ConsultationHeader />
      <Row style={{ margin: 20 }}>
        <div className="blue_filled_rounded_box_top">
          <h3 className="blue_filled_rounded_box_top_title_item">Notes</h3>
        </div>
        <div className="blue_border_rounded_white_box">
          <NotesView></NotesView>
        </div>
      </Row>
      <Row style={{ margin: 20 }}>
        <Col md="6">
          <div className="blue_filled_rounded_box_top">
            <h3 className="blue_filled_rounded_box_top_title_item">Reports</h3>
            <ReportUploadPicker
              handlePhotoCallBack={UploadReportForConsultation}
              uploadButtonColor="white"
            />
          </div>
          <div className="blue_border_rounded_white_box">
            <ReportImageView />
            <AllReportImagesView
              showUploadButton={false}
              showCancelImageButton={false}
            />
          </div>
        </Col>

        <Col md="6">
          <div className="blue_filled_rounded_box_top">
            <h3 className="blue_filled_rounded_box_top_title_item">
              Prescriptions
            </h3>
            <PrescriptionUploadPicker
              handlePhotoCallBack={UploadPrescriptionForConsultation}
              uploadButtonColor="white"
            />
          </div>
          <div className="blue_border_rounded_white_box">
            <PrescriptionImageView />
            <AllPrescriptionImagesView
              showUploadButton={false}
              showCancelImageButton={false}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
