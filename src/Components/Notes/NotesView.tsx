import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { INoteIncomingData } from '../../types/IncomingDataModels/NoteIncoming';
import NewNoteCard from './NewNoteCardView';
import { NoteCard } from './SingleNoteCardView';
import { createSelector } from 'reselect';

export default function NotesView() {
    const currentAppointmentId = useSelector(
        (state: RootState) =>
            state.ConsultationState.Appointment?.appointmentId,
    );

    const currentCustomer = useSelector(
        (state: RootState) => state.CurrentCustomerState.Customer,
    );

    const showAppointmentNotes = createSelector(
        (state: RootState) => state.CurrentCustomerState.Notes,
        (notes) =>
            notes?.filter(
                (note) =>
                    (currentAppointmentId &&
                        note.appointmentId == currentAppointmentId) ||
                    currentCustomer !== null,
            ),
    );

    const currentConsultationNotes = useSelector(showAppointmentNotes);

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
