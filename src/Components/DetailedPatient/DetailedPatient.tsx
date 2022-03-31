import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../../../src/App.css';
import { ClearContext } from '../../actions/ClearContextAction';
import { GetCustomer } from '../../service-actions/CustomerActions';
import { UploadPrescriptionAsStray } from '../../service-actions/PrescriptionActions';
import { UploadReportAsStray } from '../../service-actions/ReportActions';
import { UploadTreatmentPlanDocument } from '../../service-actions/TreatmentActions';
import { RootState } from '../../store';
import ConsultationHeader from '../Consultation/ConsultationHeader';
import NotesView from '../Notes/NotesView';
import { AllPrescriptionImagesView } from '../PrescriptionUpload/AllPrescriptionImagesView';
import PrescriptionImageView from '../PrescriptionUpload/PrescriptionImageView';
import { PrescriptionUploadPicker } from '../PrescriptionUpload/PrescriptionUploadPicker';
import { ReferToOthers } from '../ReferToOthers/ReferToOthers';
import { AllReportImagesView } from '../ReportUpload/AllReportImagesView';
import ReportImageView from '../ReportUpload/ReportImageView';
import { ReportUploadPicker } from '../ReportUpload/ReportUploadPicker';
import { AllTreatmentPlanDocumentImageView } from '../TreatmentPlanDocuments/AllTreatmentPlanDocumentImagesView';
import { TreatmentPlanDocumentUploadPicker } from '../TreatmentPlanDocuments/TreatmentPlanDocumentUploadPicker';
import TreatmentPlanDocumentImageView from '../TreatmentPlanDocuments/TreatmentPlanDocumentView';

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
    }, [currentServiceProvider, id, dispatch]);

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
