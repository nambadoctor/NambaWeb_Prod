import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { Modal } from 'react-bootstrap'
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

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

      <Box sx={{ width: '100%' }}>
        <h2 onClick={() => { props.setShowCameraToggle(false) }}><CloseIcon /></h2>
        <Camera
          onTakePhoto={(dataUri) => { props.handleTakePhoto(dataUri) }}
          idealFacingMode="environment"
        />
      </Box>

    </Modal>

  );
}

export default ImageCaptureComponent