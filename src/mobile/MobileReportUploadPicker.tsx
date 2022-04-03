import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ImageCaptureComponent from '../components/ImageCapture/ImageCaptureComponent';
import useUploadOrCaptureImageHook from '../hooks/useCaptureOrUploadHook';
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
                <Col>
                    <label htmlFor="report_upload_picker">
                        <CloudUploadIcon
                            style={{ color: props.uploadButtonColor }}
                        />
                    </label>
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
