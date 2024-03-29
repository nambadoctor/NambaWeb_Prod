import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageViewer from 'react-simple-image-viewer';
import useImagesHook from '../../hooks/useImagesViewHook';
import { DeleteTreatmentPlanDocument } from '../../service-actions/TreatmentActions';
import { RootState } from '../../store';
import ITreatmentPlanDocumentIncomingData from '../../types/IncomingDataModels/TreatmentPlanDocumentIncoming';

export default function TreatmentPlanDocumentImageView() {
    const dispatch = useDispatch();

    const {
        currentImage,
        isViewerOpen,
        images,
        setImages,
        openImageViewer,
        closeImageViewer,
    } = useImagesHook();

    const currentServiceRequestId = useSelector(
        (state: RootState) =>
            state.ConsultationState.Appointment?.serviceRequestId,
    );

    let currentCustomerTreatmentImages = useSelector(
        (state: RootState) => state.CurrentCustomerState.TreatmentPlanDocuments,
    );

    useEffect(() => {
        getImageURLsFromTreatmentPlanDocs();
    }, [currentCustomerTreatmentImages]);

    function getImageURLsFromTreatmentPlanDocs() {
        var stringList: string[] = [];

        if (currentCustomerTreatmentImages) {
            currentCustomerTreatmentImages
                .filter(
                    (doc) => doc.serviceRequestId === currentServiceRequestId,
                )
                .forEach((element) => {
                    stringList.push(element.sasUrl);
                });
        }

        setImages(stringList);
    }

    function deleteTreatmentPlanDocument(
        treatment: ITreatmentPlanDocumentIncomingData,
    ) {
        if (window.confirm('Are you sure you want to delete this treatment?')) {
            dispatch(
                DeleteTreatmentPlanDocument(treatment.treatmentPlanDocumentId),
            );
        }
    }

    function imageViewDisplay() {
        return (
            <div style={{ overflow: 'auto' }}>
                <div>
                    {currentCustomerTreatmentImages &&
                        currentCustomerTreatmentImages
                            .filter(
                                (treatment) =>
                                    treatment.serviceRequestId ===
                                    currentServiceRequestId,
                            )
                            .map((src, index) => (
                                <div
                                    style={{
                                        display: 'inline-block',
                                        position: 'relative',
                                        marginTop: 10,
                                        marginRight: 20,
                                    }}
                                    key={index}
                                >
                                    <img
                                        src={src.sasUrl}
                                        onClick={() => openImageViewer(index)}
                                        style={{ width: 100, height: 100 }}
                                        key={index}
                                    />

                                    <div
                                        onClick={() =>
                                            dispatch(
                                                deleteTreatmentPlanDocument(
                                                    src,
                                                ),
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
            </div>
        );
    }

    return (
        <div>
            {currentCustomerTreatmentImages &&
                currentCustomerTreatmentImages.length > 0 &&
                imageViewDisplay()}
        </div>
    );
}
