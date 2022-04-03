import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';
import {
    ClearAddPatientState,
    SetCustomerExists,
    SetIsCheckingForCustomer,
    SetIsInvalidNumber,
} from '../actions/AddPatientActions';
import { ClearContext } from '../actions/ClearContextAction';
import {
    SetLinearLoadingBarToggle,
    SetNonFatalError,
} from '../actions/common/UIControlActions';
import { SetCurrentCustomer } from '../actions/CurrentCustomerActions';
import { SetCustomers } from '../actions/CustomerActions';
import { SetCustomersLoadedState } from '../actions/LoadedStatesActions';
import { getCall, postCall, putCall } from '../http/http-helpers';
import { RootState } from '../store';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { Action } from '../types/ActionType';
import ICustomerIncomingData from '../types/IncomingDataModels/CustomerIncoming';
import ICustomerProfileWithAppointmentOutgoingData from '../types/OutgoingDataModels/CustomerProfileWithAppointmentOutgoing';
import { ICustomerProfileOutgoing } from '../types/OutgoingDataModels/PatientCreationAndAppointmentBookRequest';
import {
    GetCustomerForServiceProviderEndPoint,
    GetCustomerFromPhoneNumberEndPoint,
    GetServiceProviderCustomersInOrganisationEndPoint,
    SetCustomerEndPoint,
    SetCustomerWithAppointmentEndPoint,
} from '../utils/EndPointHelpers';
import { GetAllAppointments } from './AppointmentActions';
import { GetNotes } from './NoteActions';
import { GetPrescriptions } from './PrescriptionActions';
import { GetReports } from './ReportActions';
import {
    GetAllTreatmentPlans,
    GetTreatmentDocumentsForCustomer,
} from './TreatmentActions';

export const GetAllCustomers =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        SetTrackTrace(
            'Enter Get All Customers For Service Provider In Org Action',
            'GetAllCustomersForServiceProviderInOrg',
            SeverityLevel.Information,
        );

        const currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider!;

        SetTrackTrace(
            'Current Service Provider: ' + currentServiceProvider,
            'GetAllCustomersForServiceProviderInOrg',
            SeverityLevel.Information,
        );

        try {
            let response = await getCall(
                {} as Array<ICustomerIncomingData>,
                GetServiceProviderCustomersInOrganisationEndPoint(
                    currentServiceProvider.serviceProviderProfile
                        .organisationId,
                    [currentServiceProvider.serviceProviderId],
                ),
                'GetAllCustomersForServiceProviderInOrg',
            );

            dispatch(SetCustomersLoadedState(true));

            SetTrackTrace(
                'Dispatch Set Customers List Action',
                'GetAllCustomersForServiceProviderInOrg',
                SeverityLevel.Information,
            );
            dispatch(SetCustomers(response.data));
        } catch (error) {
            dispatch(SetNonFatalError('Could not retrieve patients list'));
        }
    };

//NEED TO INTEGRATE WITH SERVICE CALL
export const CheckIfCustomerExists =
    (
        phoneNumber: string,
        organisationId: string,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, _getState) => {
        dispatch(SetIsCheckingForCustomer());
        SetTrackTrace(
            'Enter Check If Customer Exists with Phone Number Action PhNumber:' +
                phoneNumber +
                'OrgId: ' +
                organisationId,
            'CheckIfCustomerExists',
            SeverityLevel.Information,
        );

        try {
            let response = await getCall(
                {} as ICustomerProfileOutgoing,
                GetCustomerFromPhoneNumberEndPoint(phoneNumber, organisationId),
                'CheckIfCustomerExists',
            );

            if (response.data) {
                dispatch(SetCustomerExists());
                dispatch(SetCurrentCustomer(response.data));
                dispatch(GetCustomerData());
            } else {
                dispatch(ClearAddPatientState());
                dispatch(SetCurrentCustomer({} as ICustomerIncomingData));
            }
        } catch (error) {
            dispatch(SetIsInvalidNumber());
            throw error;
        }
    };

export const SetCustomerAndBookAppointment =
    (
        customerProfileWithAppointment: ICustomerProfileWithAppointmentOutgoingData,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, _getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        SetTrackTrace(
            'Enter Set Customer and Book Appointment Action',
            'SetCustomerAndBookAppointment',
            SeverityLevel.Information,
        );

        SetTrackTrace(
            'Current appointment request: ' + customerProfileWithAppointment,
            'SetCustomerAndBookAppointment',
            SeverityLevel.Information,
        );

        try {
            let response = await postCall(
                {} as any,
                SetCustomerWithAppointmentEndPoint(),
                customerProfileWithAppointment,
                'SetCustomerAndBookAppointment',
            );

            dispatch(SetLinearLoadingBarToggle(false));

            if (response) {
                dispatch(ClearAddPatientState());
                dispatch(SetCurrentCustomer({} as ICustomerIncomingData));
                dispatch(GetAllAppointments());
                dispatch(GetAllCustomers());
                toast.success('Customer and Appointment Set Successfully');
            } else {
            }
        } catch (error) {
            dispatch(
                SetNonFatalError('Could not set customer and book appointment'),
            );
        }
    };

export const SetCustomer =
    (
        customerRequest: ICustomerProfileOutgoing,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, _getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        SetTrackTrace(
            'Enter Set Customer Action',
            'SetCustomer',
            SeverityLevel.Information,
        );

        SetTrackTrace(
            'Current customer request: ' + customerRequest,
            'SetCustomer',
            SeverityLevel.Information,
        );

        try {
            var response;
            if (customerRequest.customerId) {
                response = await putCall(
                    {} as any,
                    SetCustomerEndPoint(),
                    customerRequest,
                    'SetCustomer',
                );

                if (response) {
                    dispatch(ClearContext());
                    dispatch(GetCustomer(customerRequest.customerId));
                    dispatch(GetAllCustomers());
                    toast.success('Customer Set Successfully');
                }
            } else {
                response = await postCall(
                    {} as any,
                    SetCustomerEndPoint(),
                    customerRequest,
                    'SetCustomer',
                );

                if (response) {
                    dispatch(ClearContext());
                    dispatch(
                        CheckIfCustomerExists(
                            customerRequest.phoneNumbers[0].number,
                            customerRequest.organisationId,
                        ),
                    );
                    dispatch(GetAllCustomers());
                    toast.success('Customer Set Successfully');
                }
            }

            dispatch(SetLinearLoadingBarToggle(false));
        } catch (error) {
            dispatch(SetNonFatalError('Could not set customer'));
        }
    };

export const GetCustomer =
    (customerId: string): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        SetTrackTrace(
            'Enter Get Customer Action',
            'GetCustomerForConsultation',
            SeverityLevel.Information,
        );

        const currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider!;

        if (currentServiceProvider) {
            SetTrackTrace(
                'Retrieved Current Service Provider: ' + currentServiceProvider,
                'GetCustomerForConsultation',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Current Service Provider DOES NOT EXIST: ' +
                    currentServiceProvider,
                'GetCustomerForConsultation',
                SeverityLevel.Error,
            );
        }

        try {
            let response = await getCall(
                {} as ICustomerIncomingData,
                GetCustomerForServiceProviderEndPoint(
                    customerId,
                    currentServiceProvider.serviceProviderProfile
                        .organisationId,
                ),
                'GetCustomerForConsultation',
            );

            if (response) {
                SetTrackTrace(
                    'Dispatch Set Selected Customer' + response.data,
                    'GetCustomerForConsultation',
                    SeverityLevel.Information,
                );

                dispatch(SetCurrentCustomer(response.data));

                //Get Notes, Reports, and Prescriptions for customer
                dispatch(GetCustomerData());
            } else {
                dispatch(SetNonFatalError('Could not find this customer'));
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not find customer'));
        }
    };

export const GetCustomerData =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, _getState) => {
        dispatch(GetReports());
        dispatch(GetPrescriptions());
        dispatch(GetNotes());
        dispatch(GetAllTreatmentPlans());
        dispatch(GetTreatmentDocumentsForCustomer());
    };
