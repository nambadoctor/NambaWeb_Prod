import { useState, ChangeEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { SignInWithPhoneNumberHelper } from "../ServiceActions/LoginActions";

export default function useImagesHook() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [images, setImages] = useState([""]);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return { currentImage, isViewerOpen, images, setImages, openImageViewer, closeImageViewer };
}
