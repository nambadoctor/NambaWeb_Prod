import { ThunkAction } from 'redux-thunk';
import { Customer_Types } from '../reducers/CustomersReducer';
import {
    CheckIfCustomerExists,
    GetCustomer,
} from '../service-actions/CustomerActions';
import { RootState } from '../store';
import { Action } from '../types/ActionType';
import ICustomerIncomingData from '../types/IncomingDataModels/CustomerIncoming';
import { ClearAddPatientState } from './AddPatientActions';
import { ClearAllValuesForConsultation } from './ConsultationActions';

function setCustomersHelper(customers: ICustomerIncomingData[]) {
    return {
        type: Customer_Types.SET_CUSTOMER_LIST,
        payload: customers,
    };
}

export const SetCustomers = (customers: Array<ICustomerIncomingData>): Action =>
    setCustomersHelper(customers.reverse());

export const SetSelectedCustomer =
    (
        customer: ICustomerIncomingData | null,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, _getState) => {
        dispatch(ClearAddPatientState());
        dispatch(ClearAllValuesForConsultation());
        if (customer) {
            dispatch(
                CheckIfCustomerExists(
                    customer!.phoneNumbers[0].number,
                    customer!.organisationId,
                ),
            );
            dispatch(GetCustomer(customer!.customerId));
        }
    };
