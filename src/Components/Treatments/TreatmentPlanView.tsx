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
    const classes = usePatientTableStyles();
    const { treatmentPlans } = useTreatmentsHook();

    return (
        <TableContainer component={Paper} style={{ borderRadius: 15 }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
                    {treatmentPlans &&
                        treatmentPlans.length > 0 &&
                        treatmentPlans[0].treatments &&
                        treatmentPlans[0].treatments.length > 0 &&
                        treatmentPlans[0]!.treatments.map(
                            (treatment: ITreatmentIncoming, index: number) => (
                                <TreatmentPlanRowDisplay
                                    treatment={treatment}
                                ></TreatmentPlanRowDisplay>
                            ),
                        )}
                    <NewTreatmentRow></NewTreatmentRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
