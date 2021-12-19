import IPaymentInfoData from "./PaymentInfo";
import IAppointmentTransferData from "./AppointmentTransfer";
import ICancellationData from "./Cancellation";
import IAppointmentVerificationData from "./AppointmentVerification";

export default interface IAppointmentData {
    id:string,
    serviceRequestId:string,
    organisationId:string,
    organisationName:string,
    parentAppointmentId:string,
    customerId:string,
    childId:string,
    requestedBy:string,
    isBlockedByServiceProvider?: boolean,
    status: string,
    serviceFee: number,
    followUpDays: number,
    payments: IPaymentInfoData[],
    isPaid: boolean,
    toForceNotification: boolean,
    isInPersonAppointment: boolean,
    addressId: string,
    appointmentTransfer: IAppointmentTransferData[],
    scheduledAppointmentStartTime: string,
    scheduledAppointmentEndTime: string,
    actualAppointmentStartTime: string,
    actualAppointmentEndTime: string,
    createdDate: string,
    lastModifedDate: string,
    isDeleted:boolean,
    cancellation: ICancellationData[],
    appointmentVerification: IAppointmentVerificationData[],
    paymentType: string
}