export function GetServiceProviderProfileEndPoint(serviceProviderId: string, organisationId: String): string {
    return "/serviceprovider/" + serviceProviderId + "/organisation/" + organisationId;
}

export function GetServiceProviderAppointmentsInOrganisation(organisationId: string, serviceProviderIds: string[]) {
    return "organisation/" + organisationId + "/appointments" + "?ServiceProviderIds=" + serviceProviderIds.join(",");
}

export function GetServiceProviderCustomersInOrganisation(organisationId: string, serviceProviderIds: string[]) {
    return "organisation/" + organisationId + "/customers" + "?ServiceProviderIds=" + serviceProviderIds.join(",");
}