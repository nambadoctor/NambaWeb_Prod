import { Action } from "../../Types/ActionType";
import { UITrigger_Types } from "../../Reducers/Common/UITriggerReducer";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";
import { toast } from "react-toastify";

//TODO: MAKE ALL COMMON USECASE ACTIONS IN ONE FILE
function setBooleanPayload(payload: boolean, actionType: string) {
    return {
        type: actionType,
        payload: payload
    };
}

function setErrorPayload (toggle: boolean, payload: string|null, actionType: string) {
    return {
        type: actionType,
        payload: {
            toggle: true,
            message: payload 
        }
    }
}

export const SetOrgPickerModalToggle = (showOrgPickerModalToggle: boolean): Action => (setBooleanPayload(showOrgPickerModalToggle, UITrigger_Types.SET_ORG_PICKER_MODAL_TOGGLE));

export const SetLinearLoadingBarToggle = (showOrgPickerModalToggle: boolean): Action => (setBooleanPayload(showOrgPickerModalToggle, UITrigger_Types.SET_SHOW_LINEAR_LOADING_BAR_TOGGLE));

export const SetFatalError = (errorMessage: string): Action => (setErrorPayload(true, errorMessage, UITrigger_Types.SET_FATAL_ERROR));

export const NullifyFatalError = (): Action => (setErrorPayload(false, null, UITrigger_Types.SET_FATAL_ERROR));

export const NullifyNonFatalError = (): Action => (setErrorPayload(false, null, UITrigger_Types.SET_NON_FATAL_ERROR));

export const SetIsViewingImage = (isViewingImage: boolean): Action => (setBooleanPayload(isViewingImage, UITrigger_Types.SET_IS_VIEWING_IMAGE));


export const SetNonFatalError = (errorMessage: string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    dispatch(SetLinearLoadingBarToggle(false))
    toast.error(errorMessage, {position: toast.POSITION.BOTTOM_CENTER})
    setErrorPayload(true, errorMessage, UITrigger_Types.SET_NON_FATAL_ERROR)
}
