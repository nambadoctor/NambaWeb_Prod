import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { usePatientTableStyles } from '../UIHelperComponents/TableStyles';
import useTreatmentsHook from '../../CustomHooks/useTreatmentsHook';
import { ITreatmentIncoming } from '../../Types/IncomingDataModels/TreatmentIncoming';
import { ITreatmentPlanIncoming } from '../../Types/IncomingDataModels/TreatmentPlanIncoming';
import { TreatmentRow } from './TreatmentRow';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { NewTreatmentRow } from './NewTreatmentRow';

interface TreatmentsTableProps {
    treatmentPlans: ITreatmentPlanIncoming[] | null;
}

export const TreatmentPlansTable: React.FC<TreatmentsTableProps> = (props) => {
    const classes = usePatientTableStyles();

    const currentCustomer = useSelector(
        (state: RootState) => state.CurrentCustomerState.Customer,
    );

    return (
        <div>
            {props.treatmentPlans &&
                props.treatmentPlans.length > 0 &&
                props.treatmentPlans
                    .filter(
                        (treatment) =>
                            treatment.customerId ===
                            currentCustomer?.customerId,
                    )
                    .map(
                        (
                            treatmentPlan: ITreatmentPlanIncoming,
                            index: number,
                        ) => (
                            <>
                                <h4>{treatmentPlan.treatmentPlanName}</h4>
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
                                                    className={
                                                        classes.tableHeaderCell
                                                    }
                                                    align="left"
                                                >
                                                    Instructions
                                                </TableCell>
                                                <TableCell
                                                    className={
                                                        classes.tableHeaderCell
                                                    }
                                                    align="left"
                                                >
                                                    Date
                                                </TableCell>
                                                <TableCell
                                                    className={
                                                        classes.tableHeaderCell
                                                    }
                                                    align="left"
                                                >
                                                    Actions
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {treatmentPlan.treatmentPlanName &&
                                                treatmentPlan.treatments.map(
                                                    (
                                                        treatment: ITreatmentIncoming,
                                                        index: number,
                                                    ) => (
                                                        <TreatmentRow
                                                            treatment={
                                                                treatment
                                                            }
                                                        ></TreatmentRow>
                                                    ),
                                                )}
                                            <NewTreatmentRow treatmentPlanId={treatmentPlan.treatmentPlanId}></NewTreatmentRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </>
                        ),
                    )}
        </div>
    );
};
