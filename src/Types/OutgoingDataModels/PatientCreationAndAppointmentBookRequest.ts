import IDateOfBirthData from './DateOfBirth';
import IPhoneNumberData from './PhoneNumber';

export interface ICustomerProfileOutgoing {
    customerId: string;
    customerProfileId: string;
    firstName: string;
    lastName: string;
    phoneNumbers: IPhoneNumberData[];
    gender: string;
    dateOfBirth: IDateOfBirthData;
    emailAddress: string;
    profilePicURL: string;
    organisationId: string;
    serviceProviderId: string;
}
