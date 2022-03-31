import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ImageViewer from 'react-simple-image-viewer';
import useImagesHook from '../../hooks/useImagesViewHook';
import { RootState } from '../../store';
import { Thumbnail } from '../Thumbnail/Thumbnail';

export default function ReportImageView() {
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
                    (report) => report.appointmentId === currentAppointmentId,
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
                    {currentCustomerReportsImages &&
                        currentCustomerReportsImages
                            .filter(
                                (report) =>
                                    report.appointmentId ===
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
