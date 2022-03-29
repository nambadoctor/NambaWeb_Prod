import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import { useState } from 'react';
import Select from 'react-select';
import CustomButton from '../CustomButton';
import { Col, Row } from 'react-bootstrap';
import { ReferPatient } from '../../ServiceActions/ReferralActions';

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
                <Row>
                    <Col md="6">
                        <div style={{ display: 'flex' }}>
                            <TextField
                                fullWidth
                                label={"Reason For Referral (" + formik.values.reasonForReferral.length + "/28)"}
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
                        </div>
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={selectValues}
                            placeholder="Refer To"
                        />
                    </Col>

                    <Col md="6" style={{justifyItems:'baseline'}}>
                    <CustomButton
                                type="submit"
                                onClick={formik.handleSubmit}
                                isPurple={false}
                                title="Refer"
                                small={false}
                            />
                    </Col>
                </Row>
            )}
        </div>
    );
}
