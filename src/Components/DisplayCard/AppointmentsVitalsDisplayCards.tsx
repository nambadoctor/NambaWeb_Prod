import useAppointmentsVitalsDisplayCardsHook from "../../CustomHooks/useAppointmentsVitalsDisplayCardsHook";
import "../../Styles/displaycard.css";

export default function AppointmentsVitalsDisplayCards() {
  const {
    getCardStyling,
    setCategoryChange,
    appointmentState,
    getNumOfAppointmentsByStatus,
  } = useAppointmentsVitalsDisplayCardsHook();
  return (
    <div className="displaycard">
      <div
        className={getCardStyling("Total")}
        onClick={() => setCategoryChange("Total")}
      >
        <span className="displaycardTitle">Total: </span>
        <span className="displaycardMoney">
          {appointmentState.filteredAppointments.length}
        </span>
      </div>
      <div
        className={getCardStyling("Confirmed")}
        onClick={() => setCategoryChange("Confirmed")}
      >
        <span className="displaycardTitle">Confirmed: </span>
        <span className="displaycardMoney">
          {getNumOfAppointmentsByStatus("Confirmed")}
        </span>
      </div>
      <div
        className={getCardStyling("StartedConsultation")}
        onClick={() => setCategoryChange("StartedConsultation")}
      >
        <span className="displaycardTitle">Started: </span>
        <span className="displaycardMoney">
          {getNumOfAppointmentsByStatus("StartedConsultation")}
        </span>
      </div>
      <div
        className={getCardStyling("Finished")}
        onClick={() => setCategoryChange("Finished")}
      >
        <span className="displaycardTitle">Finished: </span>
        <span className="displaycardMoney">
          {getNumOfAppointmentsByStatus("Finished")}
        </span>
      </div>
    </div>
  );
}
