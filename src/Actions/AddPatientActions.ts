import { Action } from "../Types/ActionType";
import ICustomerData from "../Types/IncomingDataModels/Customer";
import { AddPatientReducer_Types } from "../Reducers/AddPatientReducer";
import ICustomerSetRequestData from "../Types/OutgoingDataModels/CustomerSetRequest";

function SetAddPatientPhoneNumberAction(phoneNumber: string) {
    return {
        type: AddPatientReducer_Types.SET_ADD_PATIENT_STATE_PHONE_NUMBER,
        payload: phoneNumber
    };
}

function SetAddPatientCustomerProfileAction(customerProfile: ICustomerSetRequestData) {
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

export const SetAddPatientPhoneNumber = (phoneNumber: string): Action => (SetAddPatientPhoneNumberAction(phoneNumber));

export const SetAddPatientCustomerProfile = (customerProfile: ICustomerSetRequestData): Action => (SetAddPatientCustomerProfileAction(customerProfile));

export const SetAddPatientIsCheckingForCustomer = (isCheckingForCustomer: boolean): Action => (SetAddPatientIsCheckingForCustomerAction(isCheckingForCustomer));

export const SetAddPatientIsCustomerExists = (isCustomerExists: boolean): Action => (SetAddPatientIsCustomerAction(isCustomerExists));

export const SetAddPatientIsMakingDoneCall = (isMakingDoneCall: boolean): Action => (SetAddPatientIsMakingDoneCallAction(isMakingDoneCall));

export const SetAddPatientIsDoneCallSuccess = (isDoneCallSuccess: boolean): Action => (SetAddPatientIsDoneCallSuccessAction(isDoneCallSuccess));