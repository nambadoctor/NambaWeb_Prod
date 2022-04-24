
export default interface IPrescriptionIncomingData {
    prescriptionDocumentId: string
    fileName: string
    fileType: string
    sasUrl: string
    uploadedDateTime: string
    appointmentId:string
    serviceRequestId:string
}