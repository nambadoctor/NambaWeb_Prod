export function GetServiceProviderProfileEndPoint(
    serviceProviderId: string,
    organisationId: String,
): string {
    return (
        'serviceprovider/' +
        serviceProviderId +
        '/organisation/' +
        organisationId
    );
}

export function GetServiceProviderAppointmentsInOrganisationEndPoint(
    organisationId: string,
    serviceProviderIds: string[],
) {
    return (
        'organisation/' +
        organisationId +
        '/appointments' +
        '?ServiceProviderIds=' +
        serviceProviderIds.join(',')
    );
}

export function GetServiceProviderTreatmentsInOrganisationEndPoint(
    organisationId: string,
    serviceProviderId: string,
) {
    return (
        'treatmentplan/treatments/' + organisationId + '/' + serviceProviderId
    );
}

export function GetServiceProviderTreatmentPlansInOrganisationEndPoint(
    organisationId: string,
    serviceProviderId: string,
    customerId: string,
) {
    return (
        'treatmentplan/' +
        organisationId +
        '/' +
        serviceProviderId +
        '?CustomerId=' +
        customerId
    );
}

export function AddTreatmentEndPoint(treatmentPlanId: string) {
    return 'treatmentplan/treatment/' + treatmentPlanId;
}

export function AddTreatmentPlanEndPoint() {
    return 'treatmentplan';
}

export function AddTreatmentPlanDocumentEndPoint() {
    return 'treatmentplan/document';
}

export function DeleteTreatmentPlanDocumentEndPoint(
    treatmentPlanDocumentId: string,
) {
    return 'treatmentplan/document/' + treatmentPlanDocumentId;
}

export function GetTreatmentPlanDocumentsForAppointmentEndPoint(
    serviceRequestId: string,
) {
    return 'treatmentplan/document/' + serviceRequestId;
}

export function GetTreatmentPlanDocumentsForCustomerEndPoint(
    customerId: string,
) {
    return 'treatmentplan/document/customer/' + customerId;
}

export function DeleteTreatmentEndPoint(
    treatmentId: string,
    treatmentPlanId: string,
) {
    return 'treatmentplan/treatment/' + treatmentPlanId + '/' + treatmentId;
}

export function GetServiceProviderTreatmentsInOrganisationForCustomerEndPoint(
    organisationId: string,
    serviceProviderId: string,
    customerId: string,
    isUpcoming: boolean,
) {
    return (
        'treatmentplan/treatments/' +
        organisationId +
        '/' +
        serviceProviderId +
        '?CustomerId=' +
        customerId +
        '&IsUpcoming=' +
        isUpcoming
    );
}

export function GetServiceProviderCustomersInOrganisationEndPoint(
    organisationId: string,
    serviceProviderIds: string[],
) {
    return (
        'organisation/' +
        organisationId +
        '/customers' +
        '?ServiceProviderIds=' +
        serviceProviderIds.join(',')
    );
}

export function CancelAppointmentEndPoint() {
    return 'appointment/cancel';
}

export function SetNewAppointmentEndPoint() {
    return 'appointment';
}

export function EndAppointmentEndPoint() {
    return 'appointment/end';
}

export function SetNewAppointmentWithTreatmentEndPoint() {
    return 'appointment/treatment';
}

export function SetCustomerWithAppointmentEndPoint() {
    return 'customer/appointment';
}

export function SetCustomerEndPoint() {
    return 'customer';
}

export function GetServiceProviderBasicEndPoint() {
    return 'serviceprovider';
}

export function GetServiceProvidersInOrgEndPoint(organisationId: string) {
    return 'serviceprovider/organisation/' + organisationId;
}

export function GetServiceProviderSettingsEndpoint(
    organisationId: string,
    serviceProviderId: string,
) {
    return 'settings_configuration/' + organisationId + '/' + serviceProviderId;
}

export function GetAppointmentForServiceProviderEndPoint(
    appointmentId: string,
    serviceProviderId: string,
) {
    return 'appointment/' + appointmentId + '/' + serviceProviderId;
}

export function GetCustomerForServiceProviderEndPoint(
    customerId: string,
    organisationId: string,
) {
    return 'customer/' + customerId + '/' + organisationId;
}

export function GetCustomerFromPhoneNumberEndPoint(
    phoneNumber: string,
    organisationId: string,
) {
    return 'customer/phonenumber/+91' + phoneNumber + '/' + organisationId;
}

export function SetCustomerReportEndPoint() {
    return 'report';
}

export function SetCustomerStrayReportEndPoint(
    OrganisationId: string,
    ServiceProviderId: string,
    CustomerId: string,
) {
    return (
        'report/Stray/' +
        OrganisationId +
        '/' +
        ServiceProviderId +
        '/' +
        CustomerId
    );
}

export function SetCustomerPrescriptionEndPoint() {
    return 'prescription';
}

export function SetCustomerNoteEndPoint() {
    return 'note';
}

export function SetCustomerStrayNoteEndPoint(
    OrganisationId: string,
    ServiceProviderId: string,
    CustomerId: string,
) {
    return (
        'note/Stray/' +
        OrganisationId +
        '/' +
        ServiceProviderId +
        '/' +
        CustomerId
    );
}

export function SetCustomerStrayPrescriptionEndPoint(
    OrganisationId: string,
    ServiceProviderId: string,
    CustomerId: string,
) {
    return (
        'prescription/Stray/' +
        OrganisationId +
        '/' +
        ServiceProviderId +
        '/' +
        CustomerId
    );
}

export function GetCustomerReportEndPoint(serviceRequestId: string) {
    return 'report/' + serviceRequestId;
}

export function GetCustomerPrescriptionEndPoint(serviceRequestId: string) {
    return 'prescription/' + serviceRequestId;
}

export function GetCustomerNotesEndPoint(serviceRequestId: string) {
    return 'note/' + serviceRequestId;
}

export function DeleteCustomerReportEndPoint(reportId: string) {
    return 'report/' + reportId;
}

export function DeleteCustomerPrescriptionEndPoint(prescriptionid: string) {
    return 'prescription/' + prescriptionid;
}

export function DeleteCustomerNoteEndPoint(noteId: string) {
    return 'note/' + noteId;
}

export function GetCustomerAllReportsEndPoint(
    organisationId: string,
    customerId: string,
) {
    return 'report/All/' + organisationId + '/' + customerId;
}

export function GetCustomerAllPrescriptionsEndPoint(
    organisationId: string,
    customerId: string,
) {
    return 'prescription/All/' + organisationId + '/' + customerId;
}

export function GetCustomerAllNotesEndPoint(
    organisationId: string,
    customerId: string,
) {
    return 'note/All/' + organisationId + '/' + customerId;
}

export function ReferPatientEndPoint() {
    return '/notification/referral';
}

export function FollowupEndPoint() {
    return 'notification/followup';
}
