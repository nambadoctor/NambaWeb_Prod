import  { useState, useCallback, useEffect } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { DeleteReport } from '../../Actions/ReportActions';
import { RootState } from '../../store';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from 'react-redux';

export default function ReportImageView() {

    const dispatch = useDispatch();
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [images, setImages] = useState([""]);
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

        setImages(stringList);
    }

    function imageViewDisplay() {
        return (
            <div style={{ overflow: 'auto' }}>
                <div>
                    {displayImageObjs && displayImageObjs.map((src, index) => (
                        <div style={{ position: 'relative', width: 200, marginTop: 10 }}>
                            <img
                                src={src.sasUrl}
                                onClick={() => openImageViewer(index)}
                                width="200"
                                key={index}
                                style={{ margin: '5px' }}
                                alt=""
                            />

                            <div onClick={() => dispatch(DeleteReport(src))} style={{ position: 'absolute', top: -10, right: -15 }}>
                                {<CancelIcon></CancelIcon>}
                            </div>
                        </div>
                    ))}

                    {isViewerOpen &&
                        (<ImageViewer
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
            <div style={{ margin: 20, marginTop: 50, marginBottom: 50, textAlign: 'center' }}>
                Oops, no reports yet! Click "Choose File" to upload!
            </div>
        );
    }

    return (
        <div>
            {(displayImageObjs && displayImageObjs.length > 0) ? imageViewDisplay() : noReportsDisplay()}
        </div>
    );
}