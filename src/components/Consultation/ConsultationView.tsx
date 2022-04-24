import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../../../src/App.css';
import { ClearContext } from '../../actions/ClearContextAction';
import { GetAppointment } from '../../service-actions/AppointmentActions';
import { UploadPrescriptionForConsultation } from '../../service-actions/PrescriptionActions';
import { UploadReportForConsultation } from '../../service-actions/ReportActions';
import { UploadTreatmentPlanDocument } from '../../service-actions/TreatmentActions';
import { RootState } from '../../store';
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

    return (
        <div className="mx-1 lg:mx-5 md:mt-16 mt-4 flex flex-col">
            <div className="flex md:flex-row flex-col justify-between mx-4 gap-2">
                <div className="md:w-1/2">
                    <ConsultationHeader />
                </div>
                {serviceProviderSettings &&
                serviceProviderSettings.referralWhitelist &&
                serviceProviderSettings.referralWhitelist.isEnabled ? (
                    <div className="md:w-1/2 h-full">
                        <ReferToOthers
                            referralContacts={
                                serviceProviderSettings.referralWhitelist
                                    .referralContacts
                            }
                        />
                    </div>
                ) : null}
            </div>
            <div className="mx-4 mt-5 mb-2">
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
            </div>
            <div className="mx-4 my-2">
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
            </div>
            <div className="mx-4 my-2">
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
                    <AllTreatmentPlanDocumentImageView
                        showUploadButton={false}
                        showCancelImageButton={false}
                    ></AllTreatmentPlanDocumentImageView>
                </div>
            </div>
            <div className="mx-4 mt-2 mb-16">
                <div className="blue_filled_rounded_box_top">
                    <h3 className="blue_filled_rounded_box_top_title_item">
                        Notes
                    </h3>
                </div>
                <div className="blue_border_rounded_white_box">
                    <NotesView></NotesView>
                </div>
            </div>
        </div>
    );
}
