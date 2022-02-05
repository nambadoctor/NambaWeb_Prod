import { Action } from "../Types/ActionType"

export enum AddPatientReducer_Types {
    SET_ADD_PATIENT_STATE_IS_CHECKING_NUMBER = "SET_ADD_PATIENT_STATE_IS_CHECKING_NUMBER",
    SET_ADD_PATIENT_STATE_IS_CUSTOMER_EXISTS = "SET_ADD_PATIENT_STATE_IS_CUSTOMER_EXISTS",
    SET_ADD_PATIENT_STATE_IS_INVALID_NUMBER_SUCCESS = "SET_ADD_PATIENT_STATE_IS_INVALID_NUMBER_SUCCESS",
    CLEAR_ADD_PATIENT_STATE = "CLEAR_ADD_PATIENT_STATE"
}

export interface AddPatientState {
    isCheckingNumber: boolean,
    isCustomerExists: boolean,
    isInvalidNumber: boolean,
}

const initialState: AddPatientState = {
    isCheckingNumber: false,
    isCustomerExists: false,
    isInvalidNumber: false,
}

export const addPatientReducer = (state: AddPatientState = initialState, action: Action): AddPatientState => {
    switch (action.type) {
        case AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_CHECKING_NUMBER:
            return {
                ...state,
                isCheckingNumber: action.payload,
            }
        case AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_CUSTOMER_EXISTS:
            return {
                ...state,
                isCustomerExists: action.payload,
            }
        case AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_INVALID_NUMBER_SUCCESS:
            return {
                ...state,
                isInvalidNumber: action.payload,
            }
        case AddPatientReducer_Types.CLEAR_ADD_PATIENT_STATE:
            return {
                isCheckingNumber: initialState.isCheckingNumber,
                isCustomerExists: initialState.isCustomerExists,
                isInvalidNumber: initialState.isInvalidNumber,
            }
        default:
            return state
    }
};
