import { SeverityLevel } from "@microsoft/applicationinsights-web";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import IAppointmentData from "../Types/ClientDataModels/Appointment";
import { isDatesEqual } from "../Utils/GeneralUtils";

export default function filterAppointments(
    dates: Date[],
    appointments: IAppointmentData[]) {

    SetTrackTrace("Entered Filter Appointments Function", "FilterAppointments", SeverityLevel.Information);

    SetTrackTrace("Filtering Appointments By: " + dates, "FilterAppointments", SeverityLevel.Information);

    var filteredAppointments: Array<IAppointmentData> = new Array<IAppointmentData>();

    function checkForDateCompliance(appointment: IAppointmentData) {

        var appointmentDate = new Date(appointment.scheduledAppointmentStartTime)
        var check = isDatesEqual(dates[0], appointmentDate)
        return check;
    }

    appointments.forEach(appointment => {
        if (checkForDateCompliance(appointment)) {
            filteredAppointments.push(appointment);
        }
    });

    SetTrackTrace("Done Filtering Appointments: " + filteredAppointments.length, "FilterAppointments", SeverityLevel.Information);

    return filteredAppointments;
}
