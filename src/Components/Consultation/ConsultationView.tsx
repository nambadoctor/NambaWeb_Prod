import { ReportUploadPicker } from '../ReportUpload/ReportUploadPicker';
import ReportImageView from '../ReportUpload/ReportImageView';
import ConsultationHeader from './ConsultationHeader';
import { PrescriptionUploadPicker } from '../PrescriptionUpload/PrescriptionUploadPicker';
import PrescriptionImageView from '../PrescriptionUpload/PrescriptionImageView';
import { Row } from 'react-bootstrap';
import '../../../src/App.css';
import { AllReportImagesView } from '../ReportUpload/AllReportImagesView';
import { AllPrescriptionImagesView } from '../PrescriptionUpload/AllPrescriptionImagesView';
import { UploadReportForConsultation } from '../../ServiceActions/ReportActions';
import { UploadPrescriptionForConsultation } from '../../ServiceActions/PrescriptionActions';
import NotesView from '../Notes/NotesView';
import { SideBar } from './SideBar';
import useConsultationViewHook from '../../CustomHooks/useConsultationViewHook';

export default function ConsultationView() {
    const { ElementScroll } = useConsultationViewHook();
    return (
        <div>
            <SideBar />
            <div style={{ marginLeft: '11em', marginBottom: '15em' }}>
                <Row style={{ marginTop: 30 }}>
                    <ElementScroll id="Patient Details" name="Patient Details">
                        <ConsultationHeader />
                    </ElementScroll>
                </Row>

                <Row style={{ margin: 20, marginTop: 30 }}>
                    <ElementScroll id="Reports" name="Reports">
                        <div className="blue_filled_rounded_box_top">
                            <h3 className="blue_filled_rounded_box_top_title_item">
                                Reports
                            </h3>
                            <ReportUploadPicker
                                handlePhotoCallBack={
                                    UploadReportForConsultation
                                }
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
                    </ElementScroll>
                </Row>

                <Row style={{ margin: 20, marginTop: 30 }}>
                    <ElementScroll id="Prescriptions" name="Prescriptions">
                        <div className="blue_filled_rounded_box_top">
                            <h3 className="blue_filled_rounded_box_top_title_item">
                                Prescriptions
                            </h3>
                            <PrescriptionUploadPicker
                                handlePhotoCallBack={
                                    UploadPrescriptionForConsultation
                                }
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
                    </ElementScroll>
                </Row>
                <Row style={{ margin: 20, marginTop: 30 }}>
                    <ElementScroll id="Notes" name="Notes">
                        <div className="blue_filled_rounded_box_top">
                            <h3 className="blue_filled_rounded_box_top_title_item">
                                Notes
                            </h3>
                        </div>
                        <div className="blue_border_rounded_white_box">
                            <NotesView />
                        </div>
                    </ElementScroll>
                </Row>
            </div>
        </div>
    );
}
