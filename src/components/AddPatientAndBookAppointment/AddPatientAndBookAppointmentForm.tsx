import AddPatientView from './AddPatientView';

export default function AddPatientForm() {
    return (
        <div style={{ width: 'auto' }}>
            <span className="font-bold text-lg">
                Add Patient / Book Appointment
            </span>
            <AddPatientView />
        </div>
    );
}
