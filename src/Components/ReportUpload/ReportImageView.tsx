import React, { useState, useCallback, useEffect } from 'react';
import { render } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import ImageViewer from 'react-simple-image-viewer';
import { GetReports } from '../../Actions/ReportActions';
import { RootState } from '../../store';
import IReportIncomingData from '../../Types/IncomingDataModels/ReportIncoming';

export default function ReportImageView() {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    var images: string[] = [];
    let displayImageObjs = useSelector((state: RootState) => state.ConsultationState.currentCustomerReports);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    useEffect(() => {
        getImageURLsFromReports()
    }, [displayImageObjs])

    function getImageURLsFromReports() {
        var stringList: string[] = [];

        if (displayImageObjs) {
            displayImageObjs.forEach(element => {
                stringList.push(element.sasUrl);
            });
        }

        return stringList;
    }

    return (
        <div>
            {displayImageObjs && displayImageObjs.map((src, index) => (
                <img
                    src={src.sasUrl}
                    onClick={() => openImageViewer(index)}
                    width="200"
                    key={index}
                    style={{ margin: '5px' }}
                    alt=""
                />
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