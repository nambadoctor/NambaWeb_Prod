export default interface IAppointmentTransferData {
    id: string,
    TransferredBy: string,
    TransferredTo: string,
    TransferReason: string,
    TransferredTime: bigint
}