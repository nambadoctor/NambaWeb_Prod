import { MobileOrDesktopViewTypes } from '../../reducers/MobileOrDesktopViewReducer';
import { Action } from '../../types/ActionType';

function setIsMobileViewHelper(isMobileView: boolean) {
    return {
        type: MobileOrDesktopViewTypes.SET_IS_MOBILE,
        payload: isMobileView,
    };
}

export const SetIsMobileView = (isMobileView: boolean): Action =>
    setIsMobileViewHelper(isMobileView);
