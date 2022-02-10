import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { createSelector } from 'reselect';
import { isDatesEqual } from '../../Utils/GeneralUtils';
import { ITreatmentIncoming } from '../../Types/IncomingDataModels/TreatmentIncoming';
import {TreatmentCard} from './TreatmentCard';

export default function Treatments() {
    const dates = useSelector(
        (state: RootState) => state.SelectedDatesState.selectedDateRage,
    );

    const showTreatments = createSelector(
        (state: RootState) => state.TreatmentState.treatments,
        (treatments) =>
            treatments.filter((treatment) =>
                isDatesEqual(dates[0], new Date(treatment.plannedDateTime)),
            ),
    );

    const treatments = useSelector(showTreatments);

    return <div>
        {treatments.map((treatment: ITreatmentIncoming, index: number) => (
            <TreatmentCard treatment={treatment}></TreatmentCard>
        ))}
    </div>;
}
