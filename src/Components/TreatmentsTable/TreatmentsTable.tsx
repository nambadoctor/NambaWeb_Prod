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
import { TreatmentPlanContainer } from './TreatmentPlanContainer';

interface TreatmentsTableProps {
    treatmentPlans: ITreatmentPlanIncoming[] | null;
}

export const TreatmentPlansTable: React.FC<TreatmentsTableProps> = (props) => {
    

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
                            <TreatmentPlanContainer treatmentPlan={treatmentPlan}></TreatmentPlanContainer>
                        ),
                    )}
        </div>
    );
};
