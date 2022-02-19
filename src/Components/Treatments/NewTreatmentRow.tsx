import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ITreatmentOutgoing } from '../../Types/OutgoingDataModels/TreatmentOutgoing';
import {
    AddTreatment,
    DeleteTreatment,
} from '../../ServiceActions/TreatmentActions';
import { useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { RootState } from '../../store';
import useTreatmentsHook from '../../CustomHooks/useTreatmentsHook';
import { Button, TableCell, TableRow, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { getReadableDateAndTimeString } from '../../Utils/GeneralUtils';
import { SetLinearLoadingBarToggle } from '../../Actions/Common/UIControlActions';

export default function NewTreatmentRow() {
    const dispatch = useDispatch();

    const { selectedTreatment } = useTreatmentsHook();

    const formik = useFormik({
        initialValues: {
            name: '',
            instructions: '',
            plannedDate: new Date(),
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            instructions: Yup.string().required(),
            plannedDate: Yup.date().required(),
        }),
        onSubmit: (values) => {
            const outGoingTreatment = {
                treatmentId: '',
                appointmentId: '',
                name: values.name,
                serviceRequestId: '',
                status: 'Pending',
                originalInstructions: values.instructions,
                actualProcedure: values.instructions,
                plannedDateTime: values.plannedDate,
            } as ITreatmentOutgoing;

            dispatch(SetLinearLoadingBarToggle(true));

            dispatch(
                AddTreatment(
                    outGoingTreatment,
                    selectedTreatment?.treatmentPlanId ?? '',
                ),
            );

            formik.resetForm();
        },
    });

    return (
        <TableRow>
            <TableCell align="left">
                <TextField
                    fullWidth
                    label="Treatment Name"
                    placeholder="Treatment Name"
                    margin="normal"
                    size="small"
                    {...formik.getFieldProps('name')}
                    helperText={formik.touched.name && formik.errors.name}
                    error={formik.touched.name && !!formik.errors.name}
                />
            </TableCell>
            <TableCell align="left">
                <TextField
                    fullWidth
                    label="Instructions"
                    placeholder="Instructions"
                    margin="normal"
                    size="small"
                    {...formik.getFieldProps('instructions')}
                    helperText={
                        formik.touched.instructions &&
                        formik.errors.instructions
                    }
                    error={
                        formik.touched.instructions &&
                        !!formik.errors.instructions
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
                <Button onClick={() => formik.handleSubmit()}>Add</Button>
            </TableCell>
        </TableRow>
    );
}
