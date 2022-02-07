import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { INoteIncomingData } from '../../Types/IncomingDataModels/NoteIncoming';
import NewNoteCard from './NewNoteCardView';
import { NoteCard } from './SingleNoteCardView';
import { createSelector } from 'reselect';
import { Divider } from '@mui/material';

export default function AllNotesView() {
    const currentAppointmentId = useSelector(
        (state: RootState) =>
            state.ConsultationState.Appointment?.appointmentId,
    );

    const showAppointmentPrescriptions = createSelector(
        (state: RootState) => state.CurrentCustomerState.Notes,
        (notes) =>
            notes?.filter(
                (note) => note.appointmentId !== currentAppointmentId,
            ),
    );

    const currentConsultationNotes = useSelector(showAppointmentPrescriptions);

    return (
        <div>
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
            <Row>
                {currentConsultationNotes &&
                    currentConsultationNotes.map(
                        (note: INoteIncomingData, index: number) => (
                            <NoteCard note={note}></NoteCard>
                        ),
                    )}
            </Row>
        </div>
    );
}
