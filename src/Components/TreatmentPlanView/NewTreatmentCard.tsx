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
import { TextField, Typography } from '@mui/material';
import { AddTreatment } from '../../ServiceActions/TreatmentActions';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { RootState } from '../../store';

interface NewTreatmentCardProps {
    treatmentPlanId: string;
}

export const NewTreatmentCard: React.FC<NewTreatmentCardProps> = (props) => {
    const currentAppointment = useSelector(
        (state: RootState) => state.ConsultationState.Appointment,
    );

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            actualProcedure: '',
            plannedDate: new Date(),
        },
        validationSchema: Yup.object({
            name: Yup.string(),
            actualProcedure: Yup.string().required(),
            plannedDate: Yup.date().required(),
        }),

        onSubmit: (values) => {
            const outGoingTreatment = {
                treatmentId: '',
                appointmentId: currentAppointment?.appointmentId ?? '',
                name: values.name,
                serviceRequestId: currentAppointment?.serviceRequestId ?? '',
                status: 'Pending',
                originalInstructions: values.actualProcedure,
                actualProcedure: values.actualProcedure,
                plannedDateTime: values.plannedDate,
            } as ITreatmentOutgoing;

            dispatch(AddTreatment(outGoingTreatment, props.treatmentPlanId));

            formik.resetForm()
        },
    });

    return (
        <Card sx={{ maxWidth: 300, marginLeft: 2, backgroundColor:"#d0dbf5" }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    New Treatment
                </Typography>
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

                <TextField
                    fullWidth
                    label="Instructions"
                    placeholder="Instructions"
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
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="Planned Date"
                        value={formik.values.plannedDate}
                        onChange={(newValue) => {
                            formik.setFieldValue('plannedDate', newValue);
                        }}
                    />
                </LocalizationProvider>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => formik.handleSubmit()}>
                    Add
                </Button>
            </CardActions>
        </Card>
    );
};
