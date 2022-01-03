import { ThunkAction } from "redux-thunk";
import http from "../http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import { Customer_Types } from "../Reducers/CustomersReducer";
import { GetServiceProviderCustomersInOrganisation } from "../Helpers/EndPointHelpers";
import { RootState } from "../store";
import { Action } from "../Types/ActionType";
import ICustomerData from "../Types/ClientDataModels/Customer";

function setCustomersHelper(customers: ICustomerData[]) {
    return {
        type: Customer_Types.SET_LOCAL_CUSTOMER_LIST,
        payload: customers
    };
}

export const SetCustomers = (customers: Array<ICustomerData>): Action => (setCustomersHelper(customers));

export const GetAllCustomersForServiceProviderInOrg = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    let headersContent = await GetHeadersHelper();
    let response = await http.get<Array<ICustomerData>>(GetServiceProviderCustomersInOrganisation(currentServiceProvider.organisationId, [currentServiceProvider.serviceProviderId]), { headers: headersContent });
    
    dispatch(SetCustomers(response.data));
};