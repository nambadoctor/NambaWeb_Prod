import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GetAllAppointments } from '../../Actions/AppointmentActions';
import { RootStore } from '../../store';
import IDeNormalisedAppointmentData from '../../Types/DeNormalisedAppointment';
import { convertDaysIntoNearestUnit, getReadableDateString } from '../../Utils/GeneralUtils';
import { PeopleAltRounded, VideoCameraFront } from '@mui/icons-material';
import "../../Styles/main_page.css"
import "../../Styles/appointment_table.css"

export default function AppointmentsTable() {
    const dispatch = useDispatch();
    const appointmentState = useSelector((state: RootStore) => state.AppointmentReducer);

    const getAllAppointments = () => {
        dispatch(GetAllAppointments());
    };

    useEffect(() => {
        getAllAppointments()
    }, [])

    function getLastVisitForCustomer(customerId: string) {
        var lastVisitedDate = new Date();
        appointmentState.appointments.forEach(element => {
            if (element.appointment.customerId == customerId) {
                var currentAppointmentDate = new Date(element.appointment.scheduledAppointmentStartTime);
                if (currentAppointmentDate < lastVisitedDate) {
                    lastVisitedDate = currentAppointmentDate;
                }
            }
        })

        var currentDate = new Date();
        var Time = currentDate.getTime() - lastVisitedDate.getTime();
        var days = Time / (1000 * 3600 * 24);
        return convertDaysIntoNearestUnit(days);
    }

    return (
        <div className="appointmentTable">
            {/* <div className="row">
                <h3 className="appointmentTableTitle" style={{ marginRight: 20, marginBottom: 20 }}>Appointments</h3>
                <div className="rowWith20PXGap">
                    <CustomisedMenus menuOptions={DateRangeMenuItems} selectedMenuOption={this.state.selectedTimeMenuOption} onMenuOptionChange={this.onPredefinedTimeRangeDropDownChange}></CustomisedMenus>
                    <ResponsiveDateRangePicker onDateRangeChange={this.onDateRangeChanged} value={this.state.dateSelectedvalue}></ResponsiveDateRangePicker>
                </div>
            </div> */}
            {/* <AppointmentsVitalsDisplayCards appointments={appointments} onCategoryChange={this.changeFilter} selectedCategory={this.state.selectedCategory}></AppointmentsVitalsDisplayCards> */}
            {/* <Divider style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}></Divider> */}
            <table className="appointmentTableTable">
                <tr className="appointmentTableTr">
                    <th className="appointmentTableTh"></th>
                    <th className="appointmentTableTh">Customer Name</th>
                    <th className="appointmentTableTh">Customer Last Visit</th>
                    <th className="appointmentTableTh">Status</th>
                    <th className="appointmentTableTh">Appointment Date</th>
                </tr>
                {appointmentState.appointments.length != 0 &&
                    appointmentState.appointments
                        .reverse()
                        //.filter(appointment => (appointment.appointment.status == this.state.selectedCategory || this.state.selectedCategory == "Total"))
                        .map((appointment: IDeNormalisedAppointmentData, index: number) => (
                            <tr className="appointmentTableTr">
                                <span className="appointmentTableName">
                                    {appointment.appointment.isInPersonAppointment ?
                                        <PeopleAltRounded className="appointmentStatusIcon"></PeopleAltRounded> :
                                        <VideoCameraFront className="appointmentStatusIcon"></VideoCameraFront>}
                                </span>
                                <td className="appointmentTableCusName">{appointment.customerName}</td>
                                <td className="appointmentTableCusLastVisited">{getLastVisitForCustomer(appointment.appointment.customerId)}</td>
                                <td className="appointmentTableStatus">
                                    <button className={"appointmentTableButton " + appointment.appointment.status}>{appointment.appointment.status}</button>
                                </td>
                                <td className="appointmentTableDate">{getReadableDateString(appointment.appointment.scheduledAppointmentStartTime)}</td>
                            </tr>
                        ))}
            </table>
        </div>
    )
}
