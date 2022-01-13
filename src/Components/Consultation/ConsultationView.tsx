import ReportUploadPicker from '../ReportUpload/ReportUploadPicker'
import ReportImageView from '../ReportUpload/ReportImageView'
import ConsultationHeader from './ConsultationHeader'
import PrescriptionUploadPicker from '../PrescriptionUpload/PrescriptionUploadPicker'
import PrescriptionImageView from '../PrescriptionUpload/PrescriptionImageView'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GetAppointmentForConsultation } from '../../Actions/ConsultationActions'
import { Col, Row } from 'react-bootstrap'
import "../../../src/App.css"

export default function ConsultationView() {

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        if (id) { dispatch(GetAppointmentForConsultation(id)) }
    }, [])

    return (
        <div>
            <ConsultationHeader></ConsultationHeader>
            <Row style={{ margin: 20 }}>
                <Col md="6">
                    <div className="blue_filled_rounded_box_top">
                        <h3 className="blue_filled_rounded_box_top_title_item">Reports</h3>
                        <ReportUploadPicker></ReportUploadPicker>
                    </div>
                    <div className="blue_border_rounded_white_box">
                        <ReportImageView></ReportImageView>
                    </div>
                </Col>

                <Col md="6">
                    <div className="blue_filled_rounded_box_top">
                        <h3 className="blue_filled_rounded_box_top_title_item">Prescriptions</h3>
                        <PrescriptionUploadPicker></PrescriptionUploadPicker>
                    </div>
                    <div className="blue_border_rounded_white_box">
                        <PrescriptionImageView></PrescriptionImageView>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
