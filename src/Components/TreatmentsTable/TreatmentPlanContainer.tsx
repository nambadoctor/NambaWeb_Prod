import {
    TableRow,
    TableCell,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ITreatmentIncoming } from '../../types/IncomingDataModels/TreatmentIncoming';
import { ITreatmentPlanIncoming } from '../../types/IncomingDataModels/TreatmentPlanIncoming';
import { NewTreatmentRow } from './NewTreatmentRow';
import { TreatmentRow } from './TreatmentRow';
import { usePatientTableStyles } from '../UIHelperComponents/TableStyles';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';

interface TreatmentPlanContainerProps {
    treatmentPlan: ITreatmentPlanIncoming;
}

export const TreatmentPlanContainer: React.FC<TreatmentPlanContainerProps> = (
    props,
) => {
    const classes = usePatientTableStyles();

    const [minimized, setMinimized] = useState(false);

    const currentAppointment = useSelector(
        (state: RootState) => state.ConsultationState.Appointment,
    );

    useEffect(() => {
        if (
            currentAppointment?.serviceRequestId !==
            props.treatmentPlan.originServiceRequestId
        ) {
            setMinimized(true);
        }
    }, []);

    return (
        <div style={{ padding: 10 }}>
            <div style={{ display: 'flex', marginBottom: 15 }}>
                <h4>{props.treatmentPlan.treatmentPlanName}</h4>
                <Button
                    variant="outlined"
                    size="small"
                    style={{ marginLeft: 100 }}
                    onClick={() => setMinimized(!minimized)}
                >
                    {minimized ? 'Expand' : 'Collapse'}
                </Button>
            </div>
            {!minimized && (
                <TableContainer component={Paper} style={{ borderRadius: 15 }}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow style={{ height: 10 }}>
                                <TableCell
                                    className={classes.tableHeaderCell}
                                    align="left"
                                >
                                    Instructions
                                </TableCell>
                                <TableCell
                                    className={classes.tableHeaderCell}
                                    align="left"
                                >
                                    Date
                                </TableCell>
                                <TableCell
                                    className={classes.tableHeaderCell}
                                    align="left"
                                >
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.treatmentPlan.treatmentPlanName &&
                                props.treatmentPlan.treatments.map(
                                    (
                                        treatment: ITreatmentIncoming,
                                        index: number,
                                    ) => (
                                        <TreatmentRow
                                            treatment={treatment}
                                        ></TreatmentRow>
                                    ),
                                )}
                            <NewTreatmentRow
                                treatmentPlanId={
                                    props.treatmentPlan.treatmentPlanId
                                }
                            ></NewTreatmentRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};
