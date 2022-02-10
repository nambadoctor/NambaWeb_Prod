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
import { ReportUploadPicker } from './ReportUploadPicker';
import { AllImageDisplayProps } from '../../Helpers/CommonProps';
import CancelIcon from '@mui/icons-material/Cancel';
import { createSelector } from 'reselect';
import { dateToDateString } from '../../Utils/GeneralUtils';

export const AllReportImagesView: React.FC<AllImageDisplayProps> = (props) => {
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

    // const showAppointmentReports = createSelector(
    //     (state: RootState) => state.CurrentCustomerState.Reports,
    //     (reports) =>
    //         reports?.filter(
    //             (report) => report.appointmentId !== currentAppointmentId,
    //         ),
    // );

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

    function deleteReport(report: IReportIncomingData) {
        if (
            window.confirm('Are you sure you want to delete this prescription?')
        ) {
            dispatch(DeleteReport(report));
        }
    }

    function imageViewDisplay() {
        return (
            <div style={{ overflow: 'auto' }}>
                <div>
                    {images && images.length > 0 && (
                        <div>
                            <Row>
                                <Divider
                                    style={{
                                        marginTop: 20,
                                        marginBottom: 20,
                                    }}
                                ></Divider>
                            </Row>

                            <Row>
                                <Col md={8}>
                                    <h5>History Of Reports</h5>
                                </Col>
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

                                            <div>
                                                {src.uploadedDateTime
                                                    ? dateToDateString(
                                                          src.uploadedDateTime,
                                                      )
                                                    : '--/--/---'}
                                            </div>

                                            {props.showCancelImageButton && (
                                                <div
                                                    onClick={() =>
                                                        dispatch(
                                                            deleteReport(src),
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
