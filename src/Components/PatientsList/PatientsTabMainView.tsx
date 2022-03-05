import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import PatientInfoColumnView from './PatientInfoColumnView'
import PatientsTableView from './PatientsTableView'

export default function PatientsTabMainView() {

    const currentCustomer = useSelector((state:RootState) => state.CurrentCustomerState.Customer)

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={currentCustomer ? "6" : "9"}><PatientsTableView></PatientsTableView></Col>
                    <Col md={currentCustomer ? "6" : "3"}><PatientInfoColumnView></PatientInfoColumnView></Col>
                </Row>
            </Container>
        </div>
    )
}
