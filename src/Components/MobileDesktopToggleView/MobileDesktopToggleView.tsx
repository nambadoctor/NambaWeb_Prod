import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetIsMobileView } from '../../actions/common/MobileOrDesktopActions';
import { RootState } from '../../store';
import CustomButton from '../CustomButton';

export default function MobileDesktopToggleView() {
    const dispatch = useDispatch();

    const isMobileView = useSelector(
        (state: RootState) => state.mobileOrDesktopViewReducer.isMobile,
    );

    return (
        <div>
            <CustomButton
                type="submit"
                onClick={() => dispatch(SetIsMobileView(!isMobileView))}
                isPurple={true}
                title={
                    isMobileView
                        ? 'Switch To Desktop View'
                        : 'Switch To Mobile View'
                }
                small={false}
            />
        </div>
    );
}
