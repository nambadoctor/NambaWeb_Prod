import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../../../src/App.css';
import { ClearContext } from '../../actions/ClearContextAction';
import { GetCustomer } from '../../service-actions/CustomerActions';
import { UploadPrescriptionAsStray } from '../../service-actions/PrescriptionActions';
import { UploadReportAsStray } from '../../service-actions/ReportActions';
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
        <div className="flex flex-col mx-1 mt-4 lg:mx-5 md:mt-16">
            <div className="flex flex-col justify-between gap-2 mx-4 md:flex-row">
                <div className="md:w-1/2">
                    <ConsultationHeader />
                </div>
                {serviceProviderSettings &&
                serviceProviderSettings.referralWhitelist &&
                serviceProviderSettings.referralWhitelist.isEnabled ? (
                    <div className="h-full md:w-1/2">
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
            </div>
            <div className="mx-4 my-2">
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
            </div>
            <div className="mx-4 my-2">
                <div className="blue_filled_rounded_box_top">
                    <h3 className="blue_filled_rounded_box_top_title_item">
                        Treatments
                        {/* <TreatmentPlanDocumentUploadPicker
                            handlePhotoCallBack={UploadTreatmentPlanDocument}
                            uploadButtonColor="#1672f9"
                        /> */}
                    </h3>
                </div>
                <div className="blue_border_rounded_white_box">
                    <TreatmentPlanDocumentImageView></TreatmentPlanDocumentImageView>
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
