import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export default function ConsultationHeader() {
    const currentAppointment = useSelector((state:RootState) => state.ConsultationState.currentAppointment)
    const currentCustomer = useSelector((state:RootState) => state.ConsultationState.currentCustomer)
    
    return (
        <div>
        </div>
    )
}
