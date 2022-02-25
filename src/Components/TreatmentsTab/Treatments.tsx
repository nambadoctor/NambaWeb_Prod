import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { UpcomingTreatmentCard } from './UpcomingTreatmentsCard';

export default function Treatments() {
    const treatments = useSelector(
        (state: RootState) => state.TreatmentState.treatments,
    );

    return (
        <div style={{padding: 10}}>
            Upcoming Treatments
            <div className="row" style={{marginBottom: 50}}>
                {treatments &&
                    treatments
                        .filter(
                            (treatment) =>
                                new Date(treatment.plannedDateTime) >
                                new Date(),
                        )
                        .map((treatment, index) => (
                            <UpcomingTreatmentCard
                                treatment={treatment}
                            ></UpcomingTreatmentCard>
                        ))}
            </div>

            Finished Treatments
            <div className="row">
                {treatments &&
                    treatments
                        .filter(
                            (treatment) =>
                                new Date(treatment.plannedDateTime) <
                                new Date(),
                        )
                        .map((treatment, index) => (
                            <UpcomingTreatmentCard
                                treatment={treatment}
                            ></UpcomingTreatmentCard>
                        ))}
            </div>
        </div>
    );
}
