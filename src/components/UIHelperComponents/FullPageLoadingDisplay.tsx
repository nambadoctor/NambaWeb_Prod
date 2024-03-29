import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function FullPageLoadingDisplay() {
    const uiTriggerState = useSelector(
        (state: RootState) => state.UITriggerState,
    );

    return (
        <div>
            <Modal
                show={uiTriggerState.showLinearLoadingBarToggle}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            </Modal>
        </div>
    );
}
