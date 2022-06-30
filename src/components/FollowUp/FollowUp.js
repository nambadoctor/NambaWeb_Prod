import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import * as Yup from 'yup';
import '../../App.css';
import { SetFolloupWithPatient } from '../../service-actions/NotificationActions';
import CustomButton from '../CustomButton';

export function FollowUp({ followUpConfig }) {
    const currentCustomer = useSelector(
        (state) => state.CurrentCustomerState.Customer,
    );

    const selectValues = followUpConfig.reasons.map((reason, index) => {
        return {
            value: reason,
            label: reason,
        };
    });

    const dispatch = useDispatch();

    const reasonFormik = useFormik({
        initialValues: {
            followUpReason: '',
        },
        validationSchema: Yup.object({
            followUpReason: Yup.string(),
        }),
        onSubmit: (values) => {
            dispatch(SetFolloupWithPatient(selectedOption.value, selectedDate));
            reasonFormik.resetForm();
            setSelectedOption(null);
        },
    });

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="p-3 pb-4 mt-8 card">
            {currentCustomer && (
                <div className="flex flex-col items-start justify-center">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Followup Date"
                            value={selectedDate}
                            onChange={(newValue) => {
                                setSelectedDate(new Date(newValue));
                            }}
                        />
                    </LocalizationProvider>
                    <div className="flex flex-row items-start justify-start w-full mt-1 space-x-4">
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={selectValues}
                            placeholder="Follow-up reason"
                        />
                        <CustomButton
                            isPurple={false}
                            title="Schedule"
                            type="submit"
                            className="w-1/2"
                            onClick={reasonFormik.handleSubmit}
                            disabled={selectedOption === null}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
