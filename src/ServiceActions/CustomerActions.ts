import { ThunkAction } from 'redux-thunk';
import { Customer_Types } from '../Reducers/CustomersReducer';
import {
    GetCustomerFromPhoneNumber,
    GetServiceProviderCustomersInOrganisationEndPoint,
    SetCustomerEndPoint,
    SetCustomerWithAppointment,
} from '../Helpers/EndPointHelpers';
import { RootState } from '../store';
import { Action } from '../Types/ActionType';
import ICustomerIncomingData from '../Types/IncomingDataModels/CustomerIncoming';
import {
    SetAddPatientCustomerProfile,
    SetAddPatientIsCheckingForCustomer,
    SetAddPatientIsCustomerExists,
    SetAddPatientIsDoneCallSuccess,
    SetAddPatientIsInvalidNumber,
    SetAddPatientIsMakingDoneCall,
    SetAddPatientPhoneNumber,
} from '../Actions/AddPatientActions';
import { getCall, postCall, putCall } from '../Http/http-helpers';
import SetTrackTrace from '../Telemetry/SetTrackTrace';
import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { GetAllAppointments } from './AppointmentActions';
import makeEmptyValueCustomerSetRequestData from '../Helpers/CustomerHelper';
import { ICustomerProfileOutgoing } from '../Types/OutgoingDataModels/PatientCreationAndAppointmentBookRequest';
import ICustomerProfileWithAppointmentOutgoingData from '../Types/OutgoingDataModels/CustomerProfileWithAppointmentOutgoing';
import {
    SetLinearLoadingBarToggle,
    SetNonFatalError,
} from '../Actions/Common/UIControlActions';
import { SetCustomersLoadedState } from '../Actions/LoadedStatesActions';
import { toast } from 'react-toastify';
import { SetCustomers, SetSelectedCustomer } from '../Actions/CustomerActions';

export const GetAllCustomersForServiceProviderInOrg =
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
    async (dispatch, getState) => {
        dispatch(SetAddPatientIsCheckingForCustomer(true));
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
                GetCustomerFromPhoneNumber(phoneNumber, organisationId),
                'CheckIfCustomerExists',
            );

            dispatch(SetAddPatientIsCheckingForCustomer(false));

            if (response.data) {
                dispatch(SetAddPatientIsCustomerExists(true));
                dispatch(SetAddPatientCustomerProfile(response.data));
            } else {
                dispatch(SetAddPatientIsCustomerExists(false));
                dispatch(SetAddPatientIsInvalidNumber(false));
                dispatch(
                    SetAddPatientCustomerProfile(
                        makeEmptyValueCustomerSetRequestData(),
                    ),
                );
            }
        } catch (error) {
            dispatch(SetAddPatientIsCheckingForCustomer(false));
            dispatch(SetAddPatientIsInvalidNumber(true));
            throw error;
        }
    };

export const SetCustomerAndBookAppointment =
    (
        appointmentRequest: ICustomerProfileWithAppointmentOutgoingData,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        SetTrackTrace(
            'Enter Set Customer and Book Appointment Action',
            'SetCustomerAndBookAppointment',
            SeverityLevel.Information,
        );

        SetTrackTrace(
            'Current appointment request: ' + appointmentRequest,
            'SetCustomerAndBookAppointment',
            SeverityLevel.Information,
        );

        try {
            let response = await postCall(
                {} as any,
                SetCustomerWithAppointment(),
                appointmentRequest,
                'SetCustomerAndBookAppointment',
            );

            dispatch(SetLinearLoadingBarToggle(false));

            if (response) {
                dispatch(SetAddPatientPhoneNumber(''));
                dispatch(SetAddPatientIsCustomerExists(false));
                dispatch(
                    SetAddPatientCustomerProfile(
                        makeEmptyValueCustomerSetRequestData(),
                    ),
                );
                dispatch(SetAddPatientIsMakingDoneCall(false));
                dispatch(SetAddPatientIsDoneCallSuccess(false));
                dispatch(GetAllAppointments());
                dispatch(GetAllCustomersForServiceProviderInOrg());
                toast.success('Customer and Appointment Set Successfully');
            } else {
                dispatch(SetAddPatientIsDoneCallSuccess(false));
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
    async (dispatch, getState) => {
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
            } else {
                response = await postCall(
                    {} as any,
                    SetCustomerEndPoint(),
                    customerRequest,
                    'SetCustomer',
                );
            }

            dispatch(SetLinearLoadingBarToggle(false));

            if (response) {
                //TODO: Make calls in here and SetCustomerAndBookAppointment in common action
                dispatch(SetAddPatientPhoneNumber(''));
                dispatch(SetAddPatientIsCustomerExists(false));
                dispatch(
                    SetAddPatientCustomerProfile(
                        makeEmptyValueCustomerSetRequestData(),
                    ),
                );
                dispatch(SetAddPatientIsMakingDoneCall(false));
                dispatch(GetAllCustomersForServiceProviderInOrg());
                toast.success('Customer Set Successfully');
            } else {
                dispatch(SetAddPatientIsDoneCallSuccess(false));
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not set customer'));
        }
    };
