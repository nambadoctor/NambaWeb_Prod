import { Action } from "../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import http from "../http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import ICustomerData from "../Types/Customer";
import { CustomerState, Customer_Types } from "../Reducers/CustomersReducer";

function setCustomersHelper(customers: ICustomerData[]) {
    return {
        type: Customer_Types.SET_LOCAL_CUSTOMER_LIST,
        payload: customers
    };
}

export const SetCustomers = (customers: Array<ICustomerData>): Action => (setCustomersHelper(customers));

export const GetAllCustomersForServiceProviderInOrg = (): ThunkAction<void, CustomerState, null, Action> => async dispatch => {
    let headersContent = await GetHeadersHelper();
    let response = await http.get<Array<ICustomerData>>("/Customer", { headers: headersContent });
    
    dispatch(SetCustomers(response.data));
};