
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddPatientView from '../AddPatientAndBookAppointment/AddPatientView';
import EditPatientView from '../EditPatient/EditPatientView';
import { PatientsTableView } from './PatientsTableView';

export default function PatientsTabMainView() {
    const [isSchedulingAppointment, setIsSchedulingAppointment] =
        useState(false);


    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md="9">
                        <PatientsTableView
                            setIsSchedulingAppointment={
                                setIsSchedulingAppointment
                            }
                        ></PatientsTableView>
                    </Col>
                    <Col md="3">
                        <h5 style={{ marginBottom: 20 }}>Add/Edit Patient</h5>
                        {isSchedulingAppointment ? (
                            <AddPatientView></AddPatientView>
                        ) : (
                            <EditPatientView></EditPatientView>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
