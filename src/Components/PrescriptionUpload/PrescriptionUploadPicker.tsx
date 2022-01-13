import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { UploadPrescriptionFromBase64String, UploadPrescriptionFromFile } from '../../Actions/PrescriptionActions';
import ImageCaptureComponent from '../ImageCapture/ImageCaptureComponent';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

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
        <div>
            <div onClick={() => setShowCameraToggle(true)}><CameraAltIcon ></CameraAltIcon></div>
            {showCameraToggle && <ImageCaptureComponent setShowCameraToggle={setShowCameraToggle} handleTakePhoto={handleTakePhoto}></ImageCaptureComponent>}
            <input type="file" accept="image/*" onChange={handleChange}></input>
        </div>
    )
}
