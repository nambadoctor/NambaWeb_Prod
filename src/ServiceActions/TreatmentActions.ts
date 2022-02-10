import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { ThunkAction } from "redux-thunk";
import { SetFatalError } from "../Actions/Common/UIControlActions";
import { SetTreatments } from "../Actions/TreatmentActions";
import { GetServiceProviderTreatmentsInOrganisationEndPoint } from "../Helpers/EndPointHelpers";
import { getCall } from "../Http/http-helpers";
import { RootState } from "../store";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { Action } from "../Types/ActionType";
import { ITreatmentIncoming } from "../Types/IncomingDataModels/TreatmentIncoming";

export const GetAllTreatments = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
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
        dispatch(SetTreatments(response.data));

    } catch (error) {
        dispatch(SetFatalError("Could not retrieve treatments!"))
    }
};