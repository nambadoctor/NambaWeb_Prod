import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
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
import { TreatmentPlanRowDisplay } from './TreatmentPlanRowDisplay';
import useTreatmentsHook from '../../CustomHooks/useTreatmentsHook';
import NewTreatmentRow from './NewTreatmentRow';

export default function TreatmentPlanView() {
    const dispatch = useDispatch();

    const classes = usePatientTableStyles();

    const { selectedTreatment, treatmentPlans } = useTreatmentsHook();

    const showTreatmentPopup = useSelector(
        (state: RootState) => state.TreatmentState.showTreatmentPlanPopup,
    );

    return (
        <div>
            {showTreatmentPopup && treatmentPlans && treatmentPlans.length > 0 && (
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
                                    <NewTreatmentRow></NewTreatmentRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Modal>
            )}
        </div>
    );
}
