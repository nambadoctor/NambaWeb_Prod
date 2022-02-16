export interface ITreatmentOutgoing {
    treatmentId: string,
    appointmentId: string,
    name: string,
    serviceRequestId: string,
    status: string
    originalInstructions: string,
    actualProcedure: string,
    plannedDateTime: string
}