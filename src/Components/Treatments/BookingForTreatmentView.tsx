import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';

export default function BookingForTreatmentView() {
    const treatment = useSelector(
        (state: RootState) => state.TreatmentState.selectedTreatment,
    );

    return (
        <Alert severity="info">
            Booking For {treatment?.name} in {treatment?.treatmentPlanName}
        </Alert>
    );
}
