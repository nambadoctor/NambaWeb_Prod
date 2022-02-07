import { SeverityLevel } from "@microsoft/applicationinsights-web";
import IAppointmentData from "../Types/IncomingDataModels/Appointment";

export function getIndexOfAppointment (appointments:Array<IAppointmentData>, appointment:IAppointmentData|null) {
    if (appointments && appointment) {
        return appointments.findIndex(x => x.appointmentId === appointment.appointmentId);
    } else {
        return null;
    }
}