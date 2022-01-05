import { ThunkAction } from "redux-thunk";
import http from "../Http/http-common";
import GetHeadersHelper from "./Common/GetHeaderHelper";
import { Customer_Types } from "../Reducers/CustomersReducer";
import { GetServiceProviderCustomersInOrganisationEndPoint } from "../Helpers/EndPointHelpers";
import { RootState } from "../store";
import { Action } from "../Types/ActionType";
import ICustomerData from "../Types/ClientDataModels/Customer";
import { SetAddPatientCustomerProfile, SetAddPatientIsCheckingForCustomer, SetAddPatientIsCustomerExists } from "./AddPatientActions";
import getCall from "../Http/http-helpers";

function setCustomersHelper(customers: ICustomerData[]) {
    return {
        type: Customer_Types.SET_LOCAL_CUSTOMER_LIST,
        payload: customers
    };
}

export const SetCustomers = (customers: Array<ICustomerData>): Action => (setCustomersHelper(customers));

export const GetAllCustomersForServiceProviderInOrg = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    let response = await getCall({} as Array<ICustomerData>, GetServiceProviderCustomersInOrganisationEndPoint(currentServiceProvider.organisationId, [currentServiceProvider.serviceProviderId]))

    dispatch(SetCustomers(response.data));
};

export const CheckIfCustomerExists = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    dispatch(SetAddPatientIsCheckingForCustomer(true))

    const timer = setTimeout(() => {
        const tempCustomer = {
            customerId: "123",
            phoneNumber: "1234567890",
            lastName: "Manivannan",
            firstName: "Surya",
            gender: "Male",
            dateOfBirth: "",
            age: "12"
        } as ICustomerData

        dispatch(SetAddPatientIsCheckingForCustomer(false))
        dispatch(SetAddPatientCustomerProfile(tempCustomer))

        //IF GETTING EXISTING CUSTOMER BACK FROM DB
        if (tempCustomer.customerId) {
            dispatch(SetAddPatientIsCustomerExists(true))
        }
    }, 1000);
    return () => clearTimeout(timer);
};