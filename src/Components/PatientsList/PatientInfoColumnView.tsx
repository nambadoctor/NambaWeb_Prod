import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Divider, TextField } from "@mui/material";
import { useState } from 'react';
import { Button, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { SetAppointment } from '../../Actions/AppointmentActions';
import { RootState } from '../../store';
import IAppointmentOutgoing from '../../Types/OutgoingDataModels/AppointmentOutgoing';
import EditPatientView from '../EditPatient/EditPatientView'

export default function PatientInfoColumnView() {
    const dispatch = useDispatch()
    
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const currentServiceProvider = useSelector((state: RootState) => state.CurrentServiceProviderState.serviceProvider)
    const currentPatient = useSelector((state: RootState) => state.AddPatientState.customerProfile)

    function bookAppointment() {
        var aptObj = {
            appointmentId: "",
            organisationId: currentServiceProvider?.organisationId,
            serviceRequestId: "",
            serviceProviderId: currentServiceProvider?.serviceProviderId,
            customerId: currentPatient.customerId,
            appointmentType: "InPerson",
            addressId: "",
            status: "",
            scheduledAppointmentStartTime: selectedDate,
            scheduledAppointmentEndTime: null,
            actualAppointmentStartTime: null,
            actualAppointmentEndTime: null
        } as IAppointmentOutgoing

        dispatch(SetAppointment(aptObj))
    }

    return (
        <div>
            <h5 style={{ marginBottom: 20 }}>Add/Edit Patient</h5>
            <EditPatientView></EditPatientView>

            <Row><Divider style={{ marginTop: 20 }}></Divider></Row>

            <h5 style={{ marginBottom: 20, marginTop: 20 }}>Book Appointment</h5>

            <Row style={{ marginTop: 20, marginBottom: 15, marginLeft: 0, marginRight: 0 }}>
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

                <Button
                    style={{ padding: 10, width: '100%', marginTop: 20 }}
                    type="submit"
                    color="primary"
                    onClick={() => bookAppointment()}>
                    Book
                </Button>
            </Row>

            <Row><Divider style={{ marginTop: 20 }}></Divider></Row>

            <h2 style={{ textAlign: 'center', marginTop: 12 }}>Show Appointment Summaries For This Patient</h2>
        </div>
    )
}
