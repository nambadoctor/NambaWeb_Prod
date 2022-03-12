import { MobileOrDesktopViewTypes } from "../../Reducers/MobileOrDesktopViewReducer";
import { Action } from "../../Types/ActionType";

function setIsMobileViewHelper(isMobileView: boolean) {
    return {
        type: MobileOrDesktopViewTypes.SET_IS_MOBILE,
        payload: isMobileView
    };
}

export const SetIsMobileView = (isMobileView : boolean): Action => (setIsMobileViewHelper(isMobileView));