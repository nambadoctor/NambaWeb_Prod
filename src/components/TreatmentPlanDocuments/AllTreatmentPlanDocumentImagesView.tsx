import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ImageViewer from 'react-simple-image-viewer';
import useImagesHook from '../../hooks/useImagesViewHook';
import { DeleteTreatmentPlanDocument } from '../../service-actions/TreatmentActions';
import { RootState } from '../../store';
import ITreatmentPlanDocumentIncomingData from '../../types/IncomingDataModels/TreatmentPlanDocumentIncoming';
import { AllImageDisplayProps } from '../../utils/CommonProps';

export const AllTreatmentPlanDocumentImageView: React.FC<
    AllImageDisplayProps
> = (props) => {
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

    let historyExists = false;

    let currentCustomerTreatmentImages = useSelector(
        (state: RootState) => state.CurrentCustomerState.TreatmentPlanDocuments,
    );

    let filteredTreatmentImages = currentCustomerTreatmentImages?.filter(
        (doc) => {
            historyExists = true;
            return doc.serviceRequestId !== currentServiceRequestId;
        },
    );

    useEffect(() => {
        getImageURLsFromTreatmentPlanDocs();
    }, [currentCustomerTreatmentImages]);

    function getImageURLsFromTreatmentPlanDocs() {
        var stringList: string[] = [];

        if (currentCustomerTreatmentImages) {
            currentCustomerTreatmentImages.forEach((element) => {
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
                    {images && images.length > 0 && (
                        <div>
                            {filteredTreatmentImages &&
                                filteredTreatmentImages.map((src, index) => (
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
                                            onClick={() =>
                                                openImageViewer(index)
                                            }
                                            key={index}
                                            style={{
                                                width: 100,
                                                height: 100,
                                            }}
                                        />

                                        {props.showCancelImageButton && (
                                            <div
                                                onClick={() =>
                                                    deleteTreatmentPlanDocument(
                                                        src,
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
            </div>
        );
    }

    function noTreatmentsDisplay() {
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
                            No treatment plan docs yet. Upload image or Take
                            Photo.
                        </div>
                    </Col>
                    {/* {props.showUploadButton && (
                        <Col>
                            <ReportUploadPicker
                                handlePhotoCallBack={UploadReportAsStray}
                                uploadButtonColor="#0863e4"
                            ></ReportUploadPicker>
                        </Col>
                    )} */}
                </Row>
            </div>
        );
    }

    return (
        <div>
            {filteredTreatmentImages && filteredTreatmentImages.length > 0
                ? imageViewDisplay()
                : !historyExists
                ? noTreatmentsDisplay()
                : null}
        </div>
    );
};
