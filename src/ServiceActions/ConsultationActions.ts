import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { ThunkAction } from "redux-thunk";
import { GetAppointmentForServiceProvider, GetCustomerAllPrescriptionsEndPoint, GetCustomerAllReportsEndPoint, GetCustomerForServiceProvider } from "../Helpers/EndPointHelpers";
import { getCall } from "../Http/http-helpers";
import { RootState } from "../store";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { Action } from "../Types/ActionType";
import IAppointmentData from "../Types/IncomingDataModels/Appointment";
import { SetFatalError, SetLinearLoadingBarToggle, SetNonFatalError } from "../Actions/Common/UIControlActions";
import { GetPrescriptions } from "./PrescriptionActions";
import { GetReports } from "./ReportActions";
import { GetNextAndPreviousAppointmentForConsultation } from "../Actions/AppointmentsActions";
import { ClearAllValuesForConsultation, SetAllPrescriptionsForConsultation, SetAllReportsForConsultation, SetSelectedAppointmentForConsultation, SetSelectedCustomerForConsultation } from "../Actions/ConsultationActions";
import { FilterAllAndCurrentReports } from "../Actions/ReportActions";
import { FilterAllAndCurrentPrescriptions } from "../Actions/PrescriptionActions";


//Get consultation appointment
export const GetAppointmentForConsultation = (appointmentId: string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    dispatch(ClearAllValuesForConsultation())
    dispatch(SetLinearLoadingBarToggle(true))

    SetTrackTrace("Enter Get Appointment Action", "GetAppointmentForConsultation", SeverityLevel.Information);
    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    if (currentServiceProvider) {
        SetTrackTrace("Retrieved Current Service Provider: " + currentServiceProvider, "GetAppointmentForConsultation", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Current Service Provider DOES NOT EXIST: " + currentServiceProvider, "GetAppointmentForConsultation", SeverityLevel.Error);
    }

    try {
        //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
        let response = await getCall({} as Array<IAppointmentData>, GetAppointmentForServiceProvider(appointmentId, currentServiceProvider.serviceProviderId), "GetAllAppointments");

        dispatch(SetLinearLoadingBarToggle(false))

        SetTrackTrace("Dispatch Set Selected Appointment" + response.data, "GetAppointmentForConsultation", SeverityLevel.Information);
        dispatch(SetSelectedAppointmentForConsultation(response.data));
        dispatch(GetCustomerForConsultation(response.data.customerId));
        dispatch(GetNextAndPreviousAppointmentForConsultation())
        dispatch(GetReports())
        dispatch(GetPrescriptions())
    } catch (error) {
        dispatch(SetFatalError("Appointment Not Found" + error))
    }
};

//Get consultation customer
export const GetCustomerForConsultation = (customerId: string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Get Customer Action", "GetCustomerForConsultation", SeverityLevel.Information);
    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    if (currentServiceProvider) {
        SetTrackTrace("Retrieved Current Service Provider: " + currentServiceProvider, "GetCustomerForConsultation", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Current Service Provider DOES NOT EXIST: " + currentServiceProvider, "GetCustomerForConsultation", SeverityLevel.Error);
    }

    try {
        let response = await getCall({} as Array<IAppointmentData>, GetCustomerForServiceProvider(customerId, currentServiceProvider.serviceProviderProfile.organisationId), "GetCustomerForConsultation");

        if (response) {
            SetTrackTrace("Dispatch Set Selected Customer" + response.data, "GetCustomerForConsultation", SeverityLevel.Information);
            dispatch(SetSelectedCustomerForConsultation(response.data));
        } else {
            dispatch(SetNonFatalError("Could not find this customer"))
        }
    } catch (error) {
        dispatch(SetNonFatalError("Could not find customer for this appointment"))
    }
};