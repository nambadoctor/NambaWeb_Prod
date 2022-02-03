import { ReportUploadPicker } from "../ReportUpload/ReportUploadPicker";
import ReportImageView from "../ReportUpload/ReportImageView";
import { PrescriptionUploadPicker } from "../PrescriptionUpload/PrescriptionUploadPicker";
import PrescriptionImageView from "../PrescriptionUpload/PrescriptionImageView";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAppointment } from "../../ServiceActions/AppointmentActions";
import { Col, Row } from "react-bootstrap";
import "../../Styles/mobile.css";
import { RootState } from "../../store";
import { UploadReportForConsultation } from "../../ServiceActions/ReportActions";
import { UploadPrescriptionForConsultation } from "../../ServiceActions/PrescriptionActions";
import MobileConsultationHeader from "./MobileConsultationHeader";
import PreviousAndNextConsultations from "./PreviousAndNextConsultations";

export default function MobileConsultationView() {
  const dispatch = useDispatch();
  const currentServiceProvider = useSelector(
    (state: RootState) => state.CurrentServiceProviderState.serviceProvider
  );
  const { id } = useParams();

  useEffect(() => {
    if (currentServiceProvider) {
      dispatch(GetAppointment(id as string));
    }
  }, [currentServiceProvider]);


  return (
    <div>
      <MobileConsultationHeader />
      <PreviousAndNextConsultations />
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
          </div>
        </Col>

        <Col md="6" style={{ marginTop: "1em" }}>
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
          </div>
        </Col>
      </Row>
    </div>
  );
}
