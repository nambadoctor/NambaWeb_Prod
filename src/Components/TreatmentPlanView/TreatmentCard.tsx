import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { ITreatmentIncoming } from '../../Types/IncomingDataModels/TreatmentIncoming';
import { useEffect, useState } from 'react';
import { ITreatmentOutgoing } from '../../Types/OutgoingDataModels/TreatmentOutgoing';
import { useDispatch, useSelector } from 'react-redux';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { TextField } from '@mui/material';
import { AddTreatment } from '../../ServiceActions/TreatmentActions';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { RootState } from '../../store';

interface TreatmentRowProps {
    treatment: ITreatmentIncoming;
}

export const TreatmentCard: React.FC<TreatmentRowProps> = (props) => {
    const [editToggle, seteditToggle] = useState(false);
    const [changedToDoneToggle, setChangedToDoneToggle] = useState(false)

    const currentAppointment = useSelector((state:RootState) => state.ConsultationState.Appointment)

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            actualProcedure: '',
            plannedDate: new Date(),
            status: '',
        },
        validationSchema: Yup.object({
            actualProcedure: Yup.string().required(),
            plannedDate: Yup.date().required(),
            status: Yup.string(),
        }),

        onSubmit: (values) => {
            const outGoingTreatment = {
                treatmentId: props.treatment.treatmentId,
                appointmentId: changedToDoneToggle ? currentAppointment?.appointmentId : props.treatment.appointmentId,
                name: props.treatment.name,
                serviceRequestId: changedToDoneToggle ? currentAppointment?.serviceRequestId : props.treatment.serviceRequestId,
                status: values.status,
                originalInstructions: props.treatment.originalInstructions,
                actualProcedure: values.actualProcedure,
                plannedDateTime: values.plannedDate,
            } as ITreatmentOutgoing;

            dispatch(
                AddTreatment(
                    outGoingTreatment,
                    props.treatment.treatmentPlanId,
                ),
            );

            seteditToggle(false);
            setChangedToDoneToggle(false);
        },
    });

    useEffect(() => {
        mapOriginalValues();
    }, []);

    function mapOriginalValues() {
        seteditToggle(false);
        formik.setFieldValue(
            'actualProcedure',
            props.treatment.actualProcedure,
        );
        formik.setFieldValue(
            'plannedDate',
            new Date(props.treatment.plannedDateTime),
        );
        formik.setFieldValue('status', props.treatment.status);
    }

    function CompleteTreatment() {
        formik.setFieldValue('status', 'Done');
        setChangedToDoneToggle(true);
        formik.handleSubmit();
    }

    return (
        <Card sx={{ maxWidth: 300, marginLeft: 2 }}>
            <CardContent>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="Planned Date"
                        value={formik.values.plannedDate}
                        onChange={(newValue) => {
                            formik.setFieldValue('plannedDate', newValue);
                        }}
                        disabled={!editToggle}
                    />
                </LocalizationProvider>

                <TextField
                    fullWidth
                    label="Original Instructions"
                    placeholder="Original Instructions"
                    margin="normal"
                    size="small"
                    value={props.treatment.originalInstructions}
                    disabled={true}
                />

                <TextField
                    fullWidth
                    label="Actual Procedure"
                    placeholder="Actual Procedure"
                    margin="normal"
                    size="small"
                    {...formik.getFieldProps('actualProcedure')}
                    helperText={
                        formik.touched.actualProcedure &&
                        formik.errors.actualProcedure
                    }
                    error={
                        formik.touched.actualProcedure &&
                        !!formik.errors.actualProcedure
                    }
                    disabled={!editToggle}
                />
            </CardContent>
            <CardActions>
                {props.treatment.status === 'Done' ? (
                    <div>
                        <AssignmentTurnedInIcon color="success"></AssignmentTurnedInIcon>
                        {props.treatment.serviceRequestId === currentAppointment?.serviceRequestId ? "Completed In This Appointment" : "Completed"} 
                    </div>
                ) : (
                    <Button size="small" onClick={CompleteTreatment}>
                        Mark As Done
                    </Button>
                )}

                {editToggle ? (
                    <div onClick={() => formik.handleSubmit()}>
                        <Button size="small">Save</Button>
                    </div>
                ) : (
                    <Button size="small" onClick={() => seteditToggle(true)}>
                        Edit
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};
