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

interface TreatmentPlanRowProps {
    treatment: ITreatmentIncoming;
}

export const TreatmentPlanRowDisplay: React.FC<TreatmentPlanRowProps> = (
    props,
) => {
    const [selectedID, setselectedID] = useState('');
    const [editToggle, setEditToggle] = useState(false);

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
        onSubmit: (values) => {},
    });

    useEffect(() => {
        mapOriginalValues()
    }, []);

    function mapOriginalValues () {
        setEditToggle(false)
        formik.setFieldValue('name', props.treatment.name);
        formik.setFieldValue(
            'instructions',
            props.treatment.originalInstructions,
        );
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
                        <div onClick={() => setEditToggle(false)}>done</div>
                        <div onClick={() => mapOriginalValues()}>cancel</div>
                    </div>
                ) : (
                    <div onClick={() => setEditToggle(true)}>
                        <ModeIcon></ModeIcon>
                    </div>
                )}
            </TableCell>
        </TableRow>
    );
};
