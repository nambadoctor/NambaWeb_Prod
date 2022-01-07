import IDateOfBirthData from "./DateOfBirth";
import IPhoneNumberData from "./PhoneNumber";

export default interface ICustomerSetRequestData {
    customerId: string,
    customerProfileId: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    gender: string,
    emailAddress: string,
    profilePicURL: string,
    organisationId: string,
    serviceProviderId: string,
    phoneNumbers: IPhoneNumberData[],
    dateOfBirth: IDateOfBirthData;
}