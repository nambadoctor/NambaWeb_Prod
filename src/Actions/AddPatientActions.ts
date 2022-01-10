import { Action } from "../Types/ActionType";
import ICustomerData from "../Types/IncomingDataModels/Customer";
import { AddPatientReducer_Types } from "../Reducers/AddPatientReducer";
import { ICustomerProfileOutgoing } from "../Types/OutgoingDataModels/PatientCreationAndAppointmentBookRequest";

function SetAddPatientPhoneNumberAction(phoneNumber: string) {
    return {
        type: AddPatientReducer_Types.SET_ADD_PATIENT_STATE_PHONE_NUMBER,
        payload: phoneNumber
    };
}

function SetAddPatientCustomerProfileAction(customerProfile: ICustomerProfileOutgoing) {
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

function SetAddPatientIsMakingDoneCallAction(isMakingDoneCall: boolean) {
    return {
        type: AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_MAKING_DONE_CALL,
        payload: isMakingDoneCall
    };
}

function SetAddPatientIsDoneCallSuccessAction(isDoneCallSuccess: boolean) {
    return {
        type: AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_CUSTOMER_EXISTS,
        payload: isDoneCallSuccess
    };
}

function SetAddPatientIsInvalidNumberAction (isInvalidNumber: boolean) {
    return {
        type: AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_INVALID_NUMBER_SUCCESS,
        payload: isInvalidNumber
    };
}

export const SetAddPatientPhoneNumber = (phoneNumber: string): Action => (SetAddPatientPhoneNumberAction(phoneNumber));

export const SetAddPatientCustomerProfile = (customerProfile: ICustomerProfileOutgoing): Action => (SetAddPatientCustomerProfileAction(customerProfile));

export const SetAddPatientIsCheckingForCustomer = (isCheckingForCustomer: boolean): Action => (SetAddPatientIsCheckingForCustomerAction(isCheckingForCustomer));

export const SetAddPatientIsCustomerExists = (isCustomerExists: boolean): Action => (SetAddPatientIsCustomerAction(isCustomerExists));

export const SetAddPatientIsMakingDoneCall = (isMakingDoneCall: boolean): Action => (SetAddPatientIsMakingDoneCallAction(isMakingDoneCall));

export const SetAddPatientIsDoneCallSuccess = (isDoneCallSuccess: boolean): Action => (SetAddPatientIsDoneCallSuccessAction(isDoneCallSuccess));

export const SetAddPatientIsInvalidNumber = (isInvalidNumber: boolean): Action => (SetAddPatientIsInvalidNumberAction(isInvalidNumber));