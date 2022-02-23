import { ITreatmentIncoming } from '../../Types/IncomingDataModels/TreatmentIncoming';
import { usePatientTableStyles } from '../UIHelperComponents/TableStyles';
import useTreatmentsHook from '../../CustomHooks/useTreatmentsHook';
import { TreatmentCard } from './TreatmentCard';
import { ITreatmentPlanIncoming } from '../../Types/IncomingDataModels/TreatmentPlanIncoming';
import { NewTreatmentCard } from './NewTreatmentCard';

export default function TreatmentPlanView() {
    const classes = usePatientTableStyles();
    const { treatmentPlans } = useTreatmentsHook();

    return (
        <div>
            {treatmentPlans &&
                treatmentPlans.length > 0 &&
                treatmentPlans.map(
                    (treatmentPlan: ITreatmentPlanIncoming, index: number) => (
                        <div>
                            <h4>{treatmentPlan.treatmentPlanName}</h4>
                            <div className="row">
                                {treatmentPlan.treatmentPlanName &&
                                    treatmentPlan.treatments.map(
                                        (
                                            treatment: ITreatmentIncoming,
                                            index: number,
                                        ) => (
                                            <TreatmentCard
                                                treatment={treatment}
                                            ></TreatmentCard>
                                        ),
                                    )}
                                <NewTreatmentCard
                                    treatmentPlanId={
                                        treatmentPlan.treatmentPlanId
                                    }
                                ></NewTreatmentCard>
                            </div>
                        </div>
                    ),
                )}
        </div>
    );
}
