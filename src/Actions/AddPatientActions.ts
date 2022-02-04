import { Action } from "../Types/ActionType";
import { AddPatientReducer_Types } from "../Reducers/AddPatientReducer";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

function ClearPatientStateAction() {
    return {
        type: AddPatientReducer_Types.CLEAR_ADD_PATIENT_STATE,
        payload: null
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
        type: AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_DONE_CALL_SUCCESS,
        payload: isDoneCallSuccess
    };
}

function SetAddPatientIsInvalidNumberAction (isInvalidNumber: boolean) {
    return {
        type: AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_INVALID_NUMBER_SUCCESS,
        payload: isInvalidNumber
    };
}


export const SetAddPatientIsCheckingForCustomer = (isCheckingForCustomer: boolean): Action => (SetAddPatientIsCheckingForCustomerAction(isCheckingForCustomer));

export const SetAddPatientIsCustomerExists = (isCustomerExists: boolean): Action => (SetAddPatientIsCustomerAction(isCustomerExists));

export const SetAddPatientIsMakingDoneCall = (isMakingDoneCall: boolean): Action => (SetAddPatientIsMakingDoneCallAction(isMakingDoneCall));

export const SetAddPatientIsDoneCallSuccess = (isDoneCallSuccess: boolean): Action => (SetAddPatientIsDoneCallSuccessAction(isDoneCallSuccess));

export const SetAddPatientIsInvalidNumber = (isInvalidNumber: boolean): Action => (SetAddPatientIsInvalidNumberAction(isInvalidNumber));

export const ClearAddPatientState = (): Action => (ClearPatientStateAction());