import { Button } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import useReportsPdfViewHook from '../../CustomHooks/useReportsPdfViewHook';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ReportsPdfView() {
    const { onDocumentLoadSuccess, pageNumber, numPages, downloadPdf } =
        useReportsPdfViewHook();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #000',
                position: 'absolute',
                width: '40%',
                top: 50,
                left: 50,
            }}
        >
            <Document
                file=""
                // file={{
                //     url: src.sasUrl,
                // }}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <Button onClick={downloadPdf}>Print pdf</Button>
        </div>
    );
}
