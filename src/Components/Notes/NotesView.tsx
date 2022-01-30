import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { UploadNote } from '../../ServiceActions/NoteActions'
import { RootState } from '../../store'
import { INoteIncomingData } from '../../Types/IncomingDataModels/NoteIncoming'
import { INoteOutgoingData } from '../../Types/OutgoingDataModels/NoteOutgoing'
import NewNoteCard from './NewNoteCardView'
import { OutlinedCard } from './SingleNoteCardView'

export default function NotesView() {

    const dispatch = useDispatch()

    const currentConsultationNotes = useSelector((state: RootState) => state.ConsultationState.currentCustomerNotes)
    const currentConsultationAppointment = useSelector((state: RootState) => state.ConsultationState.currentAppointment)


    const [newNoteEntry, setNewNoteEntry] = useState("")

    const handleNewEntrychange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewNoteEntry(event.target.value)
    };

    const uploadNote = (note: INoteOutgoingData | null) => {
        if (note) {
            dispatch(UploadNote(note))
        } else {
            var newNote = {
                NoteId: "",
                AppointmentId: currentConsultationAppointment?.appointmentId ?? "",
                ServiceRequestId: currentConsultationAppointment?.serviceRequestId ?? "",
                Note: newNoteEntry
            } as INoteOutgoingData

            dispatch(UploadNote(newNote))
        }
    }

    return (
        <div>
            <Row>
                <h3>Notes</h3>
                <Row>
                    {currentConsultationNotes && currentConsultationNotes.map((note: INoteIncomingData, index: number) => (
                        <Col>
                            <OutlinedCard note={note}></OutlinedCard>
                        </Col>
                    ))}

                    <Col>
                        <NewNoteCard></NewNoteCard>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}
