import IAppointmentData from "./Appointment";

export default interface IDeNormalisedAppointmentData {
    appointment: IAppointmentData,
    serviceProviderId:String,
    customerName:string,
    serviceProviderName:string,
}