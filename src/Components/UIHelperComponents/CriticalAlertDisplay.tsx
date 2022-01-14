import { Box, LinearProgress } from '@mui/material';
import React from 'react'
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function CriticalAlertDisplay() {
    const FatalErrorState = useSelector((state: RootState) => state.UITriggerState.FatalError);

    return (
        <div>
            <Modal
                show={FatalErrorState && FatalErrorState.toggle}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>

                <Box sx={{ width: '100%', backgroundColor:"white", padding:5 }}>
                    <h2>{FatalErrorState.message && FatalErrorState.message}</h2>
                </Box>

            </Modal>
        </div>
    )
}
