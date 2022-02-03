import { ThunkAction } from "redux-thunk";
import { Customer_Types } from "../Reducers/CustomersReducer";
import { CheckIfCustomerExists, GetCustomer } from "../ServiceActions/CustomerActions";
import { GetPrescriptions } from "../ServiceActions/PrescriptionActions";
import { GetReports } from "../ServiceActions/ReportActions";
import { RootState } from "../store";
import { Action } from "../Types/ActionType";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { ClearAddPatientState, SetAddPatientPhoneNumber } from "./AddPatientActions";
import { ClearAllValuesForConsultation } from "./ConsultationActions";

function setCustomersHelper(customers: ICustomerIncomingData[]) {
    return {
        type: Customer_Types.SET_CUSTOMER_LIST,
        payload: customers
    };
}

export const SetCustomers = (customers: Array<ICustomerIncomingData>): Action => (setCustomersHelper(customers.reverse()));


export const SetSelectedCustomer = (customer: ICustomerIncomingData): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    dispatch(ClearAddPatientState())
    dispatch(ClearAllValuesForConsultation())
    dispatch(
        CheckIfCustomerExists(
            customer.phoneNumbers[0].number,
            customer.organisationId
        )
    );
    dispatch(SetAddPatientPhoneNumber(customer.phoneNumbers[0].number));
    dispatch(GetCustomer(customer.customerId))
}