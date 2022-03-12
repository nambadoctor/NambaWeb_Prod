import { Action } from "../Types/ActionType"

export enum MobileOrDesktopViewTypes {
    SET_IS_MOBILE = "SET_IS_MOBILE",
}

export interface MobileOrDesktopState {
    isMobile: boolean;
}

const initialState: MobileOrDesktopState = {
    isMobile: false
}

export const MobileOrDesktopViewReducer = (state: MobileOrDesktopState = initialState, action: Action): MobileOrDesktopState => {
    switch (action.type) {
        case MobileOrDesktopViewTypes.SET_IS_MOBILE:
            return {
                isMobile: action.payload,
            }
        default:
            return state
    }
};
