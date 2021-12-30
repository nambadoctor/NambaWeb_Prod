import { useDispatch, useSelector } from "react-redux";
import { SetAppointmentCategory } from "../Actions/AppointmentCategoryAction";
import { RootStore } from "../store";

export default function useAppointmentsVitalsDisplayCardsHook() {
  const dispatch = useDispatch();
  const appointmentCategoryState = useSelector(
    (state: RootStore) => state.AppointmentCategoryReducer
  );
  const appointmentState = useSelector(
    (state: RootStore) => state.AppointmentReducer
  );

  function getNumOfAppointmentsByStatus(status: String): number {
    var count = 0;
    appointmentState.filteredAppointments.forEach((element) => {
      if (element.appointment.status == status) {
        count += 1;
      }
    });

    return count;
  }

  function getCardStyling(expectedCategory: string) {
    if (appointmentCategoryState.selectedCategory == expectedCategory) {
      return "displaycardItem selected";
    } else {
      return "displaycardItem";
    }
  }

  function setCategoryChange(category: string) {
    dispatch(SetAppointmentCategory(category));
  }

  return {
    getCardStyling,
    setCategoryChange,
    appointmentState,
    getNumOfAppointmentsByStatus,
  };
}
