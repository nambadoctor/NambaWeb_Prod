import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { ITreatmentIncoming } from '../../Types/IncomingDataModels/TreatmentIncoming';
import { Row, Col } from 'react-bootstrap';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import { useState } from 'react';
import { SetSelectedTreatment } from '../../Actions/TreatmentActions';

const usePatientTableStyles = makeStyles(() => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950,
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: '#e5f0fe',
        color: '#000000',
    },
    avatar: {
        backgroundColor: '#000000',
        color: '#FFFFFF',
    },
    name: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        borderRadius: 6,
        padding: '5px 12px',
        display: 'inline-block',
    },
    tableRow: {
        '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: 'purple',
            '& > .MuiTableCell-root': {
                color: 'yellow',
            },
        },
    },
}));

export default function TreatmentsTable() {
    const classes = usePatientTableStyles();
    const dispatch = useDispatch();

    const [selectedID, setSelectedID] = useState('');

    const treatments = useSelector(
        (state: RootState) => state.CurrentCustomerState.Treatments,
    );

    function SelectTreatment(treatment: ITreatmentIncoming) {
        setSelectedID(treatment.treatmentId);
        dispatch(SetSelectedTreatment(treatment));
    }

    function makeCustomerListDisplay() {
        return treatments!.map(
            (treatment: ITreatmentIncoming, index: number) => (
                <TableRow
                    key={treatment.treatmentId}
                    selected={selectedID === treatment.treatmentId}
                >
                    <TableCell align="left">
                        {treatment.treatmentPlanName}
                    </TableCell>
                    <TableCell align="left">{treatment.name}</TableCell>
                    <TableCell align="left">
                        {treatment.actualProcedure}
                    </TableCell>
                    <TableCell align="left">
                        <Row>
                            <Col>
                                <VisibilityIcon></VisibilityIcon>
                            </Col>
                            <Col>
                                <div onClick={() => SelectTreatment(treatment)}>
                                    <MoreTimeIcon></MoreTimeIcon>
                                </div>
                            </Col>
                        </Row>
                    </TableCell>
                </TableRow>
            ),
        );
    }

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginRight: '5em',
                }}
            ></div>

            <TableContainer component={Paper} style={{ borderRadius: 15 }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow style={{ height: 10 }}>
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
                                Treatment Name
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
                            ></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {treatments &&
                            treatments.length !== 0 &&
                            makeCustomerListDisplay()}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
