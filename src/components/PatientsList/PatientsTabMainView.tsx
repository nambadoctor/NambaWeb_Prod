import React, { useState } from 'react';
import { PatientAddEdit } from './PatientAddEdit';
import { PatientsTableView } from './PatientsTableView';

export default function PatientsTabMainView() {
    const [isSchedulingAppointment, setIsSchedulingAppointment] =
        useState(false);

    return (
        <div>
            <div className="flex lg:flex-row flex-col justify-center lg:gap-24 gap-8 lg:px-4 px-1">
                <div className="xl:min-w-[800px]">
                    <PatientsTableView
                        setIsSchedulingAppointment={setIsSchedulingAppointment}
                    />
                </div>
                <PatientAddEdit
                    isSchedulingAppointment={isSchedulingAppointment}
                />
            </div>
        </div>
    );
}
