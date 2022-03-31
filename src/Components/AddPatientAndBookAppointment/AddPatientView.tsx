import { CircularProgress, TextField } from '@mui/material';
import { ButtonGroup, Col, Row, ToggleButton } from 'react-bootstrap';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import CustomButton from '../CustomButton';
import usePatientInputHook from '../../hooks/usePatientInputHook';

export default function AddPatientView() {
    const { addPatientState, genderOptions, gender, formik, setGender } =
        usePatientInputHook(true);

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

            {addPatientState.isCustomerExists ? (
                <div
                    style={{
                        fontSize: 12,
                        color: '#1672f9',
                        fontWeight: 'bold',
                    }}
                >
                    This patient exists
                </div>
            ) : (
                <div />
            )}
            {addPatientState.isInvalidNumber ? (
                <div
                    style={{
                        fontSize: 12,
                        color: '#ff6c6c',
                        fontWeight: 'bold',
                    }}
                >
                    Sorry, cannot add this number
                </div>
            ) : (
                <div />
            )}

            {/* TODO: SHOW LOADER WHEN CHECKING FOR EXISTING PATIENT */}

            <TextField
                fullWidth
                label="Name"
                placeholder="Name"
                margin="normal"
                size="small"
                disabled={
                    addPatientState.isCustomerExists ||
                    addPatientState.isInvalidNumber
                }
                {...formik.getFieldProps('name')}
                helperText={formik.touched.name && formik.errors.name}
                error={formik.touched.name && !!formik.errors.name}
            />

            <Row className="align-items-center">
                <Col>
                    <TextField
                        fullWidth
                        label="Age"
                        placeholder="Age"
                        margin="normal"
                        size="small"
                        disabled={
                            addPatientState.isCustomerExists ||
                            addPatientState.isInvalidNumber
                        }
                        {...formik.getFieldProps('age')}
                        helperText={formik.touched.age && formik.errors.age}
                        error={formik.touched.age && !!formik.errors.age}
                    />
                </Col>
                <Col>
                    <ButtonGroup style={{ marginTop: 3 }}>
                        {genderOptions.map((genderOption, idx) => (
                            <ToggleButton
                                disabled={
                                    addPatientState.isCustomerExists ||
                                    addPatientState.isInvalidNumber
                                }
                                key={idx}
                                id={`gender-${idx}`}
                                type="radio"
                                variant="outline-primary"
                                name="gender"
                                value={gender}
                                checked={gender === genderOption}
                                onChange={(e) => setGender(genderOption)}
                            >
                                {genderOption}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Col>
            </Row>

            {/* BOOK APPOINTMENT COMP */}
            <Row
                style={{
                    marginTop: 10,
                    marginBottom: 15,
                    marginLeft: 0,
                    marginRight: 0,
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        disabled={addPatientState.isInvalidNumber}
                        renderInput={(props) => <TextField {...props} />}
                        label="Appointment Date"
                        value={formik.values.dateForAppointment}
                        onChange={(newValue) => {
                            formik.setFieldValue(
                                'dateForAppointment',
                                newValue,
                            );
                        }}
                    />
                </LocalizationProvider>
            </Row>

            <Row style={{ marginBottom: 10, marginLeft: 0, marginRight: 0 }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <CustomButton
                        isDisabled={addPatientState.isInvalidNumber}
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
