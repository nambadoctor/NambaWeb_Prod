import { Action } from "../../Types/ActionType"

export enum Set_Local_User_Auth_Types {
    SET_LOCAL_USER_SP_ID = "SET_LOCAL_USER_SP_ID",
    SET_LOCAL_USER_ORG_ID = "SET_LOCAL_USER_ORG_ID",
    SET_LOCAL_USER_AUTH_TOKEN = "SET_LOCAL_USER_AUTH_TOKEN"
}

export interface UserTypeState {
    serviceProviderId: string,
    organisationId: string,
    authToken: string
}

const initialState: UserTypeState = {
    serviceProviderId: "",
    organisationId: "",
    authToken: ""
}

export const loggedInUserStateReducer = (state: UserTypeState = initialState, action: Action): UserTypeState => {
    switch (action.type) {
        case Set_Local_User_Auth_Types.SET_LOCAL_USER_SP_ID:
            return {
                ...state,
                serviceProviderId: action.payload
            }
        case Set_Local_User_Auth_Types.SET_LOCAL_USER_ORG_ID:
            return {
                ...state,
                organisationId: action.payload
            }
        case Set_Local_User_Auth_Types.SET_LOCAL_USER_AUTH_TOKEN:
            return {
                ...state,
                authToken: action.payload
            }
        default:
            return state
    }
};
