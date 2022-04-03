import { ITreatmentOutgoing } from "./TreatmentOutgoing";

export interface ITreatmentPlanOutgoing {
    treatmentPlanId: string,
    treatmentPlanName: string,
    serviceProviderId: string,
    organisationId: string,
    customerId: string,
    sourceServiceRequestId: string,
    treatmentPlanStatus: string,
    treatments: ITreatmentOutgoing[]
}