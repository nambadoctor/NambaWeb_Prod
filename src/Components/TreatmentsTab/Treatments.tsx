import {
    TableContainer,
    Paper,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Table,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { TreatmentRow } from '../TreatmentsTable/TreatmentRow';
import { usePatientTableStyles } from '../UIHelperComponents/TableStyles';
import { TreatmentTabTreatmentRow } from './TreatmentsTabTreatmentRow';

export default function Treatments() {
    const classes = usePatientTableStyles();

    const treatments = useSelector(
        (state: RootState) => state.TreatmentState.treatments,
    );

    return (
        <div style={{ padding: 10 }}>
            <TableContainer component={Paper} style={{ borderRadius: 15 }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow style={{ height: 10 }}>
                            <TableCell
                                className={classes.tableHeaderCell}
                                align="left"
                            >
                                Customer Name
                            </TableCell>
                            <TableCell
                                className={classes.tableHeaderCell}
                                align="left"
                            >
                                Customer Number
                            </TableCell>
                            <TableCell
                                className={classes.tableHeaderCell}
                                align="left"
                            >
                                Plan Name
                            </TableCell>
                            <TableCell
                                className={classes.tableHeaderCell}
                                align="left"
                            >
                                Instructions
                            </TableCell>
                            <TableCell
                                className={classes.tableHeaderCell}
                                align="left"
                            >
                                Status
                            </TableCell>
                            <TableCell
                                className={classes.tableHeaderCell}
                                align="left"
                            >
                                Date
                            </TableCell>
                            <TableCell
                                className={classes.tableHeaderCell}
                                align="left"
                            >
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {treatments &&
                            treatments.map((treatment, index) => (
                                <TreatmentTabTreatmentRow
                                    treatment={treatment}
                                ></TreatmentTabTreatmentRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}