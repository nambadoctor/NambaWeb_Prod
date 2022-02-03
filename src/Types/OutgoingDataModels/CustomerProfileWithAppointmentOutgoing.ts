import IAppointmentOutgoing from './AppointmentOutgoing';
import { ICustomerProfileOutgoing } from './PatientCreationAndAppointmentBookRequest';

export default interface ICustomerProfileWithAppointmentOutgoingData {
    customerProfileIncoming: ICustomerProfileOutgoing;
    appointmentIncoming: IAppointmentOutgoing;
}
