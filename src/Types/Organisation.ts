import IAddressData from "./Address";
import IOrganisationTImingData from "./OrganisationTimings";
import IPhoneNumberData from "./PhoneNumber";

export default interface IOrganisationData {
    id: string,
    Name: string,
    Description: string,
    EmailAddresses: string[],
    Type: string,
    Logo: string,
    Specialties: string[],
    Addresses: IAddressData[],
    OrganisationTimings: IOrganisationTImingData[],
    DoctorIds: string[],
    SecretaryIds: string[],
    PhoneNumbers: IPhoneNumberData,
    CreatedDate: BigInt,
    LastModifiedDate: BigInt,
    IsTestOrganisation: boolean,
    IsDeleted: boolean
}