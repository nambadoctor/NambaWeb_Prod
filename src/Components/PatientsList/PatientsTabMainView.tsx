import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PatientInfoColumnView from './PatientInfoColumnView';
import PatientsTableView from './PatientsTableView';

export default function PatientsTabMainView() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md="9">
                        <PatientsTableView></PatientsTableView>
                    </Col>
                    <Col md="3">
                        <PatientInfoColumnView></PatientInfoColumnView>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
