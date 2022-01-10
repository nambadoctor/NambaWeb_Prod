import IDateOfBirthData from "../OutgoingDataModels/DateOfBirth";
import IPhoneNumberData from "../OutgoingDataModels/PhoneNumber";

export default interface ICustomerIncomingData {
    customerId: string,
    customerProfileId: string,
    firstName: string,
    lastName: string,
    gender: string,
    emailAddress: string
    profilePicURL: string
    organisationId: string
    serviceProviderId: string
    phoneNumbers: IPhoneNumberData[]
    dateOfBirth: IDateOfBirthData
}