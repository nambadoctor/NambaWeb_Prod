import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface ImageCaptureProps {
  //here you can declare the return type (here is void)
  setShowCameraToggle: (val: boolean) => void;
  handleTakePhoto: (dataUri: any) => void;
}

const ImageCaptureComponent: React.FC<ImageCaptureProps> = (props: ImageCaptureProps) => {

  return (
    <Modal
      show={true}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered>

      <div>
        <h2 onClick={() => {props.setShowCameraToggle(false)}}>Close Camera</h2>
        <Camera
          onTakePhoto={(dataUri) => { props.handleTakePhoto(dataUri) }}
          idealFacingMode="environment"
        />
      </div>

    </Modal>
  );
}

export default ImageCaptureComponent