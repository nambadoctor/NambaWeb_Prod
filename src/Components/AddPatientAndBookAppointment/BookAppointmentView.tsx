import { TextField } from "@mui/material";
import { useState } from "react";
import { Row, Button } from "react-bootstrap";
import CircularProgress from '@mui/material/CircularProgress';

// or @mui/lab/Adapter{Dayjs,Luxon,Moment} or any valid date-io adapter
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { SetCustomerAndBookAppointment } from "../../Actions/CustomerActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { SetAddPatientIsMakingDoneCall } from "../../Actions/AddPatientActions";
import IPhoneNumberData from "../../Types/OutgoingDataModels/PhoneNumber";
import ICustomerProfileWithAppointmentOutgoingData from "../../Types/OutgoingDataModels/CustomerProfileWithAppointmentOutgoing";
import IAppointmentOutgoing from "../../Types/OutgoingDataModels/AppointmentOutgoing";

export default function BookAppointmentView() {

    const dispatch = useDispatch()

    const addPatientState = useSelector((state: RootState) => state.AddPatientState)
    const currentServiceProvider = useSelector((state: RootState) => state.CurrentServiceProviderState.serviceProvider)

    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    //TODO: MAKE THIS A HELPER FUNCTION IN A DIFFERENCE CLASS OR ACTION
    const makeCustomerAndAppointmentRequest = () => {
        var currentCustomerRequestObj = addPatientState.customerProfile
        currentCustomerRequestObj.serviceProviderId = currentServiceProvider?.serviceProviderId ?? ""
        currentCustomerRequestObj.organisationId = currentServiceProvider?.organisationId ?? ""
        currentCustomerRequestObj.phoneNumbers = [{ phoneNumberId: "", countryCode: "+91", number: addPatientState.phoneNumber, type: "" } as IPhoneNumberData]

        var aptObj = {
            appointmentId: "string",
            organisationId: currentServiceProvider?.organisationId,
            serviceRequestId: "",
            serviceProviderId: currentServiceProvider?.serviceProviderId,
            customerId: currentCustomerRequestObj.customerId,
            appointmentType: "InPerson",
            addressId: "",
            status: "",
            scheduledAppointmentStartTime: selectedDate,
            scheduledAppointmentEndTime: null,
            actualAppointmentStartTime: null,
            actualAppointmentEndTime: null
        } as IAppointmentOutgoing

        return {
            customerProfileIncoming: currentCustomerRequestObj,
            appointmentIncoming: aptObj
        } as ICustomerProfileWithAppointmentOutgoingData
    }
    //END

    const done = () => {
        dispatch(SetAddPatientIsMakingDoneCall(true))
        const appointmentRequest = makeCustomerAndAppointmentRequest();
        dispatch(SetCustomerAndBookAppointment(appointmentRequest))
    }

    return (
        <div>
            <Row style={{ marginTop: 10, marginBottom: 15, marginLeft: 0, marginRight: 0 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        disabled={addPatientState.isCustomerExists || addPatientState.isInvalidNumber}
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

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                        disabled={addPatientState.isCustomerExists || addPatientState.isInvalidNumber}
                        style={{ padding: 10, width: '100%' }}
                        type="submit"
                        color="primary"
                        onClick={() => done()}>
                        Done
                    </Button>

                    {addPatientState.isMakingDoneCall ? <CircularProgress style={{ width: 30, height: 30, marginLeft: 5 }} /> : <div />}
                </div>

            </Row>
        </div>
    )
}
function setSelectedDate(newValue: any) {
    throw new Error('Function not implemented.');
}

