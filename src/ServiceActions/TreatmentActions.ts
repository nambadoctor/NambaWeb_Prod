import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { toast } from "react-toastify";
import { ThunkAction } from "redux-thunk";
import { SetFatalError, SetLinearLoadingBarToggle, SetNonFatalError } from "../Actions/Common/UIControlActions";
import { SetPatientTreatmentPlans, SetPatientTreatments } from "../Actions/CurrentCustomerActions";
import { AddTreatmentEndPoint, AddTreatmentPlanEndPoint, DeleteTreatmentEndPoint, GetServiceProviderTreatmentPlansInOrganisationEndPoint, GetServiceProviderTreatmentsInOrganisationEndPoint, GetServiceProviderTreatmentsInOrganisationForCustomerEndPoint } from "../Helpers/EndPointHelpers";
import { deleteCall, getCall, postCall, putCall } from "../Http/http-helpers";
import { RootState } from "../store";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { Action } from "../Types/ActionType";
import { ITreatmentIncoming } from "../Types/IncomingDataModels/TreatmentIncoming";
import { ITreatmentPlanIncoming } from "../Types/IncomingDataModels/TreatmentPlanIncoming";
import { ITreatmentOutgoing } from "../Types/OutgoingDataModels/TreatmentOutgoing";
import { ITreatmentPlanOutgoing } from "../Types/OutgoingDataModels/TreatmentPlanOutgoing";

export const GetAllTreatments = (onlyShowUpcoming: boolean): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Get All Treatments Action", "GetAllTreatments", SeverityLevel.Information);
    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    if (currentServiceProvider) {
        SetTrackTrace("Retrieved Current Service Provider: " + currentServiceProvider, "GetAllTreatments", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Current Service Provider DOES NOT EXIST: " + currentServiceProvider, "GetAllTreatments", SeverityLevel.Error);
    }

    try {
        //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
        let response = await getCall({} as Array<ITreatmentIncoming>, GetServiceProviderTreatmentsInOrganisationEndPoint(currentServiceProvider.serviceProviderProfile.organisationId, currentServiceProvider.serviceProviderId), "GetAllTreatments");

        SetTrackTrace("Dispatch Set All Treatments" + response.data, "GetAllTreatments", SeverityLevel.Information);
        //dispatch(SetTreatments(response.data));

    } catch (error) {
        dispatch(SetFatalError("Could not retrieve treatments!"))
    }
};

export const GetAllTreatmentPlans = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Get All Treatment plans Action", "GetAllTreatmentPlans", SeverityLevel.Information);
    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!
    const currentCustomer = getState().CurrentCustomerState.Customer

    if (currentServiceProvider) {
        SetTrackTrace("Retrieved Current Service Provider: " + currentServiceProvider, "GetAllTreatmentPlans", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Current Service Provider DOES NOT EXIST: " + currentServiceProvider, "GetAllTreatmentPlans", SeverityLevel.Error);
    }

    if (currentCustomer) {
        SetTrackTrace("Retrieved Current Customer: " + currentServiceProvider, "GetAllTreatmentPlans", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Current Customer DOES NOT EXIST: " + currentServiceProvider, "GetAllTreatmentPlans", SeverityLevel.Error);
    }

    try {
        //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
        let response = await getCall({} as Array<ITreatmentPlanIncoming>, GetServiceProviderTreatmentPlansInOrganisationEndPoint(currentServiceProvider.serviceProviderProfile.organisationId, currentServiceProvider.serviceProviderId, currentCustomer?.customerId ?? ""), "GetAllTreatmentPlans");

        SetTrackTrace("Dispatch Set All Treatment plans" + response.data, "GetAllTreatmentPlans", SeverityLevel.Information);
        dispatch(SetPatientTreatmentPlans(response.data));

        dispatch(SetLinearLoadingBarToggle(false));

    } catch (error) {
        dispatch(SetFatalError("Could not retrieve treatment plans!"));
        dispatch(SetLinearLoadingBarToggle(false));
    }
};

export const AddTreatment = (treatment: ITreatmentOutgoing, treatmentPlanId: string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Add Treatment Action", "AddTreatment", SeverityLevel.Information);
    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    dispatch(SetLinearLoadingBarToggle(true));

    if (currentServiceProvider) {
        SetTrackTrace("Retrieved Current Service Provider: " + currentServiceProvider, "AddTreatment", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Current Service Provider DOES NOT EXIST: " + currentServiceProvider, "AddTreatment", SeverityLevel.Error);
    }

    try {
        //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL

        if (treatment.treatmentId) {
            let response = await putCall(
                {} as Array<ITreatmentIncoming>,
                AddTreatmentEndPoint(treatmentPlanId),
                treatment,
                'UpdateTreatment',
            )

            if (response) {
                dispatch(GetAllTreatmentPlans())
            }
        } else {
            let response = await postCall(
                {} as Array<ITreatmentIncoming>,
                AddTreatmentEndPoint(treatmentPlanId),
                treatment,
                'AddTreatment',
            );

            if (response) {
                dispatch(GetAllTreatmentPlans())
            }
        }

        dispatch(SetLinearLoadingBarToggle(false));
    } catch (error) {
        if (treatment.treatmentId) {
            dispatch(SetNonFatalError("Could not Update Treatment!"))
        } else {
            dispatch(SetNonFatalError("Could not Add Treatment!"))
        }
        
    }
};

export const AddTreatmentPlan = (treatmentPlan: ITreatmentPlanOutgoing): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Add Treatment Plan Action", "AddTreatmentPlan", SeverityLevel.Information);
    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!

    if (currentServiceProvider) {
        SetTrackTrace("Retrieved Current Service Provider: " + currentServiceProvider, "AddTreatmentPlan", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Current Service Provider DOES NOT EXIST: " + currentServiceProvider, "AddTreatmentPlan", SeverityLevel.Error);
    }

    try {
        //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL

        if (treatmentPlan.treatmentPlanId) {
            let response = await putCall(
                {} as Array<ITreatmentIncoming>,
                AddTreatmentPlanEndPoint(),
                treatmentPlan,
                'UpdateTreatmentPlan',
            );
        } else {
            let response = await postCall(
                {} as Array<ITreatmentIncoming>,
                AddTreatmentEndPoint(AddTreatmentPlanEndPoint()),
                treatmentPlan,
                'AddTreatmentPlan',
            );
        }
    } catch (error) {
        dispatch(SetFatalError("Could not AddTreatmentPlan!"))
    }
};

export const DeleteTreatment =
    (
        treatmentToDelete: ITreatmentIncoming,
    ): ThunkAction<void, RootState, null, Action> =>
        async (dispatch, getState) => {
            dispatch(SetLinearLoadingBarToggle(true));

            SetTrackTrace(
                'Enter Delete Treatment Action',
                'DeleteTreatment',
                SeverityLevel.Information,
            );

            try {
                let response = await deleteCall(
                    {} as any,
                    DeleteTreatmentEndPoint(treatmentToDelete.treatmentId, treatmentToDelete.treatmentPlanId),
                    'DeleteTreatment',
                );

                if (response) {
                    dispatch(GetAllTreatmentsForPatient(true));

                    dispatch(SetLinearLoadingBarToggle(false));
                    toast.success('Treatment Deleted');
                }
            } catch (error) {
                dispatch(SetNonFatalError('Could not delete treatment'));
            }
        };


export const GetAllTreatmentsForPatient = (isUpcomingTreatment?:boolean): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Get All Treatments Action", "GetAllTreatments", SeverityLevel.Information);
    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!
    const currentCustomer = getState().CurrentCustomerState.Customer!

    if (currentServiceProvider) {
        SetTrackTrace("Retrieved Current Service Provider: " + currentServiceProvider, "GetAllTreatments", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Current Service Provider DOES NOT EXIST: " + currentServiceProvider, "GetAllTreatments", SeverityLevel.Error);
    }

    try {
        //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
        let response = await getCall({} as Array<ITreatmentIncoming>, GetServiceProviderTreatmentsInOrganisationForCustomerEndPoint(currentServiceProvider.serviceProviderProfile.organisationId, currentServiceProvider.serviceProviderId, currentCustomer.customerId, isUpcomingTreatment ?? false), "GetAllTreatments");

        if (response) {
            dispatch(GetAllTreatmentPlans())
        }
        
        SetTrackTrace("Dispatch Set All Treatments" + response.data, "GetAllTreatments", SeverityLevel.Information);
        dispatch(SetPatientTreatments(response.data));

    } catch (error) {
        dispatch(SetFatalError("Could not retrieve treatments!"))
    }
};