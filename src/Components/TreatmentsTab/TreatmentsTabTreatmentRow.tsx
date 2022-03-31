import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {
    Button,
    TableCell,
    TableRow,
    TextField,
    Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { AddTreatment } from '../../service-actions/TreatmentActions';
import { RootState } from '../../store';
import { ITreatmentIncoming } from '../../types/IncomingDataModels/TreatmentIncoming';
import { ITreatmentOutgoing } from '../../types/OutgoingDataModels/TreatmentOutgoing';
import { getReadableDateAndTimeString } from '../../utils/GeneralUtils';
import { useTreatmentActionsStyles } from '../TreatmentsTable/TreatmentRow';

interface TreatmentRowProps {
    treatment: ITreatmentIncoming;
}

export const TreatmentTabTreatmentRow: React.FC<TreatmentRowProps> = (
    props,
) => {
    const [editToggle, seteditToggle] = useState(false);
    const [changedToDoneToggle, setChangedToDoneToggle] = useState(false);

    const classes = useTreatmentActionsStyles();

    const currentAppointment = useSelector(
        (state: RootState) => state.ConsultationState.Appointment,
    );

    const customers = useSelector(
        (state: RootState) => state.CustomersState.customers,
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
                {customers &&
                    customers.find(
                        (customer) =>
                            customer.customerId === props.treatment.customerId,
                    )?.phoneNumbers[0].number}
            </TableCell>
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
                {new Date(props.treatment.plannedDateTime) > new Date()
                    ? 'Upcoming'
                    : 'Finished'}
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
                                marginRight: 10,
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
