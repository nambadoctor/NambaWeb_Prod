import { TextField, Container } from "@mui/material";
import { useState } from "react";
import { ButtonGroup, Col, Row, Button, ToggleButton } from "react-bootstrap";
import CircularProgress from '@mui/material/CircularProgress';

// or @mui/lab/Adapter{Dayjs,Luxon,Moment} or any valid date-io adapter
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { CheckIfCustomerExists } from "../../Actions/CustomerActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { SetAddPatientCustomerProfile, SetAddPatientIsCheckingForCustomer, SetAddPatientIsCustomerExists } from "../../Actions/AddPatientActions";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function AddPatientForm() {

    const dispatch = useDispatch()

    const addPatientState = useSelector((state: RootState) => state.AddPatientState)

    const [value, setValue] = useState<Date | null>(null);

    const genderOptions = ["Male", "Female", "Other"]

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length == 10) {
            dispatch(CheckIfCustomerExists())
            //TODO: Check if phone number exists for organisation
        } else {
            dispatch(SetAddPatientIsCheckingForCustomer(false))
            dispatch(SetAddPatientIsCustomerExists(false))
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
        tempCustomerProfile.age = event.target.value
        dispatch(SetAddPatientCustomerProfile(tempCustomerProfile))
    };

    const genderOptionChange = (gender: string) => {
        var tempCustomerProfile = addPatientState.customerProfile
        tempCustomerProfile.gender = gender
        console.log(gender)
        dispatch(SetAddPatientCustomerProfile(tempCustomerProfile))
    }

    return (
        <div style={{ marginTop: 20}}>
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
                        value={addPatientState.customerProfile.age}
                        type="age"
                        id="age"
                        inputProps={{ maxLength: 3 }}
                        onChange={handleAgeChange}
                    />
                </Col>
                <Col>
                    <ButtonGroup style={{ marginTop: 10 }}>
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
            </Row>

            <Row style={{ marginTop: 10, marginBottom: 10 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="Appointment Date (If Needed)"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                    />
                </LocalizationProvider>
            </Row>

            <Row>
                <Button type="submit"
                    color="primary">
                    Done
                </Button>
            </Row>
        </div>
    );
}