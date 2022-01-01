import IAppointmentData from "../Types/Appointment";
import IOrganisationBasic from "../Types/ClientDataModels/OrganisationBasic";
import IDeNormalisedAppointmentData from "../Types/DeNormalisedAppointment";
import { isDatesEqual } from "../Utils/GeneralUtils";

export default function filterAppointments(
    dates: Date[],
    appointments: IDeNormalisedAppointmentData[],
    selectedOrganisation?: IOrganisationBasic) {

    var filteredAppointments: Array<IDeNormalisedAppointmentData> = new Array<IDeNormalisedAppointmentData>();

    function checkForDateCompliance(appointment: IAppointmentData) {
        var appointmentDate = new Date(appointment.scheduledAppointmentStartTime)
        var check = isDatesEqual(dates[0], appointmentDate)
        return check;
    }


    function checkForOrgCompliance(appointment: IAppointmentData) {
        if (selectedOrganisation != null) {
            //TODO: change identifying key to orgId not name. temporarily using orgName because orgId is not deserialised properly
            return appointment.organisationName == selectedOrganisation!.name
        } else {
            return appointment.organisationId.trim() == "" || appointment.organisationId == null
        }
    }

    appointments.forEach(appointment => {
        if (checkForDateCompliance(appointment.appointment) &&
            checkForOrgCompliance(appointment.appointment)) {
            //CHECK FOR CATEGORY TYPE IS DONE IN THE MAPPING IN APPOINTMENTSTABLE.TSX

            filteredAppointments.push(appointment);
        }
    });

    return filteredAppointments;
}
