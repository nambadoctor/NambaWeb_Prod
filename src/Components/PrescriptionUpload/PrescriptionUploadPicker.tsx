import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UploadPrescriptionForConsultation } from '../../ServiceActions/PrescriptionActions';
import ImageCaptureComponent from '../ImageCapture/ImageCaptureComponent';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Row, Col } from 'react-bootstrap';
import useUploadOrCaptureImageHook from '../../CustomHooks/useCaptureOrUploadHook';
import { ImageUploadProps } from '../../Helpers/CommonProps';

export const PrescriptionUploadPicker: React.FC<ImageUploadProps> = (props) => {
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
            <Row>
                <Col>
                    <label htmlFor="prescription_upload_picker">
                        <CloudUploadIcon
                            style={{ color: props.uploadButtonColor }}
                        />
                    </label>
                </Col>
                <Col>
                    <div onClick={() => setShowCameraToggle(true)}>
                        <CameraAltIcon
                            style={{ color: props.uploadButtonColor }}
                        ></CameraAltIcon>
                    </div>
                </Col>
            </Row>

            {showCameraToggle && (
                <ImageCaptureComponent
                    setShowCameraToggle={setShowCameraToggle}
                    handleTakePhoto={handleTakePhoto}
                ></ImageCaptureComponent>
            )}
        </div>
    );
};
