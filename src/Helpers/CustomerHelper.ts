import IDateOfBirthData from "../Types/OutgoingDataModels/DateOfBirth";
import { ICustomerProfileOutgoing } from "../Types/OutgoingDataModels/PatientCreationAndAppointmentBookRequest";
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
            phoneNumberId: "",
            countryCode: "",
            number: "",
            type: ""
        } as IPhoneNumberData],
        dateOfBirth: {} as IDateOfBirthData
    } as ICustomerProfileOutgoing
}