import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { UploadReportAsStray, UploadReportForConsultation } from '../../ServiceActions/ReportActions';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ImageCaptureComponent from '../ImageCapture/ImageCaptureComponent';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Col, Row } from 'react-bootstrap';

export default function ReportUploadPicker() {

    const dispatch = useDispatch();

    const [showCameraToggle, setShowCameraToggle] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(UploadReportForConsultation(event.target.files![0]))
    }

    const handleTakePhoto = (dataUri: any) => {
        dispatch(UploadReportAsStray(dataUri))
        setShowCameraToggle(false)
    }

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
                <Col><label htmlFor="report_upload_picker"><CloudUploadIcon style={{ color: 'white' }} /></label></Col>
                <Col><div onClick={() => setShowCameraToggle(true)}><CameraAltIcon style={{ color: 'white' }} ></CameraAltIcon></div></Col>
            </Row>

            {showCameraToggle && <ImageCaptureComponent setShowCameraToggle={setShowCameraToggle} handleTakePhoto={handleTakePhoto}></ImageCaptureComponent>}
        </div>
    )
}
