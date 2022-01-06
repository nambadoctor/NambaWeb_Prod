import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ConsultationHeader from './ConsultationHeader'

export default function ConsultationView() {

    return (
        <div>
            <ConsultationHeader></ConsultationHeader>
        </div>
    )
}
