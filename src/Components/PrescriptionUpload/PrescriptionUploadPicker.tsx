import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { UploadPrescription } from '../../Actions/PrescriptionActions';

export default function PrescriptionUploadPicker() {

    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(UploadPrescription(event.target.files![0]))
    }

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleChange}></input>
        </div>
    )
}
