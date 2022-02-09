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

    const upLoadedOn = (uploadedDateTime: any) => {
        let date = new Date(uploadedDateTime).toLocaleDateString();
        return date;
    };

    function imageViewDisplay() {
        return (
            <div style={{ overflow: 'auto' }}>
                {images && images.length > 0 && (
                    <div>
                        <Row>
                            <Divider
                                style={{ marginTop: 20, marginBottom: 20 }}
                            />
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
                                    />
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
                                    <div
                                        style={{
                                            display: 'inline-block',
                                            position: 'relative',
                                            width: 100,
                                            marginTop: 10,
                                            marginRight: 20,
                                        }}
                                    >
                                        <img
                                            alt=""
                                            src={src.sasUrl}
                                            onClick={() =>
                                                openImageViewer(index)
                                            }
                                            key={index}
                                            style={{ width: 100, height: 100 }}
                                        />
                                        {props.showCancelImageButton && (
                                            <div
                                                onClick={() =>
                                                    dispatch(
                                                        deletePrescription(src),
                                                    )
                                                }
                                                style={{
                                                    position: 'absolute',
                                                    top: -10,
                                                    right: -15,
                                                }}
                                            >
                                                <CancelIcon />
                                            </div>
                                        )}
                                        <p>
                                            {upLoadedOn(src.uploadedDateTime)}
                                        </p>
                                    </div>
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
                            />
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
