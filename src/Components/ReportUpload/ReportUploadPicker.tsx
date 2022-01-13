import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { UploadReportFromBase64String, UploadReportFromFile } from '../../Actions/ReportActions';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ImageCaptureComponent from '../ImageCapture/ImageCaptureComponent';

export default function ReportUploadPicker() {

    const dispatch = useDispatch();

    const [showCameraToggle, setShowCameraToggle] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(UploadReportFromFile(event.target.files![0]))
    }

    const handleTakePhoto = (dataUri: any) => {
        dispatch(UploadReportFromBase64String(dataUri))
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
