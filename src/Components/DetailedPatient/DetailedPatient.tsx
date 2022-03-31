import { ReportUploadPicker } from '../ReportUpload/ReportUploadPicker';
import ReportImageView from '../ReportUpload/ReportImageView';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import '../../../src/App.css';
import { RootState } from '../../store';
import { AllReportImagesView } from '../ReportUpload/AllReportImagesView';
import { AllPrescriptionImagesView } from '../PrescriptionUpload/AllPrescriptionImagesView';
import {
    UploadReportAsStray,
    UploadReportForConsultation,
} from '../../service-actions/ReportActions';
import {
    UploadPrescriptionAsStray,
    UploadPrescriptionForConsultation,
} from '../../service-actions/PrescriptionActions';
import NotesView from '../Notes/NotesView';
import { GetAppointment } from '../../service-actions/AppointmentActions';
import { ClearContext } from '../../actions/ClearContextAction';
import { TreatmentPlansTable } from '../TreatmentsTable/TreatmentsTable';
import ConsultationHeader from '../Consultation/ConsultationHeader';
import { GetCustomer } from '../../service-actions/CustomerActions';
import PrescriptionImageView from '../PrescriptionUpload/PrescriptionImageView';
import { PrescriptionUploadPicker } from '../PrescriptionUpload/PrescriptionUploadPicker';
import TreatmentPlanDocumentImageView from '../TreatmentPlanDocuments/TreatmentPlanDocumentView';
import { TreatmentPlanDocumentUploadPicker } from '../TreatmentPlanDocuments/TreatmentPlanDocumentUploadPicker';
import { UploadTreatmentPlanDocument } from '../../service-actions/TreatmentActions';
import { AllTreatmentPlanDocumentImageView } from '../TreatmentPlanDocuments/AllTreatmentPlanDocumentImagesView';
import { ReferToOthers } from '../ReferToOthers/ReferToOthers';

export default function DetailedPatient() {
    const dispatch = useDispatch();
    const currentServiceProvider = useSelector(
        (state: RootState) => state.CurrentServiceProviderState.serviceProvider,
    );
    const serviceProviderSettings = useSelector(
        (state: RootState) =>
            state.CurrentServiceProviderState.serviceProviderSettings,
    );
    const { id } = useParams();

    useEffect(() => {
        dispatch(ClearContext());
        if (currentServiceProvider) {
            dispatch(GetCustomer(id as string));
        }
    }, [currentServiceProvider, id]);

    return (
        <div>
            <Row>
                <Col>
                    <ConsultationHeader />
                </Col>
                <Col>
                    {serviceProviderSettings &&
                    serviceProviderSettings.referralWhitelist &&
                    serviceProviderSettings.referralWhitelist.isEnabled ? (
                        <ReferToOthers
                            referralContacts={
                                serviceProviderSettings.referralWhitelist
                                    .referralContacts
                            }
                        />
                    ) : null}
                </Col>
            </Row>
            <Row style={{ margin: 20 }}>
                <div className="blue_filled_rounded_box_top">
                    <h3 className="blue_filled_rounded_box_top_title_item">
                        Prescriptions
                        <PrescriptionUploadPicker
                            handlePhotoCallBack={UploadPrescriptionAsStray}
                            uploadButtonColor="#1672f9"
                        />
                    </h3>
                </div>
                <div className="blue_border_rounded_white_box">
                    <PrescriptionImageView />
                    <AllPrescriptionImagesView
                        showUploadButton={false}
                        showCancelImageButton={false}
                    />
                </div>
            </Row>

            <Row style={{ margin: 20 }}>
                <div className="blue_filled_rounded_box_top">
                    <h3 className="blue_filled_rounded_box_top_title_item">
                        Reports
                        <ReportUploadPicker
                            handlePhotoCallBack={UploadReportAsStray}
                            uploadButtonColor="#1672f9"
                        />
                    </h3>
                </div>
                <div className="blue_border_rounded_white_box">
                    <ReportImageView />
                    <AllReportImagesView
                        showUploadButton={false}
                        showCancelImageButton={false}
                    />
                </div>
            </Row>

            <Row style={{ margin: 20 }}>
                <div className="blue_filled_rounded_box_top">
                    <h3 className="blue_filled_rounded_box_top_title_item">
                        Treatments
                        <TreatmentPlanDocumentUploadPicker
                            handlePhotoCallBack={UploadTreatmentPlanDocument}
                            uploadButtonColor="#1672f9"
                        />
                    </h3>
                </div>
                <div className="blue_border_rounded_white_box">
                    <TreatmentPlanDocumentImageView></TreatmentPlanDocumentImageView>
                    <AllTreatmentPlanDocumentImageView
                        showUploadButton={false}
                        showCancelImageButton={false}
                    ></AllTreatmentPlanDocumentImageView>
                </div>
            </Row>

            <Row style={{ margin: 20 }}>
                <div className="blue_filled_rounded_box_top">
                    <h3 className="blue_filled_rounded_box_top_title_item">
                        Notes
                    </h3>
                </div>
                <div className="blue_border_rounded_white_box">
                    <NotesView></NotesView>
                </div>
            </Row>
        </div>
    );
}
