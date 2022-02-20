import { ReportUploadPicker } from '../ReportUpload/ReportUploadPicker';
import ReportImageView from '../ReportUpload/ReportImageView';
import ConsultationHeader from './ConsultationHeader';
import { PrescriptionUploadPicker } from '../PrescriptionUpload/PrescriptionUploadPicker';
import PrescriptionImageView from '../PrescriptionUpload/PrescriptionImageView';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import '../../../src/App.css';
import { RootState } from '../../store';
import { AllReportImagesView } from '../ReportUpload/AllReportImagesView';
import { AllPrescriptionImagesView } from '../PrescriptionUpload/AllPrescriptionImagesView';
import { UploadReportForConsultation } from '../../ServiceActions/ReportActions';
import { UploadPrescriptionForConsultation } from '../../ServiceActions/PrescriptionActions';
import NotesView from '../Notes/NotesView';
import { GetAppointment } from '../../ServiceActions/AppointmentActions';
import { ClearContext } from '../../Actions/ClearContextAction';

export default function ConsultationView() {
    const dispatch = useDispatch();
    const currentServiceProvider = useSelector(
        (state: RootState) => state.CurrentServiceProviderState.serviceProvider,
    );
    const { id } = useParams();

    useEffect(() => {
        dispatch(ClearContext());
        if (currentServiceProvider) {
            dispatch(GetAppointment(id as string));
        }
    }, [currentServiceProvider, id]);

    return (
        <div>
            <ConsultationHeader />
            <Row style={{ margin: 20 }}>
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
            </Row>

            <Row style={{ margin: 20 }}>
                <div className="blue_filled_rounded_box_top">
                    <h3 className="blue_filled_rounded_box_top_title_item">
                        Reports
                    </h3>
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
            </Row>

            <Row style={{ margin: 20 }}>
                <div className="blue_filled_rounded_box_top">
                    <h3 className="blue_filled_rounded_box_top_title_item">
                        Treatments
                    </h3>
                    
                </div>
                <div className="blue_border_rounded_white_box">
                    
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
