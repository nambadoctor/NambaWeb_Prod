import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UploadNote, UploadStrayNote } from '../../service-actions/NoteActions';
import { RootState } from '../../store';
import { INoteOutgoingData } from '../../types/OutgoingDataModels/NoteOutgoing';

export default function NewNoteCard() {
    const dispatch = useDispatch();
    const [note, setNote] = useState('');

    const currentAppointment = useSelector(
        (state: RootState) => state.ConsultationState.Appointment,
    );

    function makeNewNote() {
        var noteOutgoing = {
            NoteId: '',
            AppointmentId: currentAppointment?.appointmentId ?? '',
            ServiceRequestId: currentAppointment?.serviceRequestId ?? '',
            Note: note,
        } as INoteOutgoingData;

        if (currentAppointment) {
            dispatch(UploadNote(noteOutgoing));
        } else {
            dispatch(UploadStrayNote(noteOutgoing));
        }
        setNote('');
    }

    const handleEditedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <TextField
                fullWidth
                label=""
                placeholder="Enter New Note Here"
                margin="normal"
                size="medium"
                value={note}
                variant="outlined"
                onChange={handleEditedChange}
                multiline
                maxRows={6}
                style={{ marginTop: 10 }}
            />

            <Button onClick={makeNewNote}>Add</Button>
        </div>
    );
}
