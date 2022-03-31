import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SetIsViewingImage } from '../actions/common/UIControlActions';

export default function useImagesHook() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [images, setImages] = useState(['']);
    const dispatch = useDispatch();

    const openImageViewer = useCallback((index) => {
        dispatch(SetIsViewingImage(true));
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        dispatch(SetIsViewingImage(false));
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return {
        currentImage,
        isViewerOpen,
        images,
        setImages,
        openImageViewer,
        closeImageViewer,
    };
}
