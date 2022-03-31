import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ImageViewer from 'react-simple-image-viewer';
import useImagesHook from '../../hooks/useImagesViewHook';
import { UploadReportAsStray } from '../../service-actions/ReportActions';
import { RootState } from '../../store';
import { AllImageDisplayProps } from '../../utils/CommonProps';
import { Thumbnail } from '../Thumbnail/Thumbnail';
import { ReportUploadPicker } from './ReportUploadPicker';

export const AllReportImagesView: React.FC<AllImageDisplayProps> = (props) => {
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

    let allCustomerReportsImages = useSelector(
        (state: RootState) => state.CurrentCustomerState.Reports,
    );

    useEffect(() => {
        getImageURLsFromReports();
    }, [allCustomerReportsImages]);

    function getImageURLsFromReports() {
        var stringList: string[] = [];

        if (allCustomerReportsImages) {
            allCustomerReportsImages
                .filter(
                    (report) => report.appointmentId !== currentAppointmentId,
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
                <div>
                    <h5 style={{ marginTop: '8px' }}>History Of Reports</h5>
                    {images && images.length > 0 && (
                        <div>
                            <Row>
                                {props.showUploadButton && (
                                    <Col>
                                        <ReportUploadPicker
                                            handlePhotoCallBack={
                                                UploadReportAsStray
                                            }
                                            uploadButtonColor="#0863e4"
                                        ></ReportUploadPicker>
                                    </Col>
                                )}
                            </Row>

                            {allCustomerReportsImages &&
                                allCustomerReportsImages
                                    .filter(
                                        (report) =>
                                            report.appointmentId !==
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
                                            type="Report"
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
                        <div>No reports yet. Upload image or Take Photo.</div>
                    </Col>
                    {props.showUploadButton && (
                        <Col>
                            <ReportUploadPicker
                                handlePhotoCallBack={UploadReportAsStray}
                                uploadButtonColor="#0863e4"
                            ></ReportUploadPicker>
                        </Col>
                    )}
                </Row>
            </div>
        );
    }

    return (
        <div>
            {allCustomerReportsImages && allCustomerReportsImages.length > 0
                ? imageViewDisplay()
                : noReportsDisplay()}
        </div>
    );
};
