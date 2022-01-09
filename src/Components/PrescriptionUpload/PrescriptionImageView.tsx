import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ImageViewer from 'react-simple-image-viewer';
import { RootState } from '../../store';

export default function PrescriptionImageView() {
    
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    var images: string[] = [];
    let displayImageObjs = useSelector((state: RootState) => state.ConsultationState.currentCustomerPrescriptions);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    useEffect(() => {
        getImageURLsFromPrescriptions()
    }, [displayImageObjs])

    function getImageURLsFromPrescriptions() {
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