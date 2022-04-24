import { ITreatmentIncoming } from "./TreatmentIncoming";

export interface ITreatmentPlanIncoming {
    treatmentPlanId: string,
    treatmentPlanName: string,
    serviceProviderId: string,
    organisationId: string,
    customerId: string,
    customerName: string,
    serviceProviderName: string,
    originServiceRequestId: string,
    treatments: ITreatmentIncoming[],
    createdDateTime: string,
}