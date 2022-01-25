import IPrescriptionIncomingData from "../Types/IncomingDataModels/PrescriptionIncoming";

export function FilterAllAndCurrentPrescriptions (currentAppointmentPrescriptions:IPrescriptionIncomingData[], allAppointmentPrescriptions:IPrescriptionIncomingData[]) {
    var currentPrescriptionIds:string[] = {} as string[]

    currentAppointmentPrescriptions.forEach(prescription => {
        currentPrescriptionIds.push(prescription.prescriptionDocumentId);
    });

    var prescriptionsToReturn = {} as IPrescriptionIncomingData[];

    allAppointmentPrescriptions.forEach(prescription => {
        if (currentPrescriptionIds.includes(prescription.prescriptionDocumentId)) {
            prescriptionsToReturn.push(prescription);
        }
    });

    return prescriptionsToReturn
} 