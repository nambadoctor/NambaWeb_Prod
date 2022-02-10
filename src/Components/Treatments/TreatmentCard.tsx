import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ITreatmentIncoming } from '../../Types/IncomingDataModels/TreatmentIncoming';

export interface TreatmentCardProps {
    treatment: ITreatmentIncoming;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.treatment.customerName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Plan: {props.treatment.treatmentPlanName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Instructions: {props.treatment.originalInstructions}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View Plan</Button>
                <Button size="small">Schedule Appointment</Button>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    );
};
