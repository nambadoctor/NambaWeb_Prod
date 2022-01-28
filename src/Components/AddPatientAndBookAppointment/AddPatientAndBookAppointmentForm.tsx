import AddPatientView from "./AddPatientView";
import BookAppointmentView from "./BookAppointmentView";

export default function AddPatientForm() {
  return (
    <div style={{ marginTop: 20 }}>
      <h5 style={{ marginBottom: 20 }}>Add Patient / Book Appointment</h5>
      <AddPatientView />
      <BookAppointmentView />
    </div>
  );
}
