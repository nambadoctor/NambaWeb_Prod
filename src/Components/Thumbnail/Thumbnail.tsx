import React from 'react';
import { Row } from 'react-bootstrap';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch } from 'react-redux';
import { DeletePrescription } from '../../service-actions/PrescriptionActions';
import IPrescriptionIncomingData from '../../types/IncomingDataModels/PrescriptionIncoming';
import { dateToDateString } from '../../utils/GeneralUtils';
import { DeleteReport } from '../../service-actions/ReportActions';

interface ThumbnailProps {
    src: any;
    index: number;
    openImage: (index: number) => void;
    showCancelImageButton: boolean;
    showUploadedTime: boolean;
    type: string;
}

export const Thumbnail: React.FC<ThumbnailProps> = (props) => {
    const dispatch = useDispatch();

    function deleteFile(file: any) {
        if (
            window.confirm('Are you sure you want to delete this prescription?')
        ) {
            if (props.type === 'Prescription') {
                dispatch(DeletePrescription(file));
            } else if (props.type === 'Report') {
                dispatch(DeleteReport(file));
            }
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
                <Row
                    style={{ marginLeft: 10 }}
                    onClick={() => window.open(props.src.sasUrl)}
                >
                    <Row>
                        <img
                            alt="reportPdf"
                            src={'/images/pdf.png'}
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
                                width: 50,
                                fontSize: 10,
                                textDecorationLine: 'underline',
                            }}
                            onClick={() => window.open(props.src.sasUrl)}
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
