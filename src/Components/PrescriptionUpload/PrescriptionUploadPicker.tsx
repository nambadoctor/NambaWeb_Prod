import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { UploadPrescriptionFromBase64String, UploadPrescriptionFromFile } from '../../Actions/PrescriptionActions';
import ImageCaptureComponent from '../ImageCapture/ImageCaptureComponent';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Row, Col } from 'react-bootstrap';

export default function PrescriptionUploadPicker() {

    const dispatch = useDispatch();

    const [showCameraToggle, setShowCameraToggle] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(UploadPrescriptionFromFile(event.target.files![0]))
    }

    const handleTakePhoto = (dataUri: any) => {
        dispatch(UploadPrescriptionFromBase64String(dataUri))
        setShowCameraToggle(false)
    }

    return (
        <div >
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="contained-button-file"
                onChange={handleChange}
            />
            <Row>
                <Col><label htmlFor="contained-button-file"><CloudUploadIcon style={{ color: 'white' }} /></label></Col>
                <Col><div onClick={() => setShowCameraToggle(true)}><CameraAltIcon style={{ color: 'white' }} ></CameraAltIcon></div></Col>
            </Row>
            
            
            {showCameraToggle && <ImageCaptureComponent setShowCameraToggle={setShowCameraToggle} handleTakePhoto={handleTakePhoto}></ImageCaptureComponent>}
        </div>
    )
}
