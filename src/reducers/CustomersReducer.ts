import { SeverityLevel } from '@microsoft/applicationinsights-web';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { Action } from '../types/ActionType';
import ICustomerIncomingData from '../types/IncomingDataModels/CustomerIncoming';

export enum Customer_Types {
    SET_CUSTOMER_LIST = 'SET_CUSTOMER_LIST',
}

export interface CustomerState {
    customers: ICustomerIncomingData[];
}

const initialState: CustomerState = {
    customers: [],
};

export const customerReducer = (
    state: CustomerState = initialState,
    action: Action,
): CustomerState => {
    SetTrackTrace(
        'Entered Customer Reducer: ' + action.type,
        'CustomerReducer',
        SeverityLevel.Information,
    );
    switch (action.type) {
        case Customer_Types.SET_CUSTOMER_LIST:
            SetTrackTrace(
                'Customer Reducer SET_LOCAL_CUSTOMER_LIST SUCCESS',
                'CustomerReducer',
                SeverityLevel.Information,
            );
            return {
                customers: action.payload,
            };
        default:
            SetTrackTrace(
                'Customer Reducer Hits default switch: Returns original state',
                'CustomerReducer',
                SeverityLevel.Error,
            );
            return state;
    }
};
