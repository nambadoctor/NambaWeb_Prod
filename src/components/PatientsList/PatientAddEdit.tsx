import React, { FC } from 'react';
import AddPatientView from '../AddPatientAndBookAppointment/AddPatientView';
import EditPatientView from '../EditPatient/EditPatientView';

export type PatientAddEditProps = {
    isSchedulingAppointment: boolean;
};

export const PatientAddEdit: FC<PatientAddEditProps> = (props) => {
    return (
        <div>
            <span className="font-bold pt-3 text-lg">
                {props.isSchedulingAppointment
                    ? 'Book Appointment'
                    : 'Add/Edit Patient'}
            </span>
            {props.isSchedulingAppointment ? (
                <AddPatientView />
            ) : (
                <EditPatientView />
            )}
        </div>
    );
};
