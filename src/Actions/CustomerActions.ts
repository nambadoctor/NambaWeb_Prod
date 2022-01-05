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
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";

function setCustomersHelper(customers: ICustomerData[]) {
    return {
        type: Customer_Types.SET_LOCAL_CUSTOMER_LIST,
        payload: customers
    };
}

export const SetCustomers = (customers: Array<ICustomerData>): Action => (setCustomersHelper(customers));

export const GetAllCustomersForServiceProviderInOrg = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Get All Customers For Service Provider In Org Action", "GetAllCustomersForServiceProviderInOrg", SeverityLevel.Information);

    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    SetTrackTrace("Current Service Provider: " + currentServiceProvider, "GetAllCustomersForServiceProviderInOrg", SeverityLevel.Information);

    let response = await getCall({} as Array<ICustomerData>, GetServiceProviderCustomersInOrganisationEndPoint(currentServiceProvider.organisationId, [currentServiceProvider.serviceProviderId]), "GetAllCustomersForServiceProviderInOrg")

    SetTrackTrace("Dispatch Set Customers List Action", "GetAllCustomersForServiceProviderInOrg", SeverityLevel.Information);
    dispatch(SetCustomers(response.data));
};

//NEED TO INTEGRATE WITH SERVICE CALL
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