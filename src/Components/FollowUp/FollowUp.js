import { TextField } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import * as Yup from 'yup';
import '../../App.css';
import CustomButton from '../CustomButton';

export function FollowUp({ followUpConfig }) {
    const currentCustomer = useSelector(
        (state) => state.CurrentCustomerState.Customer,
    );

    const selectValues = followUpConfig.map((follow, index) => {
        return {
            value: index,
            label: `${contact.contactName} (${contact.phoneNumber})`,
            number: contact.phoneNumber,
        };
    });

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            followUpReason: '',
        },
        validationSchema: Yup.object({
            followUpReason: Yup.string(),
        }),
        onSubmit: (values) => {
            // dispatch(
            //     ReferPatient(
            //         selectedOption.number,
            //         values.followUpReason,
            //         selectedOption.label,
            //     ),
            // );
            formik.resetForm();
            setSelectedOption(null);
        },
    });

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="horiztontalContainer">
            {currentCustomer && (
                <Row>
                    <Col md="8">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '10px',
                            }}
                        >
                            <TextField
                                fullWidth
                                label={
                                    'Set follow-up (' +
                                    formik.values.reasonForReferral.length +
                                    '/25)'
                                }
                                placeholder="Set Follow-up"
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

                    <Col
                        lg="4"
                        style={{
                            justifyItems: 'baseline',
                            marginTop: 'auto',
                            marginLeft: 'auto',
                        }}
                    >
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
