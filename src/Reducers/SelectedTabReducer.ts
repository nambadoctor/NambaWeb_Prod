import { Action } from "../Types/ActionType"

export enum Set_User_Selected_Tab_Types {
    SET_LOCAL_SELECTED_USER_TAB = "SET_LOCAL_SELECTED_USER_TAB"
}

export enum TopBarNavItemConstants {
    APPOINTMENTS = "Appointments",
    PATIENTS = "Patients"
}

export interface UserTypeState {
    selectedTab: string
}

const initialState: UserTypeState = {
    selectedTab: "Appointments"
}

export const selectedUserTabReducer = (state: UserTypeState = initialState, action: Action): UserTypeState => {
    switch (action.type) {
        case Set_User_Selected_Tab_Types.SET_LOCAL_SELECTED_USER_TAB:
            return {
                ...state,
                selectedTab: action.payload
            }
        default:
            return state
    }
};
