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

            {(currentCustomer && Object.entries(currentCustomer).length > 0) && (
                <div>

                    <AllPrescriptionImagesView
                        showUploadButton={true}
                        showCancelImageButton={true}
                    ></AllPrescriptionImagesView>

                    <AllReportImagesView
                        showUploadButton={true}
                        showCancelImageButton={true}
                    ></AllReportImagesView>

                    <AllNotesView></AllNotesView>
                    <NewNoteCard></NewNoteCard>
                </div>
            )}

        </div>
    );
}
