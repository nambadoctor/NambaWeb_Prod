import { useDispatch, useSelector } from "react-redux";
import { createSelector } from 'reselect';
import { RootState } from "../store";
import { ITreatmentPlanIncoming } from "../Types/IncomingDataModels/TreatmentPlanIncoming";

export default function useTreatmentsHook() {

    const currentAppointment = useSelector((state: RootState) => state.ConsultationState.Appointment);

    const treatmentPlanQuery = createSelector(
        (state: RootState) => state.CurrentCustomerState.TreatmentPlans,
        (treatmentsPlans) =>
            treatmentsPlans && treatmentsPlans.filter(
                (treatmentPlan) =>
                    currentAppointment && currentAppointment?.serviceRequestId === treatmentPlan.originServiceRequestId,
            ),
    );

    const appointmentTreatmentQuery = createSelector(
        (state: RootState) => state.CurrentCustomerState.TreatmentPlans,
        (treatmentPlans) =>
            treatmentPlans && treatmentPlans[0].treatments && treatmentPlans[0].treatments.filter(
                (treatment) =>
                (
                    treatment.serviceRequestId === currentAppointment?.serviceRequestId
                ),
            ),
    );

    const treatmentPlans = useSelector(treatmentPlanQuery);
    const appointmentTreatments = useSelector(appointmentTreatmentQuery);

    return { appointmentTreatments, treatmentPlans };
}
