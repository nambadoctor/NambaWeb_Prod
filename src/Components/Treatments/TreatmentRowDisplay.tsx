import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { ITreatmentIncoming } from '../../Types/IncomingDataModels/TreatmentIncoming';
import { useDispatch } from 'react-redux';
import { SetTreatmentPlanPopup } from '../../Actions/TreatmentActions';
import { Row, Col } from 'react-bootstrap';

import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreTimeIcon from '@mui/icons-material/MoreTime';

interface TreatmentRowProps {
    treatment: ITreatmentIncoming;
    SelectTreatment: (treatment: ITreatmentIncoming) => void;
    selectedID?: string;
    showBookAppointmentButton: boolean;
}

export const TreatmentRowDisplay: React.FC<TreatmentRowProps> = (props) => {
    const dispatch = useDispatch();

    return (
        <TableRow
            key={props.treatment.treatmentId}
            selected={props.selectedID ? props.selectedID === props.treatment.treatmentId : false}
        >
            <TableCell align="left">
                {props.treatment.treatmentPlanName}
            </TableCell>
            <TableCell align="left">{props.treatment.name}</TableCell>
            <TableCell align="left">
                {props.treatment.actualProcedure}
            </TableCell>
            <TableCell align="left">
                <Row>
                    <Col>
                        <div
                            onClick={() => {
                                props.SelectTreatment(props.treatment);
                                dispatch(SetTreatmentPlanPopup(true));
                            }}
                        >
                            <VisibilityIcon></VisibilityIcon>
                        </div>
                    </Col>
                    {props.showBookAppointmentButton ?? (
                        <Col>
                            <div
                                onClick={() =>
                                    props.SelectTreatment(props.treatment)
                                }
                            >
                                <MoreTimeIcon></MoreTimeIcon>
                            </div>
                        </Col>
                    )}
                </Row>
            </TableCell>
        </TableRow>
    );
};
