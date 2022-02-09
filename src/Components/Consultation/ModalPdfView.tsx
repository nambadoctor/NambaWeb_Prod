import Modal from '@mui/material/Modal';
import useReportsPdfViewHook from '../../CustomHooks/useReportsPdfViewHook';
import ReportsPdfView from '../ReportUpload/ReportsPdfView';

export const ModalPdfView = () => {
    const { open, handleClose } = useReportsPdfViewHook();

    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{
                width: '100%',
                height: '60%',
                maxHeight: '2000px',
                display: 'flex',
                padding: '5%',
            }}
        >
            <ReportsPdfView />
        </Modal>
    );
};
