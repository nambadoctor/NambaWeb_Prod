import { ThunkAction } from "redux-thunk";
import { GetCustomerForServiceProviderEndPoint, GetCustomerFromPhoneNumberEndPoint, GetServiceProviderCustomersInOrganisationEndPoint, SetCustomerEndPoint, SetCustomerWithAppointmentEndPoint } from "../Helpers/EndPointHelpers";
import { RootState } from "../store";
import { Action } from "../Types/ActionType";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { SetAddPatientIsCheckingForCustomer, SetAddPatientIsCustomerExists, SetAddPatientIsDoneCallSuccess, SetAddPatientIsInvalidNumber, SetAddPatientIsMakingDoneCall, SetAddPatientPhoneNumber } from "../Actions/AddPatientActions";
import { getCall, postCall, putCall } from "../Http/http-helpers";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { GetAllAppointments } from "./AppointmentActions";
import makeEmptyValueCustomerSetRequestData from "../Helpers/CustomerHelper";
import { ICustomerProfileOutgoing } from "../Types/OutgoingDataModels/PatientCreationAndAppointmentBookRequest";
import ICustomerProfileWithAppointmentOutgoingData from "../Types/OutgoingDataModels/CustomerProfileWithAppointmentOutgoing";
import { SetLinearLoadingBarToggle, SetNonFatalError } from "../Actions/Common/UIControlActions";
import { SetCustomersLoadedState } from "../Actions/LoadedStatesActions";
import { toast } from "react-toastify";
import { GetReports } from "./ReportActions";
import { GetPrescriptions } from "./PrescriptionActions";
import { GetNotes } from "./NoteActions";
import { SetCurrentCustomer } from "../Actions/CurrentCustomerActions";
import { SetCustomers } from "../Actions/CustomerActions";


export const GetAllCustomers = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Get All Customers For Service Provider In Org Action", "GetAllCustomersForServiceProviderInOrg", SeverityLevel.Information);

    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    SetTrackTrace("Current Service Provider: " + currentServiceProvider, "GetAllCustomersForServiceProviderInOrg", SeverityLevel.Information);

    try {
        let response = await getCall({} as Array<ICustomerIncomingData>, GetServiceProviderCustomersInOrganisationEndPoint(currentServiceProvider.serviceProviderProfile.organisationId, [currentServiceProvider.serviceProviderId]), "GetAllCustomersForServiceProviderInOrg")

        dispatch(SetCustomersLoadedState(true))

        SetTrackTrace("Dispatch Set Customers List Action", "GetAllCustomersForServiceProviderInOrg", SeverityLevel.Information);
        dispatch(SetCustomers(response.data));
    } catch (error) {
        dispatch(SetNonFatalError("Could not retrieve patients list"))
    }
};

//NEED TO INTEGRATE WITH SERVICE CALL
export const CheckIfCustomerExists = (phoneNumber: string, organisationId: string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    dispatch(SetAddPatientIsCheckingForCustomer(true));
    SetTrackTrace("Enter Check If Customer Exists with Phone Number Action PhNumber:" + phoneNumber + "OrgId: " + organisationId, "CheckIfCustomerExists", SeverityLevel.Information);

    try {

        let response = await getCall({} as ICustomerProfileOutgoing, GetCustomerFromPhoneNumberEndPoint(phoneNumber, organisationId), "CheckIfCustomerExists")

        dispatch(SetAddPatientIsCheckingForCustomer(false))

        if (response.data) {
            dispatch(SetAddPatientIsCustomerExists(true))
            dispatch(SetCurrentCustomer(response.data))
        } else {
            dispatch(SetAddPatientIsCustomerExists(false))
            dispatch(SetAddPatientIsInvalidNumber(false))
            dispatch(SetCurrentCustomer({} as ICustomerIncomingData))
        }

    } catch (error) {
        dispatch(SetAddPatientIsCheckingForCustomer(false))
        dispatch(SetAddPatientIsInvalidNumber(true))
        throw error;
    }
};

export const SetCustomerAndBookAppointment = (appointmentRequest: ICustomerProfileWithAppointmentOutgoingData): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    dispatch(SetLinearLoadingBarToggle(true))

    SetTrackTrace("Enter Set Customer and Book Appointment Action", "SetCustomerAndBookAppointment", SeverityLevel.Information);

    SetTrackTrace("Current appointment request: " + appointmentRequest, "SetCustomerAndBookAppointment", SeverityLevel.Information);

    try {
        let response = await postCall({} as any, SetCustomerWithAppointmentEndPoint(), appointmentRequest, "SetCustomerAndBookAppointment")

        dispatch(SetLinearLoadingBarToggle(false))

        if (response) {
            dispatch(SetAddPatientPhoneNumber(""))
            dispatch(SetAddPatientIsCustomerExists(false))
            dispatch(SetCurrentCustomer({} as ICustomerIncomingData))
            dispatch(SetAddPatientIsMakingDoneCall(false))
            dispatch(SetAddPatientIsDoneCallSuccess(false))
            dispatch(GetAllAppointments())
            dispatch(GetAllCustomers())
            toast.success("Customer and Appointment Set Successfully")
        } else {
            dispatch(SetAddPatientIsDoneCallSuccess(false))
        }
    } catch (error) {
        dispatch(SetNonFatalError("Could not set customer and book appointment"))
    }
};

export const SetCustomer = (customerRequest: ICustomerProfileOutgoing): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

    dispatch(SetLinearLoadingBarToggle(true))

    SetTrackTrace("Enter Set Customer Action", "SetCustomer", SeverityLevel.Information);

    SetTrackTrace("Current customer request: " + customerRequest, "SetCustomer", SeverityLevel.Information);

    try {
        var response;
        if (customerRequest.customerId) {
            response = await putCall({} as any, SetCustomerEndPoint(), customerRequest, "SetCustomer")
        } else {
            response = await postCall({} as any, SetCustomerEndPoint(), customerRequest, "SetCustomer")
        }

        dispatch(SetLinearLoadingBarToggle(false))

        if (response) {
            //TODO: Make calls in here and SetCustomerAndBookAppointment in common action
            dispatch(SetAddPatientPhoneNumber(""))
            dispatch(SetAddPatientIsCustomerExists(false))
            dispatch(SetCurrentCustomer({} as ICustomerIncomingData))
            dispatch(SetAddPatientIsMakingDoneCall(false))
            dispatch(GetAllCustomers())
            toast.success("Customer Set Successfully")
        } else {
            dispatch(SetAddPatientIsDoneCallSuccess(false))
        }
    } catch (error) {
        dispatch(SetNonFatalError("Could not set customer"))
    }
};


export const GetCustomer = (customerId: string): ThunkAction<void, RootState, null, Action> =>
    async (dispatch, getState) => {
        SetTrackTrace(
            "Enter Get Customer Action",
            "GetCustomerForConsultation",
            SeverityLevel.Information
        );

        const currentServiceProvider =
            getState().CurrentServiceProviderState.serviceProvider!;

        if (currentServiceProvider) {
            SetTrackTrace(
                "Retrieved Current Service Provider: " + currentServiceProvider,
                "GetCustomerForConsultation",
                SeverityLevel.Information
            );
        } else {
            SetTrackTrace(
                "Retrieved Current Service Provider DOES NOT EXIST: " +
                currentServiceProvider,
                "GetCustomerForConsultation",
                SeverityLevel.Error
            );
        }

        try {
            let response = await getCall(
                {} as ICustomerIncomingData,
                GetCustomerForServiceProviderEndPoint(
                    customerId,
                    currentServiceProvider.serviceProviderProfile.organisationId
                ),
                "GetCustomerForConsultation"
            );

            if (response) {
                SetTrackTrace(
                    "Dispatch Set Selected Customer" + response.data,
                    "GetCustomerForConsultation",
                    SeverityLevel.Information
                );

                dispatch(SetCurrentCustomer(response.data))

                //Get Notes, Reports, and Prescriptions for customer
                dispatch(GetReports())
                dispatch(GetPrescriptions())
                dispatch(GetNotes())
            } else {
                dispatch(SetNonFatalError("Could not find this customer"));
            }
        } catch (error) {
            dispatch(
                SetNonFatalError("Could not find customer for this appointment")
            );
        }
    };
