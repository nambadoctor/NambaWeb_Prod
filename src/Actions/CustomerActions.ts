import { Customer_Types } from "../Reducers/CustomersReducer";
import { Action } from "../Types/ActionType";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";

function setCustomersHelper(customers: ICustomerIncomingData[]) {
    return {
        type: Customer_Types.SET_CUSTOMER_LIST,
        payload: customers
    };
}

export const SetCustomers = (customers: Array<ICustomerIncomingData>): Action => (setCustomersHelper(customers.reverse()));
