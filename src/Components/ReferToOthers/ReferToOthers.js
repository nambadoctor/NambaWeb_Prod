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

//TEMP HACK REFERRAL DATA
const sujathaReferals = [
    { value: 'sujatha-kousalya', label: 'Kousalya', number: "7530043008" },
    { value: 'sujatha-rajesh', label: 'Rajesh', number: "7530043008" },
    { value: 'sujatha-manivannan', label: 'Manivannan', number: "7530043008" },
];
//END DATA

export function ReferToOthers() {
    const currentCustomer = useSelector(
        (state) => state.CurrentCustomerState.Customer,
    );

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            reasonForReferral: '',
        },
        validationSchema: Yup.object({
            reasonForReferral: Yup.string(),
        }),
        onSubmit: (values) => {
            dispatch(ReferPatient(selectedOption.number, values.reasonForReferral, selectedOption.label))
            formik.resetForm();
            setSelectedOption(null);
        },
    });

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="horiztontalContainer">
            {currentCustomer && (
                <div>
                    <h5>Refer this patient </h5>

                    <Row>
                        <div style={{display:"flex"}}>
                        <TextField
                            fullWidth
                            label="Reason For Referral"
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
                            inputProps={{ maxLength: 28 }}
                            />
                            <div style={{marginTop: 12, marginLeft: 10}}>
                            {formik.values.reasonForReferral.length}/28 characters
                            </div>
                        </div>
                    </Row>

                    <div>
                        <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={sujathaReferals}
                        placeholder="Refer To"
                    />

                    <CustomButton
                        type="submit"
                        onClick={formik.handleSubmit}
                        isPurple={false}
                        title="Save"
                        small={false}
                    />
                    </div>
                </div>
            )}
        </div>
    );
}
