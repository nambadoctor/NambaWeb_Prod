import { Action } from "../Types/ActionType";
import { Set_User_Selected_Tab_Types } from "../Reducers/SelectedTabReducer";

function setUserTypeAction(payload: string, actionType: string) {
    return {
        type: actionType,
        payload: payload
    };
}

export const setSelectedUserTab = (selectedTab: string): Action => (setUserTypeAction(selectedTab, Set_User_Selected_Tab_Types.SET_LOCAL_SELECTED_USER_TAB));