import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { RootStore } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import IOrganisationData from '../../Types/Organisation';
import { useEffect } from 'react';
import { GetAllOrgs, SetLocallySelectedOrg } from '../../Actions/OrganisationActions';
import "../../Styles/organisation_picker.css"

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function OrganisationPicker() {
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const organisationState = useSelector((state: RootStore) => state.OrgReducer)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function getSelectedOption(organisation?: IOrganisationData) {
        dispatch(SetLocallySelectedOrg(organisation))
        handleClose()
    }

    useEffect(() => {
        dispatch(GetAllOrgs());
    }, []);

    return (
        <div>
            <div className="orgSwitcherButtonContainer">
                <button className="orgSwitcherButton" onClick={handleClick}>
                    {organisationState.selectedOrganisation != null ? organisationState.selectedOrganisation!.name : "Nambadoctor"}
                </button>
                <button className="orgSwitcherDropDownIcon" onClick={handleClick}> {<KeyboardArrowDownIcon style={{fill: "white"}}></KeyboardArrowDownIcon>} </button>
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

                <MenuItem onClick={() => { getSelectedOption() }} disableRipple> NambaDoctor </MenuItem>

                {organisationState.organisations.length != 0 && organisationState.organisations.map((organisation: IOrganisationData, index: number) => (
                    <MenuItem onClick={() => { getSelectedOption(organisation) }} disableRipple> {organisation.name} </MenuItem>
                ))}

            </StyledMenu>
        </div>
    );
}
