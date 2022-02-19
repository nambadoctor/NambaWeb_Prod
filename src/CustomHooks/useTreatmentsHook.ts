import { useDispatch, useSelector } from "react-redux";
import { createSelector } from 'reselect';
import { RootState } from "../store";

export default function useTreatmentsHook() {

    const dispatch = useDispatch();

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


  return { selectedTreatment, treatmentPlans };
}
