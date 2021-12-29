import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCustomersForServiceProviderInOrg } from '../../Actions/CustomerActions'
import { RootStore } from '../../store'
import "../../Styles/patient_table.css"
import ICustomerData from '../../Types/Customer'
import { getReadableDateString } from '../../Utils/GeneralUtils'

export default function PatientsTable() {
    const dispatch = useDispatch()

    const customerState = useSelector((state: RootStore) => state.CustomersReducer)

    useEffect(() => {
        dispatch(GetAllCustomersForServiceProviderInOrg())
    }, [])

    return (
        <div>
            <div className="patientTableContainer">
                <h4>Appointments</h4>
                <div className="patientTable">
                    <table className="patientTableTable">
                        <tr className="patientTableTr">
                            {/* <th className="patientTableTh"></th> */}
                            <th className="patientTableTh">Name</th>
                            <th className="patientTableTh">Age/Gender </th>
                            <th className="patientTableTh">Phone Number</th>
                            <th className="patientTableTh">Added On</th>
                        </tr>
                        {customerState.customers.length != 0 &&
                            customerState.customers
                                .map((customer: ICustomerData, index: number) => (
                                    <tr className="patientTableTr">
                                        {/* <span className="patientTableName">
                                            {customer.appointment.isInPersonAppointment ?
                                                <PeopleAltRounded className="patientStatusIcon"></PeopleAltRounded> :
                                                <VideoCameraFront className="patientStatusIcon"></VideoCameraFront>}
                                        </span> */}
                                        <td className="patientTableCusName">{customer.firstName + " " + customer.lastName}</td>
                                        <td className="patientTableCusLastVisited">{customer.gender}/{customer.age}</td>
                                        <td className="patientTableStatus">
                                            <button className={"patientTableButton"}>{customer.phoneNumbers[0].number}</button>
                                        </td>
                                        <td className="patientTableDate">{getReadableDateString(customer.createdDate)}</td>
                                    </tr>
                                ))
                                .reverse()}
                    </table>
                </div>
            </div>
        </div>
    )
}
