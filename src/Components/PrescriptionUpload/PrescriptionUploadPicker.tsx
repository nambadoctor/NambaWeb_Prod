import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { UploadPrescription } from '../../ServiceActions/PrescriptionActions';
import ImageCaptureComponent from '../ImageCapture/ImageCaptureComponent';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Row, Col } from 'react-bootstrap';

export default function PrescriptionUploadPicker() {

    const dispatch = useDispatch();

    const [showCameraToggle, setShowCameraToggle] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(UploadPrescription(event.target.files![0]))
    }

    const handleTakePhoto = (dataUri: any) => {
        dispatch(UploadPrescription(dataUri))
        setShowCameraToggle(false)
    }

    return (
        <div >
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="prescription_upload_picker"
                onChange={handleChange}
            />
            <Row>
                <Col><label htmlFor="prescription_upload_picker"><CloudUploadIcon style={{ color: 'white' }} /></label></Col>
                <Col><div onClick={() => setShowCameraToggle(true)}><CameraAltIcon style={{ color: 'white' }} ></CameraAltIcon></div></Col>
            </Row>
            
            
            {showCameraToggle && <ImageCaptureComponent setShowCameraToggle={setShowCameraToggle} handleTakePhoto={handleTakePhoto}></ImageCaptureComponent>}
        </div>
    )
}
