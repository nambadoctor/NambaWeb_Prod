import { Action } from "../Types/ActionType"
import ICustomerData from "../Types/IncomingDataModels/Customer";
import ICustomerSetRequestData from "../Types/OutgoingDataModels/CustomerSetRequest";

export enum AddPatientReducer_Types {
    SET_ADD_PATIENT_STATE_PHONE_NUMBER = "SET_LOCAL_PHONE_NUMBER",
    SET_ADD_PATIENT_STATE_CUSTOMER_PROFILE = "SET_LOCAL_CUSTOMER_PROFILE",
    SET_ADD_PATIENT_STATE_IS_CHECKING_NUMBER = "SET_ADD_PATIENT_STATE_IS_CHECKING_NUMBER",
    SET_ADD_PATIENT_STATE_IS_CUSTOMER_EXISTS = "SET_ADD_PATIENT_STATE_IS_CUSTOMER_EXISTS"
}

export interface AddPatientState {
    phoneNumber: string,
    customerProfile: ICustomerSetRequestData,
    isCheckingNumber: boolean,
    isCustomerExists: boolean
}

const initialState: AddPatientState = {
    phoneNumber: "",
    customerProfile: {} as ICustomerSetRequestData,
    isCheckingNumber: false,
    isCustomerExists: false
}

export const addPatientReducer = (state: AddPatientState = initialState, action: Action): AddPatientState => {
    switch (action.type) {
        case AddPatientReducer_Types.SET_ADD_PATIENT_STATE_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: action.payload,
            }
        case AddPatientReducer_Types.SET_ADD_PATIENT_STATE_CUSTOMER_PROFILE:
            return {
                ...state,
                customerProfile: action.payload,
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
        default:
            return state
    }
};
