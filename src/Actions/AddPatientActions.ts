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

function SetAddPatientIsInvalidNumberAction(isInvalidNumber: boolean) {
    return {
        type: AddPatientReducer_Types.SET_ADD_PATIENT_STATE_IS_INVALID_NUMBER_SUCCESS,
        payload: isInvalidNumber
    };
}


const SetAddPatientIsCheckingForCustomer = (isCheckingForCustomer: boolean): Action => (SetAddPatientIsCheckingForCustomerAction(isCheckingForCustomer));

const SetAddPatientIsCustomerExists = (isCustomerExists: boolean): Action => (SetAddPatientIsCustomerAction(isCustomerExists));

const SetAddPatientIsInvalidNumber = (isInvalidNumber: boolean): Action => (SetAddPatientIsInvalidNumberAction(isInvalidNumber));

export const SetIsCheckingForCustomer = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    dispatch(SetAddPatientIsCheckingForCustomer(true))
    dispatch(SetAddPatientIsCustomerExists(false))
    dispatch(SetAddPatientIsInvalidNumber(false))
}

export const SetIsInvalidNumber = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    dispatch(SetAddPatientIsCheckingForCustomer(false))
    dispatch(SetAddPatientIsCustomerExists(false))
    dispatch(SetAddPatientIsInvalidNumber(true))
}

export const SetCustomerExists = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    dispatch(SetAddPatientIsCheckingForCustomer(false))
    dispatch(SetAddPatientIsCustomerExists(true))
    dispatch(SetAddPatientIsInvalidNumber(false))
}

export const ClearAddPatientState = (): Action => (ClearPatientStateAction());