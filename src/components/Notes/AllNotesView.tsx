import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { INoteIncomingData } from '../../types/IncomingDataModels/NoteIncoming';
import { NoteCard } from './SingleNoteCardView';

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
                {currentConsultationNotes &&
                    currentConsultationNotes.map(
                        (note: INoteIncomingData, _index: number) => (
                            <NoteCard note={note}></NoteCard>
                        ),
                    )}
            </Row>
        </div>
    );
}
