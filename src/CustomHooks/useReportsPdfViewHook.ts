import { useState } from 'react';

export default function useReportsPdfViewHook() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [open, setOpen] = useState(false);

    function onDocumentLoadSuccess() {
        setNumPages(numPages);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const downloadPdf = (src: any) => {
        window.open(src.sasUrl, '_blank');
    };

    function base64ToArrayBuffer(src: any) {
        var binaryString = window.atob(src.sasUrl);
        var binaryLen = binaryString.length;
        var bytes = new Uint8Array(binaryLen);
        for (var i = 0; i < binaryLen; i++) {
            var ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    }

    const openPdf = async (src: any) => {
        window.open(src.sasUrl);

        // var arrrayBuffer = base64ToArrayBuffer(src);
        // var blob = new Blob([arrrayBuffer], { type: 'application/pdf' });
        // var link = window.URL.createObjectURL(blob);
        // window.open(link, '', 'height=650,width=840');
        // let blob = await fetch(src.sasUrl).then((r) => r.blob());
        // console.log('blob', blob);
        // let pdfWindow = window.open('');
        // pdfWindow &&
        //     pdfWindow.document.write(
        //         "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
        //             encodeURI(src.sasUrl) +
        //             "'></iframe>",
        //     );
    };

    return {
        onDocumentLoadSuccess,
        pageNumber,
        numPages,
        open,
        setOpen,
        handleClose,
        openPdf,
        downloadPdf,
    };
}
