export function GetServiceProviderProfileEndPoint(serviceProviderId: string, organisationId: String): string {
    return "serviceprovider/" + serviceProviderId + "/organisation/" + organisationId;
}

export function GetServiceProviderAppointmentsInOrganisationEndPoint(organisationId: string, serviceProviderIds: string[]) {
    return "organisation/" + organisationId + "/appointments" + "?ServiceProviderIds=" + (serviceProviderIds.join(","));
}

export function GetServiceProviderCustomersInOrganisationEndPoint(organisationId: string, serviceProviderIds: string[]) {
    return "organisation/" + organisationId + "/customers" + "?ServiceProviderIds=" + (serviceProviderIds.join(","));
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

export function SetCustomerPrescriptionEndPoint() {
    return "prescription"
}

export function GetCustomerReportEndPoint(serviceRequestId:string) {
    return "report/" + serviceRequestId
}

export function GetCustomerPrescriptionEndPoint(serviceRequestId:string) {
    return "prescription/" + serviceRequestId
}

export function DeleteCustomerReportEndPoint (serviceRequestId:string, reportId:string) {
    return "report/" + serviceRequestId + "/" + reportId
}

export function DeleteCustomerPrescriptionEndPoint (serviceRequestId:string, prescriptionid:string) {
    return "prescription/" + serviceRequestId + "/" + prescriptionid
}