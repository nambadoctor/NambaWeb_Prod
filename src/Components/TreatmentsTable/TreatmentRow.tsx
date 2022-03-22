import {
    TableRow,
    TableCell,
    TextField,
    Button,
    Typography,
} from '@mui/material';
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
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface TreatmentRowProps {
    treatment: ITreatmentIncoming;
}

export const useTreatmentActionsStyles = makeStyles(() => ({
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        borderRadius: 20,
        padding: '5px 5px',
        display: 'inline-block',
    },
}));

export const TreatmentRow: React.FC<TreatmentRowProps> = (props) => {
    const [editToggle, seteditToggle] = useState(false);
    const [changedToDoneToggle, setChangedToDoneToggle] = useState(false);
    const classes = useTreatmentActionsStyles();

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
                <div style={{ display: 'flex' }}>
                    {!editToggle && (
                        <div>
                            {props.treatment.status === 'Done' ? (
                                <CheckCircleIcon
                                    style={{
                                        width: 30,
                                        height: 30,
                                        marginRight: 10,
                                    }}
                                    onClick={CompleteTreatment}
                                    color="success"
                                ></CheckCircleIcon>
                            ) : (
                                <CheckCircleOutlineIcon
                                    style={{
                                        width: 30,
                                        height: 30,
                                        marginRight: 10,
                                    }}
                                    color="primary"
                                    onClick={CompleteTreatment}
                                ></CheckCircleOutlineIcon>
                            )}
                        </div>
                    )}

                    {editToggle ? (
                        <div onClick={() => formik.handleSubmit()}>
                            <Button variant="contained" size="small">
                                Save
                            </Button>
                        </div>
                    ) : (
                        <Typography
                            className={classes.status}
                            style={{
                                backgroundColor: '#e5faf2',
                                color: '#3bb077',
                            }}
                            onClick={() => seteditToggle(true)}
                        >
                            <EditIcon
                                style={{ width: 20, height: 20 }}
                            ></EditIcon>
                        </Typography>
                    )}
                </div>
            </TableCell>
        </TableRow>
    );
};
