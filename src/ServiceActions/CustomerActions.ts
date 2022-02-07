import { ThunkAction } from "redux-thunk";
import { GetCustomerForServiceProviderEndPoint, GetCustomerFromPhoneNumberEndPoint, GetServiceProviderCustomersInOrganisationEndPoint, SetCustomerEndPoint, SetCustomerWithAppointmentEndPoint } from "../Helpers/EndPointHelpers";
import { RootState } from "../store";
import { Action } from "../Types/ActionType";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { ClearAddPatientState, SetCustomerExists, SetIsCheckingForCustomer, SetIsInvalidNumber } from "../Actions/AddPatientActions";
import { getCall, postCall, putCall } from "../Http/http-helpers";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { GetAllAppointments } from "./AppointmentActions";
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
    dispatch(SetIsCheckingForCustomer())
    SetTrackTrace("Enter Check If Customer Exists with Phone Number Action PhNumber:" + phoneNumber + "OrgId: " + organisationId, "CheckIfCustomerExists", SeverityLevel.Information);

    try {

        let response = await getCall({} as ICustomerProfileOutgoing, GetCustomerFromPhoneNumberEndPoint(phoneNumber, organisationId), "CheckIfCustomerExists")

        if (response.data) {
            dispatch(SetCustomerExists())
            dispatch(SetCurrentCustomer(response.data))
        } else {
            dispatch(ClearAddPatientState())
            dispatch(SetCurrentCustomer({} as ICustomerIncomingData))
        }

    } catch (error) {
        dispatch(SetIsInvalidNumber())
        throw error;
    }
};

export const SetCustomerAndBookAppointment = (customerProfileWithAppointment: ICustomerProfileWithAppointmentOutgoingData): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    dispatch(SetLinearLoadingBarToggle(true))

    SetTrackTrace("Enter Set Customer and Book Appointment Action", "SetCustomerAndBookAppointment", SeverityLevel.Information);

    SetTrackTrace("Current appointment request: " + customerProfileWithAppointment, "SetCustomerAndBookAppointment", SeverityLevel.Information);

    try {
        let response = await postCall({} as any, SetCustomerWithAppointmentEndPoint(), customerProfileWithAppointment, "SetCustomerAndBookAppointment")

        dispatch(SetLinearLoadingBarToggle(false))

        if (response) {
            dispatch(ClearAddPatientState())
            dispatch(SetCurrentCustomer({} as ICustomerIncomingData))
            dispatch(GetAllAppointments())
            dispatch(GetAllCustomers())
            toast.success("Customer and Appointment Set Successfully")
        } else {
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
            dispatch(ClearAddPatientState())
            //GET CUSTOMER ID BACK IN RESPONSE, DONT USE CHECK IF CUSTOMER EXISTS
            dispatch(CheckIfCustomerExists(customerRequest.phoneNumbers[0].number, customerRequest.organisationId))
            dispatch(GetAllCustomers())
            toast.success("Customer Set Successfully")
        } else {
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
                SetNonFatalError("Could not find customer")
            );
        }
    };
