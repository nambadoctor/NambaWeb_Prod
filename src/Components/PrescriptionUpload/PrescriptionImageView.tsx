import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageViewer from 'react-simple-image-viewer';
import { RootState } from '../../store';
import CancelIcon from '@mui/icons-material/Cancel';
import { DeletePrescription } from '../../ServiceActions/PrescriptionActions';
import IPrescriptionIncomingData from '../../Types/IncomingDataModels/PrescriptionIncoming';
import useImagesHook from '../../CustomHooks/useImagesViewHook';
import { createSelector } from 'reselect';

export default function PrescriptionImageView() {
    const dispatch = useDispatch();

    const {
        currentImage,
        isViewerOpen,
        images,
        setImages,
        openImageViewer,
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
                {currentCustomerPrescriptions &&
                    currentCustomerPrescriptions
                        .filter(
                            (prescription) =>
                                prescription.appointmentId ===
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
                                    src={src.sasUrl}
                                    onClick={() => openImageViewer(index)}
                                    key={index}
                                    style={{ width: 100, height: 100 }}
                                />

                                <div
                                    onClick={() =>
                                        dispatch(deletePrescription(src))
                                    }
                                    style={{
                                        position: 'absolute',
                                        top: -10,
                                        right: -15,
                                    }}
                                >
                                    <CancelIcon />
                                </div>
                            </div>
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
                No prescriptions yet. Upload image or Take Photo.
            </div>
        );
    }

    return (
        <div>
            {currentCustomerPrescriptions &&
            currentCustomerPrescriptions.length > 0
                ? imageViewDisplay()
                : noPrescriptionsDisplay()}
        </div>
    );
}
