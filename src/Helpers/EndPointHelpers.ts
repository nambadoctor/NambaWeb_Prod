export function GetServiceProviderProfileEndPoint(serviceProviderId: string, organisationId: String): string {
    return "/serviceprovider/" + serviceProviderId + "/organisation/" + organisationId;
}

export function GetServiceProviderAppointmentsInOrganisationEndPoint(organisationId: string, serviceProviderIds: string[]) {
    return "organisation/" + organisationId + "/appointments" + "?ServiceProviderIds=" + serviceProviderIds.join(",");
}

export function GetServiceProviderCustomersInOrganisationEndPoint(organisationId: string, serviceProviderIds: string[]) {
    return "organisation/" + organisationId + "/customers" + "?ServiceProviderIds=" + serviceProviderIds.join(",");
}