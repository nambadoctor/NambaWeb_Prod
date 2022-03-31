import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getReadableDateAndTimeString } from '../../utils/GeneralUtils';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    DeleteNote,
    EditNote,
    UploadNote,
} from '../../service-actions/NoteActions';
import { INoteIncomingData } from '../../types/IncomingDataModels/NoteIncoming';
import { INoteOutgoingData } from '../../types/OutgoingDataModels/NoteOutgoing';
import { RootState } from '../../store';

export default interface NotesProps {
    note: INoteIncomingData;
}

export const NoteCard: React.FC<NotesProps> = (props) => {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);

    const [editedText, setEditedText] = useState('');

    const currentAppointment = useSelector(
        (state: RootState) => state.ConsultationState.Appointment,
    );

    function toggleEditing() {
        if (editing) {
            var note = {
                NoteId: props.note.noteId,
                AppointmentId: props.note.appointmentId,
                ServiceRequestId: props.note.serviceRequestId,
                Note: editedText,
            } as INoteOutgoingData;

            dispatch(EditNote(note));
        }

        setEditing(!editing);
    }

    function deleteNote(note: INoteIncomingData) {
        dispatch(DeleteNote(note.noteId));
    }

    useEffect(() => {
        setEditedText(props.note.note);
    }, []);

    const handleEditedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedText(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                        >
                            {getReadableDateAndTimeString(
                                props.note.lastModifiedDateTime,
                            )}
                        </Typography>
                        {editing ? (
                            <TextField
                                fullWidth
                                label=""
                                placeholder="Enter Notes Here"
                                margin="normal"
                                size="medium"
                                value={editedText}
                                variant="outlined"
                                multiline
                                maxRows={6}
                                onChange={handleEditedChange}
                            />
                        ) : (
                            <Typography variant="body2">
                                {props.note.note}
                            </Typography>
                        )}
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            onClick={() => {
                                deleteNote(props.note);
                            }}
                        >
                            Delete
                        </Button>
                        <Button size="small" onClick={toggleEditing}>
                            {editing ? 'Done' : 'Edit'}
                        </Button>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    );
};
