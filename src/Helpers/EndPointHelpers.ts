export function GetServiceProviderProfileEndPoint(serviceProviderId: string, organisationId: String): string {
    return "serviceprovider/" + serviceProviderId + "/organisation/" + organisationId;
}

export function GetServiceProviderAppointmentsInOrganisationEndPoint(organisationId: string, serviceProviderIds: string[]) {
    return "organisation/" + organisationId + "/appointments" + "?ServiceProviderIds=" + serviceProviderIds.join(",");
}

export function GetServiceProviderCustomersInOrganisationEndPoint(organisationId: string, serviceProviderIds: string[]) {
    return "organisation/" + organisationId + "/customers" + "?ServiceProviderIds=" + serviceProviderIds.join(",");
}

export function SetCustomerWithAppointment () {
    return "customer/appointment"
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
    return "customer/CheckByPhoneNumber/+91" + phoneNumber + "/" + organisationId;
}