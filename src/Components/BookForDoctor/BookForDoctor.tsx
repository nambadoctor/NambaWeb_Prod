import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../../Styles/organisation_picker.css';
import IOrganisationBasic from '../../Types/IncomingDataModels/OrganisationBasic';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../../store';
import { SetSelectedOrg, SetSelectedServiceProvider } from '../../Actions/OrganisationActions';
import { StyledMenu } from '../OrganisationPicker/OrganisationPicker';
import IServiceProvider from '../../Types/IncomingDataModels/ServiceProvider';

export default function BookForServiceProviderPicker() {
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const serviceProviders = useSelector(
        (state: RootState) => state.OrgState.serviceProvidersInOrg,
    );

    const selectedServiceProvider = useSelector(
        (state: RootState) => state.OrgState.selectedServiceProvider,
    );

    const currentServiceProvider = useSelector(
        (state: RootState) => state.CurrentServiceProviderState.serviceProvider,
    );

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function getSelectedOption(serviceProvider?: IServiceProvider) {
        dispatch(SetSelectedServiceProvider(serviceProvider));
        handleClose();
    }

    useEffect(() => {
        var initialServiceProvider = serviceProviders?.find(
            (serviceProvider) =>
                serviceProvider.serviceProviderId ===
                currentServiceProvider?.serviceProviderId,
        );

        dispatch(SetSelectedServiceProvider(initialServiceProvider));
    }, [serviceProviders]);

    return (
        <div>
            {serviceProviders && (
                <div>
                    <div className="orgSwitcherButtonContainer">
                        <button
                            className="orgSwitcherButton"
                            onClick={handleClick}
                        >
                            Booking For: {selectedServiceProvider?.serviceProviderProfile.firstName} {selectedServiceProvider?.serviceProviderProfile.lastName}
                        </button>
                        <button
                            className="orgSwitcherDropDownIcon"
                            onClick={handleClick}
                        >
                            {' '}
                            {
                                <KeyboardArrowDownIcon
                                    style={{ fill: 'white' }}
                                ></KeyboardArrowDownIcon>
                            }{' '}
                        </button>
                    </div>

                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {serviceProviders.length !== 0 &&
                            serviceProviders.map(
                                (
                                    serviceProvider: IServiceProvider,
                                    index: number,
                                ) => (
                                    <MenuItem
                                    onClick={() => {
                                        getSelectedOption(serviceProvider);
                                    }}
                                    disableRipple
                                    >
                                        {
                                            serviceProvider
                                                .serviceProviderProfile
                                                .firstName
                                        }
                                    </MenuItem>
                                ),
                            )}
                    </StyledMenu>
                </div>
            )}
        </div>
    );
}
