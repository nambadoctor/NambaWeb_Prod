import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UploadNote, UploadStrayNote } from '../../ServiceActions/NoteActions';
import { INoteOutgoingData } from '../../Types/OutgoingDataModels/NoteOutgoing';
import { RootState } from '../../store';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

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
            dispatch(UploadStrayNote(noteOutgoing))
        }
        setNote('');
    }

    const handleEditedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    };

    return (
        <div style={{display:'flex', flexDirection:'row'}}>
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
                style={{marginTop:10}}
            />

            <Button onClick={makeNewNote}>
                Add
            </Button>
        </div>
    );
}
