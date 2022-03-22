import { useEffect } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import {
    DeleteReport,
    UploadReportAsStray,
} from '../../ServiceActions/ReportActions';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import IReportIncomingData from '../../Types/IncomingDataModels/ReportIncoming';
import { Divider } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import useImagesHook from '../../CustomHooks/useImagesViewHook';
import { AllImageDisplayProps } from '../../Helpers/CommonProps';
import ITreatmentPlanDocumentIncomingData from '../../Types/IncomingDataModels/TreatmentPlanDocumentIncoming';
import { DeleteTreatmentPlanDocument } from '../../ServiceActions/TreatmentActions';
import CancelIcon from '@mui/icons-material/Cancel';

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

    let currentCustomerTreatmentImages = useSelector(
        (state: RootState) => state.CurrentCustomerState.TreatmentPlanDocuments,
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

    useEffect(() => {
        var c = 5;
    }, [images]);

    function deleteTreatmentPlanDocument(
        treatment: ITreatmentPlanDocumentIncomingData,
    ) {
        if (
            window.confirm('Are you sure you want to delete this prescription?')
        ) {
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
                            {currentCustomerTreatmentImages &&
                                currentCustomerTreatmentImages.map(
                                    (src, index) => (
                                        <div
                                            style={{
                                                display: 'inline-block',
                                                position: 'relative',
                                                marginTop: 10,
                                                marginRight: 20,
                                            }}
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
                                    ),
                                )}
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

    function noReportsDisplay() {
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
            {currentCustomerTreatmentImages &&
            currentCustomerTreatmentImages.length > 0
                ? imageViewDisplay()
                : noReportsDisplay()}
        </div>
    );
};
