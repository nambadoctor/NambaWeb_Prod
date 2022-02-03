export function GetServiceProviderProfileEndPoint(serviceProviderId: string, organisationId: String): string {
    return "serviceprovider/" + serviceProviderId + "/organisation/" + organisationId;
}

export function GetServiceProviderAppointmentsInOrganisationEndPoint(organisationId: string, serviceProviderIds: string[]) {
    return "organisation/" + organisationId + "/appointments" + "?ServiceProviderIds=" + (serviceProviderIds.join(","));
}

export function GetServiceProviderCustomersInOrganisationEndPoint(organisationId: string, serviceProviderIds: string[]) {
    return "organisation/" + organisationId + "/customers" + "?ServiceProviderIds=" + (serviceProviderIds.join(","));
}

export function CancelAppointmentEndPoint () {
    return "appointment/cancel"
}

export function SetNewAppointmentEndPoint () {
    return "appointment"
}

export function SetCustomerWithAppointment () {
    return "customer/appointment"
}

export function SetCustomerEndPoint () {
    return "customer"
}

export function GetServiceProviderBasicEndPoint () {
    return "serviceprovider";
}

export function GetAppointmentForServiceProvider(appointmentId:string, serviceProviderId:string) {
    return  "appointment/" + appointmentId + "/" + serviceProviderId;
}

export function GetCustomerForServiceProvider(customerId:string, organisationId:string) {
    return  "customer/" + customerId + "/" + organisationId;
}

export function GetCustomerFromPhoneNumber(phoneNumber:string, organisationId:string) {
    return "customer/phonenumber/+91" + phoneNumber + "/" + organisationId;
}

export function SetCustomerReportEndPoint() {
    return "report"
}

export function SetCustomerStrayReportEndPoint(OrganisationId:string, ServiceProviderId:string, CustomerId:string) {
    return "report/Stray/" + OrganisationId + "/" + ServiceProviderId + "/" + CustomerId
}

export function SetCustomerPrescriptionEndPoint() {
    return "prescription"
}

export function SetCustomerNoteEndPoint() {
    return "note"
}

export function EditCustomerNoteEndPoint () {
    return "note/edit"
}

export function SetCustomerStrayPrescriptionEndPoint(OrganisationId:string, ServiceProviderId:string, CustomerId:string) {
    return "prescription/Stray/" + OrganisationId + "/" + ServiceProviderId + "/" + CustomerId
}

export function GetCustomerReportEndPoint(serviceRequestId:string) {
    return "report/" + serviceRequestId
}

export function GetCustomerPrescriptionEndPoint(serviceRequestId:string) {
    return "prescription/" + serviceRequestId
}

export function GetCustomerNotesEndPoint(serviceRequestId:string) {
    return "note/" + serviceRequestId
}

export function DeleteCustomerReportEndPoint (reportId:string) {
    return "report/" + reportId
}

export function DeleteCustomerPrescriptionEndPoint (prescriptionid:string) {
    return "prescription/" + prescriptionid
}

export function DeleteCustomerNoteEndPoint (noteId:string) {
    return "note/" + noteId
}

export function GetCustomerAllReportsEndPoint (organisationId:string, customerId:string) {
    return "report/All/" + organisationId + "/" + customerId;
}

export function GetCustomerAllPrescriptionsEndPoint (organisationId:string, customerId:string) {
    return "prescription/All/" + organisationId + "/" + customerId;
}

export function GetCustomerAllNotesEndPoint (organisationId:string, customerId:string) {
    return "note/All/" + organisationId + "/" + customerId;
}
