import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ImageViewer from 'react-simple-image-viewer';
import useImagesHook from '../../hooks/useImagesViewHook';
import { RootState } from '../../store';
import { Thumbnail } from '../Thumbnail/Thumbnail';

export default function PrescriptionImageView() {
    const {
        currentImage,
        isViewerOpen,
        images,
        openImageViewer,
        setImages,
        closeImageViewer,
    } = useImagesHook();

    const currentAppointmentId = useSelector(
        (state: RootState) =>
            state.ConsultationState.Appointment?.appointmentId,
    );

    // const showAppointmentPrescriptions = createSelector(
    //     (state: RootState) => state.CurrentCustomerState.Prescriptions,
    //     (prescriptions) =>
    //         prescriptions?.filter(
    //             (prescription) =>
    //                 prescription.appointmentId === currentAppointmentId,
    //         ),
    // );

    let currentCustomerPrescriptions = useSelector(
        (state: RootState) => state.CurrentCustomerState.Prescriptions,
    );

    useEffect(() => {
        getImageURLsFromPrescriptions();
    }, [currentCustomerPrescriptions]);

    function getImageURLsFromPrescriptions() {
        var stringList: string[] = [];

        if (currentCustomerPrescriptions) {
            currentCustomerPrescriptions
                .filter(
                    (prescription) =>
                        prescription.appointmentId === currentAppointmentId,
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
                {currentCustomerPrescriptions &&
                    currentCustomerPrescriptions
                        .filter(
                            (prescription) =>
                                prescription.appointmentId ===
                                currentAppointmentId,
                        )
                        .map((src, index) => (
                            <Thumbnail
                                src={src}
                                index={index}
                                openImage={openImageViewer}
                                showCancelImageButton={true}
                                showUploadedTime={false}
                                type="Prescription"
                            ></Thumbnail>
                        ))}

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

    return (
        <div>
            {currentCustomerPrescriptions &&
                currentCustomerPrescriptions.length > 0 &&
                imageViewDisplay()}
        </div>
    );
}
