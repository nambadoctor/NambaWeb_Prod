import ImageCaptureComponent from '../Components/ImageCapture/ImageCaptureComponent';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Row, Col } from 'react-bootstrap';
import useUploadOrCaptureImageHook from '../CustomHooks/useCaptureOrUploadHook';
import { ImageUploadProps } from '../Helpers/CommonProps';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '@mui/material';

export const MobilePrescriptionUploadPicker: React.FC<ImageUploadProps> = (
    props,
) => {
    const {
        showCameraToggle,
        setShowCameraToggle,
        handleChange,
        handleTakePhoto,
    } = useUploadOrCaptureImageHook(props.handlePhotoCallBack);

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="prescription_upload_picker"
                onChange={handleChange}
            />
            <Button
                variant="contained"
                startIcon={
                    <label htmlFor="prescription_upload_picker">
                        <CloudUploadIcon
                            style={{ color: props.uploadButtonColor }}
                        />
                    </label>
                }
                endIcon={
                    <div onClick={() => setShowCameraToggle(true)}>
                        <CameraAltIcon
                            style={{ color: props.uploadButtonColor }}
                        />
                    </div>
                }
            >
                |
            </Button>

            {showCameraToggle && (
                <ImageCaptureComponent
                    setShowCameraToggle={setShowCameraToggle}
                    handleTakePhoto={handleTakePhoto}
                />
            )}
        </div>
    );
};
