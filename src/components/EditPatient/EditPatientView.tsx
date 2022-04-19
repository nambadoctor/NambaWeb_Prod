import { CircularProgress, TextField } from '@mui/material';
import { ButtonGroup, Col, Row, ToggleButton } from 'react-bootstrap';
import usePatientInputHook from '../../hooks/usePatientInputHook';
import CustomButton from '../CustomButton';

export default function EditPatientView() {
    const { addPatientState, genderOptions, gender, formik, setGender } =
        usePatientInputHook(false);

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TextField
                    fullWidth
                    label="Phone Number"
                    placeholder="Phone Number"
                    margin="normal"
                    size="small"
                    {...formik.getFieldProps('phonenumber')}
                    inputProps={{ maxLength: 10 }}
                    helperText={
                        formik.touched.phonenumber && formik.errors.phonenumber
                    }
                    error={
                        formik.touched.phonenumber &&
                        !!formik.errors.phonenumber
                    }
                />

                {addPatientState.isCheckingNumber ? (
                    <CircularProgress
                        style={{ width: 30, height: 30, marginLeft: 5 }}
                    />
                ) : (
                    <div />
                )}
            </div>

            {addPatientState.isInvalidNumber ? (
                <div
                    style={{
                        fontSize: 12,
                        color: '#ff6c6c',
                        fontWeight: 'bold',
                    }}
                >
                    sorry, you cannot add this number
                </div>
            ) : (
                <div />
            )}

            <TextField
                fullWidth
                label="Name"
                placeholder="Name"
                margin="normal"
                size="small"
                {...formik.getFieldProps('name')}
                helperText={formik.touched.name && formik.errors.name}
                error={formik.touched.name && !!formik.errors.name}
            />

            <Row className="align-items-center">
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        disabled={addPatientState.isInvalidNumber}
                        renderInput={(props) => <TextField {...props} />}
                        label="Date Of Birth"
                        value={formik.values.dateOfBirth}
                        onChange={(newValue) => {
                            formik.setFieldValue('dateOfBirth', newValue);
                        }}
                    />
                </LocalizationProvider> */}

                <Col>
                    <TextField
                        fullWidth
                        label="Age"
                        placeholder="Age"
                        margin="normal"
                        size="small"
                        {...formik.getFieldProps('age')}
                        helperText={formik.touched.age && formik.errors.age}
                        error={formik.touched.age && !!formik.errors.age}
                    />
                </Col>
                <Col>
                    <ButtonGroup style={{ marginTop: 3 }}>
                        {genderOptions.map((genderOption, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`gender-${idx}`}
                                type="radio"
                                variant="outline-primary"
                                name="gender"
                                value={gender}
                                checked={gender === genderOption}
                                onChange={(_e) => setGender(genderOption)}
                            >
                                {genderOption}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Col>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10,
                    }}
                >
                    <CustomButton
                        type="submit"
                        onClick={formik.handleSubmit}
                        isPurple={false}
                        title="Save"
                        small={false}
                    />
                </div>
            </Row>
        </div>
    );
}
