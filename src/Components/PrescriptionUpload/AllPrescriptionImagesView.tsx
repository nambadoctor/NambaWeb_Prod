import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageViewer from 'react-simple-image-viewer';
import { RootState } from '../../store';
import {
    DeletePrescription,
    UploadPrescriptionAsStray,
} from '../../ServiceActions/PrescriptionActions';
import IPrescriptionIncomingData from '../../Types/IncomingDataModels/PrescriptionIncoming';
import { Col, Row } from 'react-bootstrap';
import { Divider } from '@mui/material';
import useImagesHook from '../../CustomHooks/useImagesViewHook';
import { PrescriptionUploadPicker } from './PrescriptionUploadPicker';
import { AllImageDisplayProps } from '../../Helpers/CommonProps';
import CancelIcon from '@mui/icons-material/Cancel';
import { createSelector } from 'reselect';
import { dateToDateString } from '../../Utils/GeneralUtils';
import { Thumbnail } from '../Thumbnail/Thumbnail';

export const AllPrescriptionImagesView: React.FC<AllImageDisplayProps> = (
    props,
) => {
    const dispatch = useDispatch();

    const currentAppointmentId = useSelector(
        (state: RootState) =>
            state.ConsultationState.Appointment?.appointmentId,
    );

    // const showAppointmentPrescriptions = createSelector(
    //     (state: RootState) => state.CurrentCustomerState.Prescriptions,
    //     (prescriptions) =>
    //         prescriptions?.filter(
    //             (prescription) =>
    //                 prescription.appointmentId !== currentAppointmentId,
    //         ),
    // );

    let allCustomerPrescriptionImages = useSelector(
        (state: RootState) => state.CurrentCustomerState.Prescriptions,
    );

    const {
        currentImage,
        isViewerOpen,
        images,
        setImages,
        openImageViewer,
        closeImageViewer,
    } = useImagesHook();

    useEffect(() => {
        getImageURLsFromPrescriptions();
    }, [allCustomerPrescriptionImages]);

    function getImageURLsFromPrescriptions() {
        var stringList: string[] = [];

        if (allCustomerPrescriptionImages) {
            allCustomerPrescriptionImages
                .filter(
                    (prescription) =>
                        prescription.appointmentId !== currentAppointmentId,
                )
                .forEach((element) => {
                    stringList.push(element.sasUrl);
                });
        }

        setImages(stringList);
    }

    function deletePrescription(prescription: IPrescriptionIncomingData) {
        if (
            window.confirm('Are you sure you want to delete this prescription?')
        ) {
            dispatch(DeletePrescription(prescription));
        }
    }

    function imageViewDisplay() {
        return (
            <div style={{ overflow: 'auto' }}>
                {images && images.length > 0 && (
                    <div>
                        <Row>
                            <Divider
                                style={{ marginTop: 20, marginBottom: 20 }}
                            ></Divider>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <h5>History Of Prescriptions</h5>
                            </Col>
                            {props.showUploadButton && (
                                <Col>
                                    <PrescriptionUploadPicker
                                        handlePhotoCallBack={
                                            UploadPrescriptionAsStray
                                        }
                                        uploadButtonColor="#0863e4"
                                    ></PrescriptionUploadPicker>
                                </Col>
                            )}
                        </Row>

                        {allCustomerPrescriptionImages &&
                            allCustomerPrescriptionImages
                                .filter(
                                    (prescription) =>
                                        prescription.appointmentId !==
                                        currentAppointmentId,
                                )
                                .map((src, index) => (
                                    <Thumbnail
                                        src={src}
                                        index={index}
                                        openImage={openImageViewer}
                                        showCancelImageButton={
                                            props.showCancelImageButton
                                        }
                                        showUploadedTime={true}
                                        type="Prescription"
                                    ></Thumbnail>
                                ))}
                    </div>
                )}

                {isViewerOpen && (
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                    />
                )}
            </div>
        );
    }

    function noPrescriptionsDisplay() {
        return (
            <div
                style={{
                    margin: 20,
                    marginTop: 50,
                    marginBottom: 50,
                    textAlign: 'center',
                }}
            >
                <Row>
                    <Col>
                        <div>
                            No prescriptions yet. Upload image or Take Photo.
                        </div>
                    </Col>
                    {props.showUploadButton && (
                        <Col>
                            <PrescriptionUploadPicker
                                handlePhotoCallBack={UploadPrescriptionAsStray}
                                uploadButtonColor="#0863e4"
                            ></PrescriptionUploadPicker>
                        </Col>
                    )}
                </Row>
            </div>
        );
    }

    return (
        <div>
            {allCustomerPrescriptionImages &&
            allCustomerPrescriptionImages.length > 0
                ? imageViewDisplay()
                : noPrescriptionsDisplay()}
        </div>
    );
};
