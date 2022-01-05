import { SeverityLevel } from "@microsoft/applicationinsights-web";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
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
    SetTrackTrace("Entered Customer Reducer: " + action.type, "CustomerReducer", SeverityLevel.Information)
    switch (action.type) {
        case Customer_Types.SET_LOCAL_CUSTOMER_LIST:
            SetTrackTrace("Customer Reducer SET_LOCAL_CUSTOMER_LIST SUCCESS", "CustomerReducer", SeverityLevel.Information)
            return {
                customers: action.payload,
            }
        default:
            SetTrackTrace("Customer Reducer Hits default switch: Returns original state", "CustomerReducer", SeverityLevel.Error)
            return state
    }
};
