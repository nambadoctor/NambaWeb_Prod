export default interface IAppointmentData {
    appointmentId: string;
    organisationId: string;
    serviceRequestId: string;
    serviceProviderId: string;
    serviceProviderName: string;
    customerId: string;
    customerName: string;
    appointmentType: string;
    status: string;
    scheduledAppointmentStartTime: string;
    scheduledAppointmentEndTime: string;
    actualAppointmentStartTime: string;
    actualAppointmentEndTime: string;
}
