import { Action } from "../../Types/ActionType";
import { UITrigger_Types } from "../../Reducers/Common/UIControlReducer";

//TODO: MAKE ALL COMMON USECASE ACTIONS IN ONE FILE
function setBooleanPayload(payload: boolean, actionType: string) {
    return {
        type: actionType,
        payload: payload
    };
}

export const SetOrgPickerModalToggle = (showOrgPickerModalToggle: boolean): Action => (setBooleanPayload(showOrgPickerModalToggle, UITrigger_Types.SET_ORG_PICKER_MODAL_TOGGLE));