import ICustomerSetRequestData from "../Types/OutgoingDataModels/CustomerSetRequest";
import IDateOfBirthData from "../Types/OutgoingDataModels/DateOfBirth";
import IPhoneNumberData from "../Types/OutgoingDataModels/PhoneNumber";

export default function makeEmptyValueCustomerSetRequestData() {
    return {
        customerId: "",
        customerProfileId: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
        gender: "",
        emailAddress: "",
        profilePicURL: "",
        organisationId: "",
        serviceProviderId: "",
        phoneNumbers: [{
            PhoneNumberId: "",
            CountryCode: "",
            Number: "",
            Type: ""
        } as IPhoneNumberData],
        dateOfBirth: {} as IDateOfBirthData
    } as ICustomerSetRequestData
}