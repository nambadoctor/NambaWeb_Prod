import React from 'react';
import { Row } from 'react-bootstrap';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch } from 'react-redux';
import { DeletePrescription } from '../../ServiceActions/PrescriptionActions';
import IPrescriptionIncomingData from '../../Types/IncomingDataModels/PrescriptionIncoming';
import { dateToDateString } from '../../Utils/GeneralUtils';

interface ThumbnailProps {
    src: any;
    index: number;
    openImage: (index: number) => void;
    showCancelImageButton: boolean;
    showUploadedTime: boolean;
}

export const Thumbnail: React.FC<ThumbnailProps> = (props) => {
    const pdfLogo = require('../../Assets/pdfImage.png');
    const dispatch = useDispatch();

    function deleteFile(prescription: IPrescriptionIncomingData) {
        if (
            window.confirm('Are you sure you want to delete this prescription?')
        ) {
            dispatch(DeletePrescription(prescription));
        }
    }

    return (
        <div
            style={{
                display: 'inline-block',
                position: 'relative',
                marginTop: 10,
                marginRight: 20,
            }}
        >
            {props.src.fileType === 'application/pdf' ? (
                <Row style={{ marginLeft: 10 }}>
                    <Row>
                        <img
                            alt="reportPdf"
                            src={pdfLogo}
                            onClick={() => window.open(props.src.sasUrl)}
                            width="100"
                            height="60"
                            style={{
                                width: 70,
                                height: 60,
                            }}
                            key={props.index}
                        />
                    </Row>
                    <Row>
                        <div
                            style={{
                                width: 60,
                                fontSize: 10,
                            }}
                        >
                            {props.src.fileType === 'application/pdf' && (
                                <div>{props.src.fileName}</div>
                            )}
                        </div>
                    </Row>
                </Row>
            ) : (
                <img
                    alt=""
                    src={props.src.sasUrl}
                    onClick={() => props.openImage(props.index)}
                    key={props.index}
                    style={{ width: 100, height: 100 }}
                />
            )}

            {props.showUploadedTime && (
                <div>
                    {props.src.uploadedDateTime
                        ? dateToDateString(props.src.uploadedDateTime)
                        : '--/--/---'}
                </div>
            )}

            {props.showCancelImageButton && (
                <div
                    onClick={() => dispatch(deleteFile(props.src))}
                    style={{
                        position: 'absolute',
                        top: -10,
                        right: -15,
                    }}
                >
                    <CancelIcon />
                </div>
            )}
        </div>
    );
};
