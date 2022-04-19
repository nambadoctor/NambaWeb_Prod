import React, { useState } from 'react';
import AddPatientView from '../AddPatientAndBookAppointment/AddPatientView';
import EditPatientView from '../EditPatient/EditPatientView';
import { PatientsTableView } from './PatientsTableView';

export default function PatientsTabMainView() {
    const [isSchedulingAppointment, setIsSchedulingAppointment] =
        useState(false);

    return (
        <div>
            <div className="flex lg:flex-row flex-col justify-center lg:gap-24 gap-8 lg:px-4 px-1">
                <PatientsTableView
                    setIsSchedulingAppointment={setIsSchedulingAppointment}
                />
                <div>
                    <span className="font-bold pt-3 text-lg">
                        {isSchedulingAppointment
                            ? 'Book Appointment'
                            : 'Add/Edit Patient'}
                    </span>
                    {isSchedulingAppointment ? (
                        <AddPatientView />
                    ) : (
                        <EditPatientView />
                    )}
                </div>
            </div>
        </div>
    );
}
