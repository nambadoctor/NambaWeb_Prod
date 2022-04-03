import { SeverityLevel } from '@microsoft/applicationinsights-web';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';
import {
    GetNextAndPreviousAppointmentForConsultation,
    SetAppointments,
} from '../actions/AppointmentsActions';
import {
    SetFatalError,
    SetLinearLoadingBarToggle,
    SetNonFatalError,
} from '../actions/common/UIControlActions';
import { SetSelectedAppointmentForConsultation } from '../actions/ConsultationActions';
import { SetDatesWithAppointmentsRange } from '../actions/SelectedDateActions';
import { getCall, postCall, putCall } from '../http/http-helpers';
import { RootState } from '../store';
import SetTrackTrace from '../telemetry/SetTrackTrace';
import { Action } from '../types/ActionType';
import IAppointmentData from '../types/IncomingDataModels/Appointment';
import IAppointmentOutgoing from '../types/OutgoingDataModels/AppointmentOutgoing';
import {
    CancelAppointmentEndPoint,
    EndAppointmentEndPoint,
    GetAppointmentForServiceProviderEndPoint,
    GetServiceProviderAppointmentsInOrganisationEndPoint,
    SetNewAppointmentEndPoint,
} from '../utils/EndPointHelpers';
import { GetCustomer } from './CustomerActions';
import { GetAllTreatmentPlans } from './TreatmentActions';

//Get all appointments for currently logged in doctor.
export const GetAllAppointments =
    (): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        SetTrackTrace(
            'Enter Get All Appointments Action',
            'GetAllAppointments',
            SeverityLevel.Information,
        );
        const currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider!;

        if (currentServiceProvider) {
            SetTrackTrace(
                'Retrieved Current Service Provider: ' + currentServiceProvider,
                'GetAllAppointments',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Current Service Provider DOES NOT EXIST: ' +
                    currentServiceProvider,
                'GetAllAppointments',
                SeverityLevel.Error,
            );
        }

        try {
            //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
            let response = await getCall(
                {} as Array<IAppointmentData>,
                GetServiceProviderAppointmentsInOrganisationEndPoint(
                    currentServiceProvider.serviceProviderProfile
                        .organisationId,
                    [currentServiceProvider.serviceProviderId],
                ),
                'GetAllAppointments',
            );

            SetTrackTrace(
                'Dispatch Set All Appointments' + response.data,
                'GetAllAppointments',
                SeverityLevel.Information,
            );
            dispatch(SetAppointments(response.data));

            SetTrackTrace(
                'Dispatch Set Dates With Appointments Range Helper',
                'GetAllAppointments',
                SeverityLevel.Information,
            );
            dispatch(SetDatesWithAppointmentsRange(response.data));
        } catch (error) {
            dispatch(SetFatalError('Could not retrieve your appointments!'));
        }
    };

export const SetAppointment =
    (
        appointment: IAppointmentOutgoing,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, _getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        SetTrackTrace(
            'Enter Set New Appointments Action',
            'SetNewAppointment',
            SeverityLevel.Information,
        );

        try {
            //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
            let response = await postCall(
                {} as any,
                SetNewAppointmentEndPoint(),
                appointment,
                'SetNewAppointment',
            );

            if (response) {
                dispatch(SetLinearLoadingBarToggle(false));
                dispatch(GetAllAppointments());
                dispatch(GetAllTreatmentPlans());

                toast.success('Appointment Set Successfully');
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not create appointment'));
        }
    };

//TODO: CHANGE IAPPOINTMENTDATA TO IAPPOINTMENTOUTGOINGDATA. Need to write converter for this!
export const CancelAppointment =
    (
        appointment: IAppointmentData,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, _getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        SetTrackTrace(
            'Enter Cancel Appointments Action',
            'CancelAppointment',
            SeverityLevel.Information,
        );

        try {
            //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
            let response = await putCall(
                {} as any,
                CancelAppointmentEndPoint(),
                appointment,
                'CancelAppointment',
            );

            if (response) {
                dispatch(SetLinearLoadingBarToggle(false));
                dispatch(GetAllAppointments());
                toast.success('Appointment Cancelled Successfully');
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not CancelAppointment'));
        }
    };

//TODO: CHANGE IAPPOINTMENTDATA TO IAPPOINTMENTOUTGOINGDATA. Need to write converter for this!
export const EndAppointment =
    (
        appointment: IAppointmentData,
    ): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, _getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        SetTrackTrace(
            'Enter End Appointments Action',
            'EndAppointment',
            SeverityLevel.Information,
        );

        try {
            //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
            let response = await putCall(
                {} as any,
                EndAppointmentEndPoint(),
                appointment,
                'EndAppointment',
            );

            if (response) {
                dispatch(SetLinearLoadingBarToggle(false));
                dispatch(GetAllAppointments());
            }
        } catch (error) {
            dispatch(SetNonFatalError('Could not EndAppointment'));
        }
    };

export const GetAppointment =
    (appointmentId: string): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        dispatch(SetLinearLoadingBarToggle(true));

        SetTrackTrace(
            'Enter Get Appointment Action',
            'GetAppointmentForConsultation',
            SeverityLevel.Information,
        );
        const currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider!;

        if (currentServiceProvider) {
            SetTrackTrace(
                'Retrieved Current Service Provider: ' + currentServiceProvider,
                'GetAppointmentForConsultation',
                SeverityLevel.Information,
            );
        } else {
            SetTrackTrace(
                'Retrieved Current Service Provider DOES NOT EXIST: ' +
                    currentServiceProvider,
                'GetAppointmentForConsultation',
                SeverityLevel.Error,
            );
        }

        try {
            //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
            let response = await getCall(
                {} as IAppointmentData,
                GetAppointmentForServiceProviderEndPoint(
                    appointmentId,
                    currentServiceProvider.serviceProviderId,
                ),
                'GetAllAppointments',
            );

            if (response.data) {
                dispatch(SetSelectedAppointmentForConsultation(response.data));
                dispatch(GetNextAndPreviousAppointmentForConsultation());
                dispatch(GetCustomer(response.data.customerId));
            }

            dispatch(SetLinearLoadingBarToggle(false));

            SetTrackTrace(
                'Dispatch Set Selected Appointment' + response.data,
                'GetAppointmentForConsultation',
                SeverityLevel.Information,
            );
        } catch (error) {
            dispatch(SetFatalError('Appointment Not Found' + error));
        }
    };
