import { Action } from "../Types/ActionType"
import ICustomerData from "../Types/ClientDataModels/Customer";

export enum Customer_Types {
    SET_LOCAL_CUSTOMER_LIST = "SET_LOCAL_CUSTOMER_LIST",
}

export interface CustomerState {
    customers: ICustomerData[];
}

const initialState: CustomerState = {
    customers: []
}

export const customerReducer = (state: CustomerState = initialState, action: Action): CustomerState => {
    switch (action.type) {
        case Customer_Types.SET_LOCAL_CUSTOMER_LIST:
            return {
                ...state,
                customers: action.payload,
            }
        default:
            return state
    }
};
