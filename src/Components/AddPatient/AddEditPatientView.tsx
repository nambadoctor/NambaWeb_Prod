import { CircularProgress, TextField } from '@mui/material';
import React from 'react'
import { ButtonGroup, Col, Row, ToggleButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SetAddPatientCustomerProfile, SetAddPatientIsCheckingForCustomer, SetAddPatientIsCustomerExists, SetAddPatientIsInvalidNumber, SetAddPatientPhoneNumber } from '../../Actions/AddPatientActions';
import { CheckIfCustomerExists } from '../../Actions/CustomerActions';
import { RootState } from '../../store';

export default function AddEditPatientView() {
    const dispatch = useDispatch()

    const addPatientState = useSelector((state: RootState) => state.AddPatientState)
    const currentServiceProvider = useSelector((state: RootState) => state.CurrentServiceProviderState.serviceProvider)

    const genderOptions = ["Male", "Female", "Other"]

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length >= 10) {
            dispatch(CheckIfCustomerExists(event.target.value, currentServiceProvider!.organisationId))
            dispatch(SetAddPatientIsCheckingForCustomer(true))
            dispatch(SetAddPatientPhoneNumber(event.target.value));
        } else {
            dispatch(SetAddPatientPhoneNumber(event.target.value));
            dispatch(SetAddPatientIsCustomerExists(false))
            dispatch(SetAddPatientIsCheckingForCustomer(false))    
            dispatch(SetAddPatientIsInvalidNumber(false))        
        }
    };

    //TODO: FIND HOW TO CHANGE THESE VALUES DIRECTLY IN REDUCER
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        var tempCustomerProfile = addPatientState.customerProfile
        tempCustomerProfile.firstName = event.target.value
        dispatch(SetAddPatientCustomerProfile(tempCustomerProfile))
    };

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        var tempCustomerProfile = addPatientState.customerProfile
        //tempCustomerProfile.age = event.target.value
        dispatch(SetAddPatientCustomerProfile(tempCustomerProfile))
    };

    const genderOptionChange = (gender: string) => {
        var tempCustomerProfile = addPatientState.customerProfile
        tempCustomerProfile.gender = gender
        console.log(gender)
        dispatch(SetAddPatientCustomerProfile(tempCustomerProfile))
    }
    
    return (
        <div>
            <h5 style={{ marginBottom: 20 }}>Add Patient / Book Appointment</h5>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    required
                    id="number"
                    label="Phone Number"
                    name="number"
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
                disabled={addPatientState.isCustomerExists}
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
                        disabled={addPatientState.isCustomerExists}
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
                                disabled={addPatientState.isCustomerExists}
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
            </Row>
        </div>
    )
}
