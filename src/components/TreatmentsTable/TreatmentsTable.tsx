import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ITreatmentPlanIncoming } from '../../types/IncomingDataModels/TreatmentPlanIncoming';
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
                            _index: number,
                        ) => (
                            <TreatmentPlanContainer
                                treatmentPlan={treatmentPlan}
                            ></TreatmentPlanContainer>
                        ),
                    )}
        </div>
    );
};
