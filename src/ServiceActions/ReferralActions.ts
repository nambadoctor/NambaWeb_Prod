import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { toast } from "react-toastify";
import { ThunkAction } from "redux-thunk";
import { SetFatalError, SetLinearLoadingBarToggle } from "../Actions/Common/UIControlActions";
import { ReferPatientEndPoint } from "../Helpers/EndPointHelpers";
import { postCall } from "../Http/http-helpers";
import { RootState } from "../store";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { Action } from "../Types/ActionType";
import { IReferalOutgoing } from "../Types/OutgoingDataModels/ReferalOutgoing";

export const ReferPatient = (phoneNumber: string, reason: string, referToName: string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    SetTrackTrace("Enter Get All Refer Action", "ReferPatient", SeverityLevel.Information);
    const currentServiceProvider = getState().CurrentServiceProviderState.serviceProvider!
    const currentCustomer = getState().CurrentCustomerState.Customer!

    if (currentServiceProvider) {
        SetTrackTrace("Retrieved Current Service Provider: " + currentServiceProvider, "ReferPatient", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Current Service Provider DOES NOT EXIST: " + currentServiceProvider, "ReferPatient", SeverityLevel.Error);
    }

    if (currentCustomer) {
        SetTrackTrace("Retrieved Current Customer: " + currentCustomer, "ReferPatient", SeverityLevel.Information);
    } else {
        SetTrackTrace("Retrieved Current Customer DOES NOT EXIST: " + currentCustomer, "ReferPatient", SeverityLevel.Error);
    }

    var referalOutgoing = {
        customerId: currentCustomer.customerId,
        senderServiceProviderId: currentServiceProvider.serviceProviderId,
        organisationId: currentServiceProvider.serviceProviderProfile.organisationId,
        phoneNumber: phoneNumber,
        reason: reason
    } as IReferalOutgoing;

    try {
        dispatch(SetLinearLoadingBarToggle(true));
        //TODO: Handle if selected organisation is null, SHOW ORG PICKER MODAL
        let response = await postCall(
            {} as any,
            ReferPatientEndPoint(),
            referalOutgoing,
            'ReferPatient',
        );

        if (response) {
            toast.success(currentCustomer.firstName + ' refered successfully to ' + referToName);
        }

        dispatch(SetLinearLoadingBarToggle(false));

    } catch (error) {
        var x = error
        dispatch(SetFatalError("Could not make referal!"))
    }
};
