import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { UploadReport } from '../../Actions/ReportActions';

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
