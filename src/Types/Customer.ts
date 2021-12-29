import IAddressData from "./Address";
import IDateOfBirthData from "./DateOfBirth";
import IPhoneNumberData from "./PhoneNumber";

export default interface ICustomerData {
    id:string,
    generatedId:string,
    firstName:string,
    lastName:string,
    gender:string,
    age:string,
    dateOfBirth:IDateOfBirthData,
    phoneNumbers: IPhoneNumberData[],
    addresses: IAddressData[],
    //appInfo: number,
    //deviceInfo: number,
    languages: string[], 
    emailAddress: string,
    activeAppointmentIds: string[],
    completedAppointmentIds: string[],
    profilePicURL: string,
    primaryServiceProviderId: string,
    primaryOrganisationId: string,
    //serviceRequests: string,
    //children: string,
    //allergies: string,
    //medicalHistory: string,
    trustScore: number,
    createdDate:string,
    lastModifiedDate: string,
    isDeleted: boolean,
}   