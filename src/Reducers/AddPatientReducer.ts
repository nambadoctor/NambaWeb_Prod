import makeEmptyValueCustomerSetRequestData from "../Helpers/CustomerHelper";
import { Action } from "../Types/ActionType"
import { ICustomerProfileOutgoing } from "../Types/OutgoingDataModels/PatientCreationAndAppointmentBookRequest";

export enum AddPatientReducer_Types {
    SET_ADD_PATIENT_STATE_PHONE_NUMBER = "SET_LOCAL_PHONE_NUMBER",
    SET_ADD_PATIENT_STATE_IS_CHECKING_NUMBER = "SET_ADD_PATIENT_STATE_IS_CHECKING_NUMBER",
    SET_ADD_PATIENT_STATE_IS_CUSTOMER_EXISTS = "SET_ADD_PATIENT_STATE_IS_CUSTOMER_EXISTS",
    SET_ADD_PATIENT_STATE_IS_MAKING_DONE_CALL = "SET_ADD_PATIENT_STATE_IS_MAKING_DONE_CALL",
    SET_ADD_PATIENT_STATE_IS_DONE_CALL_SUCCESS = "SET_ADD_PATIENT_STATE_IS_DONE_CALL_SUCCESS",
    SET_ADD_PATIENT_STATE_IS_INVALID_NUMBER_SUCCESS = "SET_ADD_PATIENT_STATE_IS_INVALID_NUMBER_SUCCESS",
    SET_ADD_PATIENT_STATE_ERRORS = "SET_ADD_PATIENT_STATE_ERRORS",
    CLEAR_ADD_PATIENT_STATE = "CLEAR_ADD_PATIENT_STATE"
}

export interface IAddPatientError {
    phoneNumber: string
    name: string
    age: string
}

export interface AddPatientState {
    phoneNumber: string,
    isCheckingNumber: boolean,
    isCustomerExists: boolean,
    isMakingDoneCall: boolean,
    isDoneCallSuccess: boolean,
    isInvalidNumber: boolean,
    validationErrors: IAddPatientError
}

const initialState: AddPatientState = {
    phoneNumber: "",
    isCheckingNumber: false,
    isCustomerExists: false,
    isMakingDoneCall: false,
    isDoneCallSuccess: false,
    isInvalidNumber: false,
    validationErrors: {} as IAddPatientError
}

export const addPatientReducer = (state: AddPatientState = initialState, action: Action): AddPatientState => {
    switch (action.type) {
        case AddPatientReducer_Types.SET_ADD_PATIENT_STATE_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: action.payload,
            }
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
        case AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_MAKING_DONE_CALL:
            return {
                ...state,
                isMakingDoneCall: action.payload,
            }
        case AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_DONE_CALL_SUCCESS:
            return {
                ...state,
                isDoneCallSuccess: action.payload,
            }
        case AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_INVALID_NUMBER_SUCCESS:
            return {
                ...state,
                isInvalidNumber: action.payload,
            }
        case AddPatientReducer_Types.SET_ADD_PATIENT_STATE_ERRORS:
            return {
                ...state,
                validationErrors: action.payload,
            }
        case AddPatientReducer_Types.CLEAR_ADD_PATIENT_STATE:
            return {
                phoneNumber: initialState.phoneNumber,
                isCheckingNumber: initialState.isCheckingNumber,
                isCustomerExists: initialState.isCustomerExists,
                isMakingDoneCall: initialState.isMakingDoneCall,
                isDoneCallSuccess: initialState.isDoneCallSuccess,
                isInvalidNumber: initialState.isInvalidNumber,
                validationErrors: initialState.validationErrors
            }
        default:
            return state
    }
};
