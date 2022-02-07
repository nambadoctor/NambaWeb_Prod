import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { INoteIncomingData } from '../../Types/IncomingDataModels/NoteIncoming';
import NewNoteCard from './NewNoteCardView';
import { NoteCard } from './SingleNoteCardView';
import { createSelector } from 'reselect';

export default function NotesView() {
    const currentAppointmentId = useSelector(
        (state: RootState) =>
            state.ConsultationState.Appointment?.appointmentId,
    );

    const showAppointmentPrescriptions = createSelector(
        (state: RootState) => state.CurrentCustomerState.Notes,
        (notes) =>
            notes?.filter((note) => note.appointmentId == currentAppointmentId),
    );

    const currentConsultationNotes = useSelector(showAppointmentPrescriptions);

    return (
        <div>
            <Row>
                <NewNoteCard></NewNoteCard>
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
