import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ReportUploadPicker from '../ReportUpload/ReportUploadPicker'
import ReportImageView from '../ReportUpload/ReportImageView'
import ConsultationHeader from './ConsultationHeader'
import PrescriptionUploadPicker from '../PrescriptionUpload/PrescriptionUploadPicker'
import PrescriptionImageView from '../PrescriptionUpload/PrescriptionImageView'

export default function ConsultationView() {

    const consultationState = useSelector((state : RootState) => state.ConsultationState.currentCustomerReports)

    return (
        <div>
            <ConsultationHeader></ConsultationHeader>
            <ReportUploadPicker></ReportUploadPicker>
            <ReportImageView></ReportImageView>

            <PrescriptionUploadPicker></PrescriptionUploadPicker>
            <PrescriptionImageView></PrescriptionImageView>
        </div>
    )
}
