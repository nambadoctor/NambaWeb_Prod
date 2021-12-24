import { Action } from "../../Types/ActionType";
import { Set_Local_User_Auth_Types } from "../../Reducers/Common/LoggedInUserStateReducer";

function setUserTypeAction(payload: string, actionType: string) {
    return {
        type: actionType,
        payload: payload
    };
}

export const setLoggedInUserSPID = (spID: string): Action => (setUserTypeAction(spID, Set_Local_User_Auth_Types.SET_LOCAL_USER_SP_ID));
export const setLoggedInUserORGID = (orgID: string): Action => (setUserTypeAction(orgID, Set_Local_User_Auth_Types.SET_LOCAL_USER_ORG_ID));
export const setLoggedInUserAUTHID = (authID: string): Action => (setUserTypeAction(authID, Set_Local_User_Auth_Types.SET_LOCAL_USER_AUTH_TOKEN));
