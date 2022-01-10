import { CircularProgress, TextField } from '@mui/material';
import { Button, ButtonGroup, Col, Row, ToggleButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { SetCustomer } from '../../Actions/CustomerActions';
import usePatientInputHook from '../../CustomHooks/usePatientInputHook';

export default function EditPatientView() {

    const dispatch = useDispatch()

    const {
        addPatientState,
        genderOptions,
        handleNumberChange,
        handleNameChange,
        handleAgeChange,
        genderOptionChange
    } = usePatientInputHook();

    function savePatient () {
        dispatch(SetCustomer(addPatientState.customerProfile))
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    required
                    id="number"
                    label="Phone Number"
                    name="number"
                    value={addPatientState.phoneNumber}
                    onChange={handleNumberChange}
                    inputProps={{ maxLength: 10 }}
                />

                {addPatientState.isCheckingNumber ? <CircularProgress style={{ width: 30, height: 30, marginLeft: 5 }} /> : <div />}

                {/* Indicator to display once customer exists check is complete
                {addPatientState.isCustomerExists ? <CheckCircleIcon style={{width: 30, height: 30, marginLeft: 5, color: '#149c4a'}}/> : <div />} */}
            </div>

            {addPatientState.isCustomerExists ? <div style={{ fontSize: 12, color: "#1672f9", fontWeight: 'bold' }}>this patient exists</div> : <div />}
            {addPatientState.isInvalidNumber ? <div style={{ fontSize: 12, color: "#ff6c6c", fontWeight: 'bold' }}>sorry, you cannot add this number</div> : <div />}

            {/* TODO: SHOW LOADER WHEN CHECKING FOR EXISTING PATIENT */}

            <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                size="small"
                required
                value={addPatientState.customerProfile.firstName}
                id="name"
                label="Name"
                name="name"
                onChange={handleNameChange}
            />

            <Row className="align-items-center">
                <Col>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        size="small"
                        name="age"
                        label="Age"
                        //value={addPatientState.customerProfile.age}
                        type="age"
                        id="age"
                        inputProps={{ maxLength: 3 }}
                        onChange={handleAgeChange}
                    />
                </Col>
                <Col>
                    <ButtonGroup style={{ marginTop: 3 }}>
                        {genderOptions.map((genderOption, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`gender-${idx}`}
                                type="radio"
                                variant='outline-primary'
                                name="gender"
                                value={addPatientState.customerProfile.gender}
                                checked={addPatientState.customerProfile.gender === genderOption}
                                onChange={(e) => genderOptionChange(genderOption)}
                            >
                                {genderOption}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Col>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Button
                        style={{ padding: 10, width: '100%' }}
                        type="submit"
                        color="primary"
                        onClick={() => savePatient()}>
                        Done
                    </Button>
                </div>

            </Row>
        </div>
    )
}
