import { useState } from 'react';

export default function usePaginationHook(rows: number) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rows);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage };
}
