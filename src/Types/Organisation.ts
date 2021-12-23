import IAddressData from "./Address";
import IOrganisationTImingData from "./OrganisationTimings";
import IPhoneNumberData from "./PhoneNumber";
import { ObjectId } from "mongodb";


export default interface IOrganisationData {
    id: ObjectId,
    organisationId:string,
    name: string,
    sescription: string,
    emailAddresses: string[],
    type: string,
    logo: string,
    specialties: string[],
    addresses: IAddressData[],
    organisationTimings: IOrganisationTImingData[],
    doctorIds: string[],
    secretaryIds: string[],
    phoneNumbers: IPhoneNumberData,
    createdDate: BigInt,
    lastModifiedDate: BigInt,
    isTestOrganisation: boolean,
    isDeleted: boolean
}