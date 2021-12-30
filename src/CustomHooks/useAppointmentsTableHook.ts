import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../store";
import {
  GetAllAppointments,
  setFilteredAppointments,
} from "../Actions/AppointmentActions";
import AppointmentStatusEnum from "../Types/Enums/AppointmentStatusEnums";
import { convertDaysIntoNearestUnit } from "../Utils/GeneralUtils";

export default function useAppointmentsTableHook() {
  const dispatch = useDispatch();

  const appointmentState = useSelector(
    (state: RootStore) => state.AppointmentReducer
  );
  const appointmentCategoryState = useSelector(
    (state: RootStore) => state.AppointmentCategoryReducer
  );
  const selectedDatesState = useSelector(
    (state: RootStore) => state.SelectedDatesReducer
  );
  const organisationState = useSelector((state: RootStore) => state.OrgReducer);

  const getAllAppointments = () => {
    dispatch(GetAllAppointments());
  };

  useEffect(() => {
    dispatch(
      setFilteredAppointments(
        selectedDatesState.dates,
        appointmentState.appointments,
        organisationState.selectedOrganisation
      )
    );
  }, [
    appointmentCategoryState.selectedCategory,
    selectedDatesState.dates,
    organisationState.selectedOrganisation,
  ]);

  useEffect(() => {
    getAllAppointments();
  }, []);

  function getLastVisitForCustomer(customerId: string) {
    var lastVisitedDate = new Date();
    appointmentState.appointments.forEach((element) => {
      if (element.appointment.customerId === customerId) {
        var currentAppointmentDate = new Date(
          element.appointment.scheduledAppointmentStartTime
        );
        if (currentAppointmentDate < lastVisitedDate) {
          lastVisitedDate = currentAppointmentDate;
        }
      }
    });

    var currentDate = new Date();
    var Time = currentDate.getTime() - lastVisitedDate.getTime();
    var days = Time / (1000 * 3600 * 24);
    return convertDaysIntoNearestUnit(days);
  }

  function getDisplayNameForAppointmentState(appointmentState: string) {
    switch (appointmentState) {
      case AppointmentStatusEnum.Confirmed:
        return "Confirmed";
      case AppointmentStatusEnum.StartedConsultation:
        return "Started";
      case AppointmentStatusEnum.Finished:
        return "Finished";
      case AppointmentStatusEnum.Cancelled:
        return "Cancelled";
      default:
        break;
    }
  }

  function getBackgroundColorForAppointmentState(appointmentState: string) {
    // return is [background color, font color]
    var colorCodesToReturn = ["", ""];
    switch (appointmentState) {
      case AppointmentStatusEnum.Confirmed:
        colorCodesToReturn = ["#e5faf2", "#3bb077"];
        break;
      case AppointmentStatusEnum.StartedConsultation:
        colorCodesToReturn = ["#ebf1fe", "#2a7ade"];
        break;
      case AppointmentStatusEnum.Finished:
        colorCodesToReturn = ["#fff0f1", "#d95087"];
        break;
      case AppointmentStatusEnum.Cancelled:
        colorCodesToReturn = ["", ""];
        break;
      default:
        break;
    }

    return colorCodesToReturn;
  }

  return {
    appointmentState,
    appointmentCategoryState,
    getLastVisitForCustomer,
    getBackgroundColorForAppointmentState,
    getDisplayNameForAppointmentState,
  };
}
