import IAddressData from "./Address";
import IDateOfBirthData from "./DateOfBirth";
import IPhoneNumberData from "./PhoneNumber";

export default interface ICustomerData {
    customerId:string,
    phoneNumber:string,
    firstName:string,
    lastName:string,
    gender:string,
    dateOfBirth:string
}