import { Box, Button, LinearProgress } from '@mui/material';
import React from 'react'
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useAuthHook from '../../CustomHooks/useAuthHook';
import { RootState } from '../../store';

export default function CriticalAlertDisplay() {
    const FatalErrorState = useSelector((state: RootState) => state.UITriggerState.FatalError);

    const {SignOut} = useAuthHook();

    return (
        <div>
            <Modal
                show={FatalErrorState && FatalErrorState.toggle}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>

                <Box sx={{ width: '100%', backgroundColor:"white", padding:5 }}>
                    <h2>{FatalErrorState.message && FatalErrorState.message}</h2>
                    
                    <Button onClick={() => SignOut()}>Logout</Button>
                </Box>

            </Modal>
        </div>
    )
}