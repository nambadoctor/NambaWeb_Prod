import { useSelector } from "react-redux";
import { createSelector } from 'reselect';
import { RootState } from "../store";

export default function useTreatmentsHook() {

    const currentCustomerTreatments = useSelector((state: RootState) => state.CurrentCustomerState.TreatmentPlans)

    return { currentCustomerTreatments };
}
