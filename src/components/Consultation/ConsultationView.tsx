import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import '../../../src/App.css';
import { ClearContext } from '../../actions/ClearContextAction';
import { GetAppointment } from '../../service-actions/AppointmentActions';
import { UploadPrescriptionForConsultation } from '../../service-actions/PrescriptionActions';
import { UploadReportForConsultation } from '../../service-actions/ReportActions';
import { UploadTreatmentPlanDocument } from '../../service-actions/TreatmentActions';
import { RootState } from '../../store';
import CustomButton from '../CustomButton';
import { FollowUp } from '../FollowUp/FollowUp';
import NotesView from '../Notes/NotesView';
import { AllPrescriptionImagesView } from '../PrescriptionUpload/AllPrescriptionImagesView';
import PrescriptionImageView from '../PrescriptionUpload/PrescriptionImageView';
import { PrescriptionUploadPicker } from '../PrescriptionUpload/PrescriptionUploadPicker';
import { ReferToOthers } from '../ReferToOthers/ReferToOthers';
import { AllReportImagesView } from '../ReportUpload/AllReportImagesView';
import ReportImageView from '../ReportUpload/ReportImageView';
import { ReportUploadPicker } from '../ReportUpload/ReportUploadPicker';
import { TreatmentPlanDocumentUploadPicker } from '../TreatmentPlanDocuments/TreatmentPlanDocumentUploadPicker';
import TreatmentPlanDocumentImageView from '../TreatmentPlanDocuments/TreatmentPlanDocumentView';
import ConsultationHeader from './ConsultationHeader';

export default function ConsultationView() {
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
            dispatch(GetAppointment(id as string));
        }
    }, [currentServiceProvider, id, dispatch]);

    const isMobileView = useSelector(
        (state: RootState) => state.mobileOrDesktopViewReducer.isMobile,
    );

    return (
        <div className="mx-1 lg:mx-5">
            <Row>
                {isMobileView && (
                    <Row
                        style={{
                            marginBottom: 10,
                            marginLeft: 0,
                            marginRight: 0,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Link
                                to={'/'}
                                style={{
                                    color: 'black',
                                    fontSize: 18,
                                    fontWeight: '600',
                                    marginLeft: 20,
                                    marginRight: 40,
                                    textDecoration: 'none',
                                }}
                            >
                                <CustomButton
                                    type="submit"
                                    onClick={() => {}}
                                    isPurple={false}
                                    title="Go Back"
                                    small={false}
                                />
                            </Link>
                        </div>
                    </Row>
                )}

                <Col>
                    <ConsultationHeader />
                </Col>
                {serviceProviderSettings &&
                serviceProviderSettings.referralWhitelist &&
                serviceProviderSettings.referralWhitelist.isEnabled ? (
                    <Col>
                        <ReferToOthers
                            referralContacts={
                                serviceProviderSettings.referralWhitelist
                                    .referralContacts
                            }
                        />
                    </Col>
                ) : null}
                {serviceProviderSettings &&
                serviceProviderSettings.followupSettings &&
                serviceProviderSettings.followupSettings.isEnabled ? (
                    <Col>
                        <FollowUp
                            followUpConfig={
                                serviceProviderSettings.followupSettings
                            }
                        />
                    </Col>
                ) : null}
            </Row>
            <Row style={{ margin: 20 }}>
                <div className="blue_filled_rounded_box_top">
                    <h3 className="blue_filled_rounded_box_top_title_item">
                        Prescriptions
                        <PrescriptionUploadPicker
                            handlePhotoCallBack={
                                UploadPrescriptionForConsultation
                            }
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
                            handlePhotoCallBack={UploadReportForConsultation}
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
                        Treatment Plans
                        <TreatmentPlanDocumentUploadPicker
                            handlePhotoCallBack={UploadTreatmentPlanDocument}
                            uploadButtonColor="#1672f9"
                        />
                    </h3>
                </div>
                <div className="blue_border_rounded_white_box">
                    <TreatmentPlanDocumentImageView />
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
