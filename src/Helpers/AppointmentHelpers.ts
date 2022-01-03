import IAppointmentData from "../Types/ClientDataModels/Appointment";
import IOrganisationBasic from "../Types/ClientDataModels/OrganisationBasic";
import { isDatesEqual } from "../Utils/GeneralUtils";

export default function filterAppointments(
    dates: Date[],
    appointments: IAppointmentData[],
    selectedOrganisation?: IOrganisationBasic) {

    var filteredAppointments: Array<IAppointmentData> = new Array<IAppointmentData>();

    function checkForDateCompliance(appointment: IAppointmentData) {
        var appointmentDate = new Date(appointment.scheduledAppointmentStartTime)
        var check = isDatesEqual(dates[0], appointmentDate)
        return check;
    }

    appointments.forEach(appointment => {
        if (checkForDateCompliance(appointment)) {
            //CHECK FOR CATEGORY TYPE IS DONE IN THE MAPPING IN APPOINTMENTSTABLE.TSX

            filteredAppointments.push(appointment);
        }
    });

    return filteredAppointments;
}
