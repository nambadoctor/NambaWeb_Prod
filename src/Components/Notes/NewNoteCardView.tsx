import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NotesProps from './SingleNoteView';
import { getReadableDateAndTimeString } from '../../Utils/GeneralUtils';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteNote, UploadNote } from '../../ServiceActions/NoteActions';
import { INoteIncomingData } from '../../Types/IncomingDataModels/NoteIncoming';
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
    const dispatch = useDispatch()
    const [note, setNote] = useState("")

    const currentAppointment = useSelector((state: RootState) => state.ConsultationState.currentAppointment)

    function makeNewNote() {
        var noteOutgoing = {
            NoteId: "",
            AppointmentId: currentAppointment?.appointmentId ?? "",
            ServiceRequestId: currentAppointment?.serviceRequestId ?? "",
            Note: note
        } as INoteOutgoingData;

        dispatch(UploadNote(noteOutgoing))
    }

    const handleEditedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    };

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
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
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={makeNewNote}>Done</Button>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    );
}