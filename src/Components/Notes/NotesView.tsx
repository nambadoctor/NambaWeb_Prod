import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { UploadNote } from '../../ServiceActions/NoteActions'
import { RootState } from '../../store'
import { INoteIncomingData } from '../../Types/IncomingDataModels/NoteIncoming'
import { INoteOutgoingData } from '../../Types/OutgoingDataModels/NoteOutgoing'
import NewNoteCard from './NewNoteCardView'
import { NoteCard } from './SingleNoteCardView'

export default function NotesView() {

    const dispatch = useDispatch()

    const currentConsultationNotes = useSelector((state: RootState) => state.ConsultationState.currentCustomerNotes)
    
    return (
        <div>
            <Row>
                {currentConsultationNotes && currentConsultationNotes.map((note: INoteIncomingData, index: number) => (
                    <Col>
                        <NoteCard note={note}></NoteCard>
                    </Col>
                ))}

                <Col>
                    <NewNoteCard></NewNoteCard>
                </Col>
            </Row>
        </div>
    )
}
