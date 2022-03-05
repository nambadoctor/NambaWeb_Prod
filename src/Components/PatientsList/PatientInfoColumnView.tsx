import { Divider } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import EditPatientView from '../EditPatient/EditPatientView';
import AllNotesView from '../Notes/AllNotesView';
import NewNoteCard from '../Notes/NewNoteCardView';
import NotesView from '../Notes/NotesView';
import { AllPrescriptionImagesView } from '../PrescriptionUpload/AllPrescriptionImagesView';
import { AllReportImagesView } from '../ReportUpload/AllReportImagesView';
import { TreatmentPlansTable } from '../TreatmentsTable/TreatmentsTable';

export default function PatientInfoColumnView() {
    const currentCustomer = useSelector(
        (state: RootState) => state.CurrentCustomerState,
    );

    return (
        <div>
            <Row>
                <Col>
                    <h5 style={{ marginBottom: 20 }}>Add/Edit Patient</h5>
                    <EditPatientView></EditPatientView>

                    <Divider
                        style={{
                            marginTop: 10,
                            marginBottom: 10,
                        }}
                    ></Divider>

                    {currentCustomer.Customer && (
                        <div>
                            <h5>History Of Notes</h5>
                            <NewNoteCard></NewNoteCard>
                            <AllNotesView></AllNotesView>
                        </div>
                    )}
                </Col>
                {currentCustomer.Customer && (
                    <Col>
                        <AllPrescriptionImagesView
                            showUploadButton={true}
                            showCancelImageButton={true}
                        ></AllPrescriptionImagesView>
                        <Divider
                            style={{
                                marginTop: 10,
                                marginBottom: 0,
                            }}
                        ></Divider>
                        <AllReportImagesView
                            showUploadButton={true}
                            showCancelImageButton={true}
                        ></AllReportImagesView>

                        <Divider
                            style={{
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        ></Divider>

                        <h5>Treatments</h5>
                        <TreatmentPlansTable
                            treatmentPlans={currentCustomer.TreatmentPlans}
                        ></TreatmentPlansTable>
                    </Col>
                )}
            </Row>
        </div>
    );
}
