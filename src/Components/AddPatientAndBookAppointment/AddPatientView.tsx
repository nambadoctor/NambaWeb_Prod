import { CircularProgress, TextField } from '@mui/material';
import { ButtonGroup, Col, Row, ToggleButton } from 'react-bootstrap';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import usePatientInputHook from '../../CustomHooks/usePatientInputHook';


export default function AddPatientView() {
    const {
        addPatientState,
        genderOptions,
        handleNumberChange,
        handleNameChange,
        handleAgeChange,
        genderOptionChange
    } = usePatientInputHook();

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>


                <TextField
                    fullWidth
                    label="Phone Number"
                    placeholder="Phone Number"
                    margin="normal"
                    size="small"
                    required
                    value={addPatientState.phoneNumber}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocalPhoneIcon style={{ width: 22, height: 22 }}></LocalPhoneIcon>
                            </InputAdornment>
                        ),
                    }}
                    inputProps={{ maxLength: 10 }}
                    variant="outlined"
                    onChange={handleNumberChange}
                />

                {addPatientState.isCheckingNumber ? <CircularProgress style={{ width: 30, height: 30, marginLeft: 5 }} /> : <div />}

                {/* Indicator to display once customer exists check is complete
                {addPatientState.isCustomerExists ? <CheckCircleIcon style={{width: 30, height: 30, marginLeft: 5, color: '#149c4a'}}/> : <div />} */}
            </div>

            {addPatientState.isCustomerExists ? <div style={{ fontSize: 12, color: "#1672f9", fontWeight: 'bold' }}>This patient exists</div> : <div />}
            {addPatientState.isInvalidNumber ? <div style={{ fontSize: 12, color: "#ff6c6c", fontWeight: 'bold' }}>Sorry, cannot add this number</div> : <div />}

            {/* TODO: SHOW LOADER WHEN CHECKING FOR EXISTING PATIENT */}

            <TextField
                disabled={addPatientState.isCustomerExists || addPatientState.isInvalidNumber}
                fullWidth
                label="Name"
                placeholder="Name"
                margin="normal"
                size="small"
                required
                value={addPatientState.customerProfile.firstName}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                onChange={handleNameChange}
            />

            <Row className="align-items-center">
                <Col>
                    <TextField
                        disabled={addPatientState.isCustomerExists || addPatientState.isInvalidNumber}
                        margin="dense"
                        size="small"
                        name="age"
                        label="Age"
                        placeholder="Age"
                        //value={addPatientState.customerProfile.age}
                        type="age"
                        id="age"
                        inputProps={{ maxLength: 3 }}
                        onChange={handleAgeChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccessTimeFilledIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                    />

                </Col>
                <Col>
                    <ButtonGroup style={{ marginTop: 3 }}>
                        {genderOptions.map((genderOption, idx) => (
                            <ToggleButton
                                disabled={addPatientState.isCustomerExists || addPatientState.isInvalidNumber}
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
