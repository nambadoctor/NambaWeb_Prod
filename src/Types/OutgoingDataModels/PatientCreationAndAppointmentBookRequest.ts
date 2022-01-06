import IDateOfBirthData from "./DateOfBirth";
import IPhoneNumberData from "./PhoneNumber";

export default interface IPatientCreationAndAppointmentBookData {
    AppointmentType:string,
    AddressId:string,
    Status:string,
    ScheduledAppointmentStartTime:Date|null,
    ScheduledAppointmentEndTime:Date|null,
    ActualAppointmentStartTime:Date|null,
    ActualAppointmentEndTime:Date|null,
    CustomerId:string,
    FirstName:string,
    LastName:string,
    PhoneNumbers:IPhoneNumberData[],
    Gender:string,
    DateOfBirth:IDateOfBirthData,
    EmailAddress:string,
    ProfilePicURL:string,
    OrganisationId:string,
    ServiceProviderId:string
}