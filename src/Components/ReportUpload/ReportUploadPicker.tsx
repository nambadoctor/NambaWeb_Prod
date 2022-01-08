import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { GetReports, UploadReport } from '../../Actions/ReportActions';
import ImageViewer from 'react-simple-image-viewer';

export default function ReportUploadPicker() {

    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(UploadReport(event.target.files![0]))
    }

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleChange}></input>
        </div>
    )
}
