import { TextField } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import * as Yup from 'yup';
import '../../App.css';
import { ReferPatient } from '../../service-actions/NotificationActions';

export function ReferToOthers({ referralContacts }) {
    const currentCustomer = useSelector(
        (state) => state.CurrentCustomerState.Customer,
    );

    const selectValues = referralContacts.map((contact, index) => {
        return {
            value: index,
            label: `${contact.contactName} (${contact.phoneNumber})`,
            number: contact.phoneNumber,
        };
    });

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            reasonForReferral: '',
        },
        validationSchema: Yup.object({
            reasonForReferral: Yup.string(),
        }),
        onSubmit: (values) => {
            dispatch(
                ReferPatient(
                    selectedOption.number,
                    values.reasonForReferral,
                    selectedOption.label,
                ),
            );
            formik.resetForm();
            setSelectedOption(null);
        },
    });

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="horiztontalContainer">
            {currentCustomer && (
                <div className="flex md:flex-row flex-col justify-center md:items-end items-center space-x-4">
                    <div className="flex flex-col py-2">
                        <TextField
                            fullWidth
                            label={
                                'Reason For Referral (' +
                                formik.values.reasonForReferral.length +
                                '/25)'
                            }
                            placeholder="Reason For Referral"
                            margin="normal"
                            size="small"
                            {...formik.getFieldProps('reasonForReferral')}
                            helperText={
                                formik.touched.reasonForReferral &&
                                formik.errors.reasonForReferral
                            }
                            error={
                                formik.touched.reasonForReferral &&
                                !!formik.errors.reasonForReferral
                            }
                            inputProps={{ maxLength: 25 }}
                        />
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={selectValues}
                            placeholder="Refer To"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary !rounded-lg w-24"
                        onClick={formik.handleSubmit}
                        disabled={selectedOption === null}
                    >
                        Refer
                    </button>
                </div>
            )}
        </div>
    );
}
