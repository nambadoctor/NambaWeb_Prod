import IDateOfBirthData from '../types/OutgoingDataModels/DateOfBirth';
import { ICustomerProfileOutgoing } from '../types/OutgoingDataModels/PatientCreationAndAppointmentBookRequest';
import IPhoneNumberData from '../types/OutgoingDataModels/PhoneNumber';

export default function makeEmptyValueCustomerSetRequestData() {
    return {
        customerId: '',
        customerProfileId: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        gender: '',
        emailAddress: '',
        profilePicURL: '',
        organisationId: '',
        serviceProviderId: '',
        phoneNumbers: [
            {
                phoneNumberId: '',
                countryCode: '',
                number: '',
                type: '',
            } as IPhoneNumberData,
        ],
        dateOfBirth: {
            dateOfBirthId: '',
            date: new Date(),
            age: '',
            createdDate: new Date(),
        } as IDateOfBirthData,
    } as ICustomerProfileOutgoing;
}
