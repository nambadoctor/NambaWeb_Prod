import IPrescriptionIncomingData from '../Types/IncomingDataModels/PrescriptionIncoming';

export function FilterAllAndCurrentPrescriptions(
    currentAppointmentPrescriptions: IPrescriptionIncomingData[] | null,
    allAppointmentPrescriptions: IPrescriptionIncomingData[],
) {
    var prescriptionsToReturn: IPrescriptionIncomingData[] = [];

    if (
        currentAppointmentPrescriptions &&
        currentAppointmentPrescriptions.length > 0
    ) {
        var currentPrescriptionIds: string[] = [];

        currentAppointmentPrescriptions.forEach((prescription) => {
            currentPrescriptionIds.push(prescription.prescriptionDocumentId);
        });

        allAppointmentPrescriptions.forEach((prescription) => {
            if (
                !currentPrescriptionIds.includes(
                    prescription.prescriptionDocumentId,
                )
            ) {
                prescriptionsToReturn.push(prescription);
            }
        });
    } else {
        prescriptionsToReturn = allAppointmentPrescriptions;
    }

    return prescriptionsToReturn;
}
