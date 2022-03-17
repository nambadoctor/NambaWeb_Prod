import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ImageCaptureComponent from '../ImageCapture/ImageCaptureComponent';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Col, Row } from 'react-bootstrap';
import useUploadOrCaptureImageHook from '../../CustomHooks/useCaptureOrUploadHook';
import React from 'react';
import { ImageUploadProps } from '../../Helpers/CommonProps';

export const TreatmentPlanDocumentUploadPicker: React.FC<ImageUploadProps> = (props) => {

    const { showCameraToggle, setShowCameraToggle, handleChange, handleTakePhoto } = useUploadOrCaptureImageHook(props.handlePhotoCallBack)

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="treatment_plan_document_upload_picker"
                onChange={handleChange}
            />
            <Row>
                <Col><label htmlFor="treatment_plan_document_upload_picker"><CloudUploadIcon style={{ color: props.uploadButtonColor }} /></label></Col>
                <Col><div onClick={() => setShowCameraToggle(true)}><CameraAltIcon style={{ color: props.uploadButtonColor }} ></CameraAltIcon></div></Col>
            </Row>

            {showCameraToggle && <ImageCaptureComponent setShowCameraToggle={setShowCameraToggle} handleTakePhoto={handleTakePhoto}></ImageCaptureComponent>}
        </div>
    )
}
