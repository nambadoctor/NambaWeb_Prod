import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ImageCaptureComponent from '../components/ImageCapture/ImageCaptureComponent';
import { Col, Row } from 'react-bootstrap';
import useUploadOrCaptureImageHook from '../hooks/useCaptureOrUploadHook';
import React from 'react';
import { ImageUploadProps } from '../utils/CommonProps';

export const MobileReportUploadPicker: React.FC<ImageUploadProps> = (props) => {
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
                id="report_upload_picker"
                onChange={handleChange}
            />
            <Row>
                <Col>
                    <div onClick={() => setShowCameraToggle(true)}>
                        <CameraAltIcon
                            style={{ color: props.uploadButtonColor }}
                        />
                    </div>
                </Col>
            </Row>

            {showCameraToggle && (
                <ImageCaptureComponent
                    setShowCameraToggle={setShowCameraToggle}
                    handleTakePhoto={handleTakePhoto}
                />
            )}
        </div>
    );
};
