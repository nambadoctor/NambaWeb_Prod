import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ImageViewer from 'react-simple-image-viewer';
import useImagesHook from '../../hooks/useImagesViewHook';
import { UploadPrescriptionAsStray } from '../../service-actions/PrescriptionActions';
import { RootState } from '../../store';
import { AllImageDisplayProps } from '../../utils/CommonProps';
import { Thumbnail } from '../Thumbnail/Thumbnail';
import { PrescriptionUploadPicker } from './PrescriptionUploadPicker';

export const AllPrescriptionImagesView: React.FC<AllImageDisplayProps> = (
    props,
) => {
    const currentAppointmentId = useSelector(
        (state: RootState) =>
            state.ConsultationState.Appointment?.appointmentId,
    );

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

    function imageViewDisplay() {
        return (
            <div style={{ overflow: 'auto' }}>
                <h5 style={{ marginTop: '8px' }}>History Of Prescriptions</h5>
                {images && images.length > 0 && (
                    <div>
                        <Row>
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
                                        key={index}
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
