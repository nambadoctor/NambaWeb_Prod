import { useState } from 'react';
import { Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { createSelector } from 'reselect';
import {
    TableRow,
    TableCell,
    TableContainer,
    Paper,
    TableBody,
    TableHead,
    Table,
} from '@mui/material';
import { ITreatmentIncoming } from '../../Types/IncomingDataModels/TreatmentIncoming';
import { usePatientTableStyles } from '../UIHelperComponents/TableStyles';
import { getReadableDateAndTimeString } from '../../Utils/GeneralUtils';
import ModeIcon from '@mui/icons-material/Mode';
import { TreatmentPlanRowDisplay } from './TreatmentPlanRowDisplay';

export default function TreatmentPlanView() {
    const dispatch = useDispatch();

    const classes = usePatientTableStyles();

    const [selectedID, setselectedID] = useState('');

    const selectedTreatment = useSelector(
        (state: RootState) => state.TreatmentState.selectedTreatment,
    );

    const treatmentPlanQuery = createSelector(
        (state: RootState) => state.TreatmentState.TreatmentPlans,
        (treatments) =>
            treatments.filter(
                (treatment) =>
                    treatment.treatmentPlanId ==
                    selectedTreatment?.treatmentPlanId,
            ),
    );

    const treatmentPlans = useSelector(treatmentPlanQuery);

    const showTreatmentPopup = useSelector((state:RootState) => state.TreatmentState.showTreatmentPlanPopup)

    return (
        <div>
            {(showTreatmentPopup && treatmentPlans.length) && (
                <Modal
                    show={true}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <div style={{ padding: 20 }}>
                        <h1>{treatmentPlans[0].treatmentPlanName}</h1>

                        <TableContainer
                            component={Paper}
                            style={{ borderRadius: 15 }}
                        >
                            <Table
                                sx={{ minWidth: 700 }}
                                aria-label="customized table"
                            >
                                <TableHead>
                                    <TableRow style={{ height: 10 }}>
                                        <TableCell
                                            className={classes.tableHeaderCell}
                                            align="left"
                                        >
                                            Treatment Name
                                        </TableCell>
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
                                            Planned Date
                                        </TableCell>
                                        <TableCell
                                            className={classes.tableHeaderCell}
                                            align="left"
                                        ></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {treatmentPlans[0].treatments.length !==
                                        0 &&
                                        treatmentPlans[0]!.treatments.map(
                                            (
                                                treatment: ITreatmentIncoming,
                                                index: number,
                                            ) => (
                                                <TreatmentPlanRowDisplay
                                                    treatment={treatment}
                                                ></TreatmentPlanRowDisplay>
                                            ),
                                        )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Modal>
            )}
        </div>
    );
}
