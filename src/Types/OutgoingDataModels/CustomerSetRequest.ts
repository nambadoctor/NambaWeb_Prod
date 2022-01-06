import IDateOfBirthData from "./DateOfBirth";
import IPhoneNumberData from "./PhoneNumber";

export default interface ICustomerSetRequestData {
    CustomerId: string,
    CustomerProfileId: string,
    phoneNumber: string,
    FirstName: string,
    LastName: string,
    Gender: string,
    EmailAddress: string,
    ProfilePicURL: string,
    OrganisationId: string,
    ServiceProviderId: string,
    PhoneNumbers: IPhoneNumberData[],
    DateOfBirth: IDateOfBirthData;
}