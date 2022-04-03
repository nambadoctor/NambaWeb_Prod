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
        <div className="horiztontalContainer">
            {currentCustomer && (
                <div className="flex md:flex-row flex-col justify-center md:items-end items-center space-x-4">
                    <div className="flex flex-col py-2">
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    renderInput={(props) => (
                                        <TextField {...props} />
                                    )}
                                    label="Followup Date"
                                    value={selectedDate}
                                    onChange={(newValue) => {
                                        setSelectedDate(new Date(newValue));
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                        <Select
                            className="mt-2"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={selectValues}
                            placeholder="Follow-up reason"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary !rounded-lg w-24"
                        onClick={reasonFormik.handleSubmit}
                        disabled={selectedOption === null}
                    >
                        Schedule
                    </button>
                </div>
            )}
        </div>
    );
}
