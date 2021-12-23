import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SetAppointmentCategory } from '../../Actions/AppointmentCategoryAction';
import { RootStore } from '../../store';
import "../../Styles/displaycard.css";

export default function AppointmentsVitalsDisplayCards() {
    const dispatch = useDispatch();
    const appointmentCategoryState = useSelector((state: RootStore) => state.AppointmentCategoryReducer);
    const appointmentState = useSelector((state: RootStore) => state.AppointmentReducer);

    function getNumOfAppointmentsByStatus(status: String): number {
        var count = 0;
        appointmentState.appointments.forEach(element => {
            if (element.appointment.status == status) {
                count += 1;
            }
        });

        return count;
    }

    function getCardStyling(expectedCategory: string) {
        if (appointmentCategoryState.selectedCategory == expectedCategory) {
            return "displaycardItem selected"
        } else {
            return "displaycardItem"
        }
    }

    function setCategoryChange (category:string) {
        dispatch(SetAppointmentCategory(category))
    }

    return (
        <div className="displaycard">
            <div className={getCardStyling("Total")}
                onClick={() => setCategoryChange("Total")}>
                <span className="displaycardTitle">Total: </span>
                <span className="displaycardMoney">{appointmentState.appointments.length}</span>
            </div>
            <div className={getCardStyling("Confirmed")}
                onClick={() => setCategoryChange("Confirmed")}>
                <span className="displaycardTitle">Confirmed:  </span>
                <span className="displaycardMoney">{getNumOfAppointmentsByStatus("Confirmed")}</span>
            </div>
            <div className={getCardStyling("StartedConsultation")}
                onClick={() => setCategoryChange("StartedConsultation")}>
                <span className="displaycardTitle">Started:  </span>
                <span className="displaycardMoney">{getNumOfAppointmentsByStatus("StartedConsultation")}</span>
            </div>
            <div className={getCardStyling("Finished")}
                onClick={() => setCategoryChange("Finished")}>
                <span className="displaycardTitle">Finished:  </span>
                <span className="displaycardMoney">{getNumOfAppointmentsByStatus("Finished")}</span>
            </div>
        </div>
    )
}
