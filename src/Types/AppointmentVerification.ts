export default interface IAppointmentVerificationData {
    id: string,
    VerifiedBy: string,
    VerificationStatus: string,
    VerifiedTime: bigint,
    CustomerResponseForReason: string
    
}