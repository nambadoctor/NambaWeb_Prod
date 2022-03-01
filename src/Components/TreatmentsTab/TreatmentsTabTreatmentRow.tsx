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

interface TreatmentRowProps {
    treatment: ITreatmentIncoming;
}

export const TreatmentTabTreatmentRow: React.FC<TreatmentRowProps> = (
    props,
) => {
    const [editToggle, seteditToggle] = useState(false);
    const [changedToDoneToggle, setChangedToDoneToggle] = useState(false);

    const currentAppointment = useSelector(
        (state: RootState) => state.ConsultationState.Appointment,
    );

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
                appointmentId: changedToDoneToggle
                    ? currentAppointment?.appointmentId
                    : props.treatment.appointmentId,
                name: props.treatment.name,
                serviceRequestId: changedToDoneToggle
                    ? currentAppointment?.serviceRequestId
                    : props.treatment.serviceRequestId,
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
        <TableRow>
            <TableCell align="left">{props.treatment.customerName}</TableCell>
            <TableCell align="left">
                {props.treatment.treatmentPlanName}
            </TableCell>
            <TableCell align="left">
                {editToggle ? (
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
                        disabled={!editToggle}
                    />
                ) : (
                    props.treatment.actualProcedure
                )}
            </TableCell>
            <TableCell align="left">
                {new Date(props.treatment.plannedDateTime) > new Date() ? "Upcoming" : "Finished"}
            </TableCell>
            <TableCell align="left">
                {editToggle ? (
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
                ) : (
                    getReadableDateAndTimeString(
                        props.treatment.plannedDateTime,
                    )
                )}
            </TableCell>
            <TableCell align="left">
                {props.treatment.status === 'Done' ? (
                    <div>
                        <AssignmentTurnedInIcon color="success"></AssignmentTurnedInIcon>
                        {props.treatment.serviceRequestId ===
                        currentAppointment?.serviceRequestId
                            ? 'Completed In This Appointment'
                            : 'Completed'}
                    </div>
                ) : (
                    <Button variant="contained" onClick={CompleteTreatment}>
                        Mark As Completed
                    </Button>
                )}

                {editToggle ? (
                    <div onClick={() => formik.handleSubmit()}>
                        <Button variant="contained" size="small">
                            Save
                        </Button>
                    </div>
                ) : (
                    <Button
                        variant="contained"
                        style={{ marginLeft: 10 }}
                        onClick={() => seteditToggle(true)}
                    >
                        Edit
                    </Button>
                )}
            </TableCell>
        </TableRow>
    );
};
