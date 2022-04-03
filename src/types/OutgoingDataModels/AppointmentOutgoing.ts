export default interface IAppointmentOutgoing {
    appointmentId:string,
    organisationId:string,
    serviceRequestId:string,
    serviceProviderId:string,
    customerId:string,
    appointmentType:string,
    addressId:string,
    status:string,
    treatmentId:string,
    treatmentPlanId:string,
    scheduledAppointmentStartTime:Date|null,
    scheduledAppointmentEndTime:Date|null,
    actualAppointmentStartTime:Date|null,
    actualAppointmentEndTime:Date|null
}