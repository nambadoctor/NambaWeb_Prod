import { Action } from "../Types/ActionType";
import ICustomerData from "../Types/ClientDataModels/Customer";
import { AddPatientReducer_Types } from "../Reducers/AddPatientReducer";

function SetAddPatientPhoneNumberAction(phoneNumber: string) {
    return {
        type: AddPatientReducer_Types.SET_ADD_PATIENT_STATE_PHONE_NUMBER,
        payload: phoneNumber
    };
}

function SetAddPatientCustomerProfileAction(customerProfile: ICustomerData) {
    return {
        type: AddPatientReducer_Types.SET_ADD_PATIENT_STATE_CUSTOMER_PROFILE,
        payload: customerProfile
    };
}

function SetAddPatientIsCheckingForCustomerAction(isCheckingForCustomer: boolean) {
    return {
        type: AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_CHECKING_NUMBER,
        payload: isCheckingForCustomer
    };
}

function SetAddPatientIsCustomerAction(isCustomerExists: boolean) {
    return {
        type: AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_CUSTOMER_EXISTS,
        payload: isCustomerExists
    };
}

export const SetAddPatientPhoneNumber = (phoneNumber: string): Action => (SetAddPatientPhoneNumberAction(phoneNumber));

export const SetAddPatientCustomerProfile = (customerProfile: ICustomerData): Action => (SetAddPatientCustomerProfileAction(customerProfile));

export const SetAddPatientIsCheckingForCustomer = (isCheckingForCustomer: boolean): Action => (SetAddPatientIsCheckingForCustomerAction(isCheckingForCustomer));

export const SetAddPatientIsCustomerExists = (isCustomerExists: boolean): Action => (SetAddPatientIsCustomerAction(isCustomerExists));