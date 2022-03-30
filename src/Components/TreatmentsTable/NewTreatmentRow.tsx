import { TableRow, TableCell, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddTreatment } from '../../ServiceActions/TreatmentActions';
import { RootState } from '../../store';
import { ITreatmentIncoming } from '../../Types/IncomingDataModels/TreatmentIncoming';
import { ITreatmentOutgoing } from '../../Types/OutgoingDataModels/TreatmentOutgoing';
import { getReadableDateAndTimeString } from '../../Utils/GeneralUtils';
import * as Yup from 'yup';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

interface NewTreatmentRowProps {
    treatmentPlanId: string;
}

export const NewTreatmentRow: React.FC<NewTreatmentRowProps> = (props) => {
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

            formik.resetForm();
        },
    });

    return (
        <TableRow>
            <TableCell align="left">
                <TextField
                    fullWidth
                    label="Actual Procedure"
                    placeholder="Actual Procedure"
                    margin="normal"
                    size="medium"
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
            </TableCell>
            <TableCell align="left">
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
            </TableCell>
            <TableCell align="left">
                <Button
                    variant="contained"
                    style={{ marginLeft: 10 }}
                    onClick={() => formik.handleSubmit()}
                >
                    Add
                </Button>
            </TableCell>
        </TableRow>
    );
};
