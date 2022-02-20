import { Button, TableCell, TableRow, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ITreatmentIncoming } from '../../Types/IncomingDataModels/TreatmentIncoming';
import { getReadableDateAndTimeString } from '../../Utils/GeneralUtils';
import ModeIcon from '@mui/icons-material/Mode';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ITreatmentOutgoing } from '../../Types/OutgoingDataModels/TreatmentOutgoing';
import { useDispatch } from 'react-redux';
import {
    AddTreatment,
    DeleteTreatment,
} from '../../ServiceActions/TreatmentActions';
import ClearIcon from '@mui/icons-material/Clear';

interface TreatmentPlanRowProps {
    treatment: ITreatmentIncoming;
}

export const TreatmentPlanRowDisplay: React.FC<TreatmentPlanRowProps> = (
    props,
) => {
    const [selectedID, setselectedID] = useState('');
    const [editToggle, setEditToggle] = useState(false);

    const dispatch = useDispatch();

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
                treatmentId: props.treatment.treatmentId,
                appointmentId: props.treatment.appointmentId,
                name: values.name,
                serviceRequestId: props.treatment.serviceRequestId,
                status: props.treatment.status,
                originalInstructions: props.treatment.originalInstructions,
                actualProcedure: values.instructions,
                plannedDateTime: values.plannedDate,
            } as ITreatmentOutgoing;

            dispatch(
                AddTreatment(
                    outGoingTreatment,
                    props.treatment.treatmentPlanId,
                ),
            );
            setEditToggle(false);
        },
    });

    useEffect(() => {
        mapOriginalValues();
    }, []);

    function mapOriginalValues() {
        setEditToggle(false);
        formik.setFieldValue('name', props.treatment.name);
        formik.setFieldValue('instructions', props.treatment.actualProcedure);
        formik.setFieldValue(
            'plannedDate',
            new Date(props.treatment.plannedDateTime),
        );
    }

    return (
        <TableRow
            key={props.treatment.treatmentId}
            // selected={selectedID === localTreatment.treatmentId}
        >
            <TableCell align="left">
                {editToggle ? (
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
                ) : (
                    <div>{formik.values.name}</div>
                )}
            </TableCell>
            <TableCell align="left">
                {editToggle ? (
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
                ) : (
                    <div>{formik.values.instructions}</div>
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
                        />
                    </LocalizationProvider>
                ) : (
                    <div>
                        {getReadableDateAndTimeString(
                            props.treatment.plannedDateTime,
                        )}
                    </div>
                )}
            </TableCell>
            <TableCell align="left">
                {editToggle ? (
                    <div>
                        <div onClick={() => formik.handleSubmit()}>done</div>
                        <div onClick={() => mapOriginalValues()}>cancel</div>
                    </div>
                ) : (
                    <div>
                        <div onClick={() => setEditToggle(true)}>
                            <ModeIcon></ModeIcon>
                        </div>
                        <div
                            onClick={() =>
                                dispatch(DeleteTreatment(props.treatment))
                            }
                        >
                            <ClearIcon></ClearIcon>
                        </div>
                    </div>
                )}
            </TableCell>
        </TableRow>
    );
};
