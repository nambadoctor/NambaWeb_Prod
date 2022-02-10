import { Divider } from '@mui/material';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import EditPatientView from '../EditPatient/EditPatientView';
import AllNotesView from '../Notes/AllNotesView';
import NewNoteCard from '../Notes/NewNoteCardView';
import NotesView from '../Notes/NotesView';
import { AllPrescriptionImagesView } from '../PrescriptionUpload/AllPrescriptionImagesView';
import { AllReportImagesView } from '../ReportUpload/AllReportImagesView';

export default function PatientInfoColumnView() {
    const currentCustomer = useSelector(
        (state: RootState) => state.CurrentCustomerState.Customer,
    );

    return (
        <div>
            <h5 style={{ marginBottom: 20 }}>Add/Edit Patient</h5>
            <EditPatientView></EditPatientView>

            {currentCustomer && Object.entries(currentCustomer).length > 0 && (
                <div>
                    <AllPrescriptionImagesView
                        showUploadButton={true}
                        showCancelImageButton={true}
                    ></AllPrescriptionImagesView>

                    <Row>
                        <Divider
                            style={{
                                marginTop: 20,
                                marginBottom: 20,
                            }}
                        ></Divider>
                    </Row>
                    <Row>
                        <h5>History Of Notes</h5>
                    </Row>
                    <NewNoteCard></NewNoteCard>
                    <AllNotesView></AllNotesView>
                </div>
            )}
        </div>
    );
}
