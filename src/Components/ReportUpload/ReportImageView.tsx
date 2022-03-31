import { useEffect } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { DeleteReport } from '../../service-actions/ReportActions';
import { RootState } from '../../store';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from 'react-redux';
import IReportIncomingData from '../../types/IncomingDataModels/ReportIncoming';
import useImagesHook from '../../hooks/useImagesViewHook';
import { Thumbnail } from '../Thumbnail/Thumbnail';

export default function ReportImageView() {
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
    //             (report) => report.appointmentId == currentAppointmentId,
    //         ),
    // );

    let currentCustomerReportsImages = useSelector(
        (state: RootState) => state.CurrentCustomerState.Reports,
    );

    useEffect(() => {
        getImageURLsFromReports();
    }, [currentCustomerReportsImages]);

    function getImageURLsFromReports() {
        var stringList: string[] = [];

        if (currentCustomerReportsImages) {
            currentCustomerReportsImages
                .filter(
                    (report) => report.appointmentId == currentAppointmentId,
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
                    {currentCustomerReportsImages &&
                        currentCustomerReportsImages
                            .filter(
                                (report) =>
                                    report.appointmentId ==
                                    currentAppointmentId,
                            )
                            .map((src, index) => (
                                <Thumbnail
                                    src={src}
                                    index={index}
                                    openImage={openImageViewer}
                                    showCancelImageButton={true}
                                    showUploadedTime={false}
                                    type="Report"
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
            </div>
        );
    }

    return (
        <div>
            {currentCustomerReportsImages &&
                currentCustomerReportsImages.length > 0 &&
                imageViewDisplay()}
        </div>
    );
}
