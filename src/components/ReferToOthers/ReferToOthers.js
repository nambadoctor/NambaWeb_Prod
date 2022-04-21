import { TextField } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import * as Yup from 'yup';
import '../../App.css';
import { ReferPatient } from '../../service-actions/NotificationActions';
import CustomButton from '../CustomButton';

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
                <div className="flex py-2 lg:flex-row flex-col justify-center md:items-end items-center space-x-8">
                    <div className="flex flex-col">
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
                    <CustomButton
                        isPurple={false}
                        title="Refer"
                        type="submit"
                        className="md:mt-0 mt-2"
                        onClick={formik.handleSubmit}
                        disabled={selectedOption === null}
                    >
                        Refer
                    </CustomButton>
                </div>
            )}
        </div>
    );
}
