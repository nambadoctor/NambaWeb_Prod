import { TextField, Container } from "@mui/material";
import { useState } from "react";
import { ButtonGroup, Col, Row, Button, ToggleButton } from "react-bootstrap";
import CircularProgress from '@mui/material/CircularProgress';

// or @mui/lab/Adapter{Dayjs,Luxon,Moment} or any valid date-io adapter
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { CheckIfCustomerExists, SetCustomerAndBookAppointment } from "../../Actions/CustomerActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { SetAddPatientCustomerProfile, SetAddPatientIsCheckingForCustomer, SetAddPatientIsCustomerExists, SetAddPatientPhoneNumber } from "../../Actions/AddPatientActions";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IPatientCreationAndAppointmentBookData from "../../Types/OutgoingDataModels/PatientCreationAndAppointmentBookRequest";
import IPhoneNumberData from "../../Types/OutgoingDataModels/PhoneNumber";
import IDateOfBirthData from "../../Types/OutgoingDataModels/DateOfBirth";

export default function AddPatientForm() {

    const dispatch = useDispatch()

    const addPatientState = useSelector((state: RootState) => state.AddPatientState)
    const currentServiceProvider = useSelector((state: RootState) => state.CurrentServiceProviderState.serviceProvider)

    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const genderOptions = ["Male", "Female", "Other"]

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length == 10) {
            dispatch(CheckIfCustomerExists())
            //TODO: Check if phone number exists for organisation
        } else {
            dispatch(SetAddPatientPhoneNumber(event.target.value));
            dispatch(SetAddPatientIsCheckingForCustomer(false))
            dispatch(SetAddPatientIsCustomerExists(false))
        }
    };

    //TODO: FIND HOW TO CHANGE THESE VALUES DIRECTLY IN REDUCER
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        var tempCustomerProfile = addPatientState.customerProfile
        tempCustomerProfile.FirstName = event.target.value
        dispatch(SetAddPatientCustomerProfile(tempCustomerProfile))
    };

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        var tempCustomerProfile = addPatientState.customerProfile
        //tempCustomerProfile.age = event.target.value
        dispatch(SetAddPatientCustomerProfile(tempCustomerProfile))
    };

    const genderOptionChange = (gender: string) => {
        var tempCustomerProfile = addPatientState.customerProfile
        tempCustomerProfile.Gender = gender
        console.log(gender)
        dispatch(SetAddPatientCustomerProfile(tempCustomerProfile))
    }

    //TODO: MAKE THIS A HELPER FUNCTION IN A DIFFERENCE CLASS OR ACTION
    const makeCustomerAndAppointmentRequest = () => {
        const currentCustomerRequestObj = addPatientState.customerProfile
        const phoneNumberObj = { PhoneNumberId: "", CountryCode: "+91", Number: addPatientState.phoneNumber, Type: "" } as IPhoneNumberData

        return {
            AppointmentType: "InPerson",
            AddressId: "",
            Status: "",
            ScheduledAppointmentStartTime: new Date(),
            ScheduledAppointmentEndTime: null,
            ActualAppointmentStartTime: null,
            ActualAppointmentEndTime: null,
            CustomerId: currentCustomerRequestObj.CustomerId,
            FirstName: currentCustomerRequestObj.FirstName,
            LastName: currentCustomerRequestObj.LastName,
            PhoneNumbers: [phoneNumberObj],
            Gender: currentCustomerRequestObj.Gender,
            DateOfBirth: {} as IDateOfBirthData,
            EmailAddress: currentCustomerRequestObj.EmailAddress,
            ProfilePicURL: currentCustomerRequestObj.ProfilePicURL,
            OrganisationId: currentServiceProvider?.organisationId,
            ServiceProviderId: currentServiceProvider?.serviceProviderId
        } as IPatientCreationAndAppointmentBookData
    }
    //END
    const done = () => {
        const appointmentRequest = makeCustomerAndAppointmentRequest();
        dispatch(SetCustomerAndBookAppointment(appointmentRequest))
    }

    return (
        <div style={{ marginTop: 20 }}>
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

            {/* TODO: SHOW LOADER WHEN CHECKING FOR EXISTING PATIENT */}

            <TextField
                disabled={addPatientState.isCustomerExists}
                fullWidth
                variant="outlined"
                margin="normal"
                size="small"
                required
                value={addPatientState.customerProfile.FirstName}
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
                                value={addPatientState.customerProfile.Gender}
                                checked={addPatientState.customerProfile.Gender === genderOption}
                                onChange={(e) => genderOptionChange(genderOption)}
                            >
                                {genderOption}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Col>
            </Row>

            <Row style={{ marginTop: 10, marginBottom: 15, marginLeft: 0, marginRight: 0 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="Appointment Date (If Needed)"
                        value={selectedDate}
                        onChange={(newValue) => {
                            setSelectedDate(newValue);
                        }}
                    />
                </LocalizationProvider>
            </Row>

            <Row style={{ marginBottom: 10, marginLeft: 0, marginRight: 0 }}>
                <Button
                    style={{ padding: 10 }}
                    type="submit"
                    color="primary"
                    onClick={() => done()}>
                    Done
                </Button>
            </Row>
        </div>
    );
}