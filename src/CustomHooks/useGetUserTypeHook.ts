import { RootStore } from "../store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUserType } from "../Actions/Common/GetUserTypeActions";
import IOrganisationBasic from "../Types/ClientDataModels/OrganisationBasic";
import { SetLocallySelectedOrg, SetOrgs } from "../Actions/OrganisationActions";

export default function useServiceProviderBasicHook() {
    const dispatch = useDispatch();

    const serviceProviderBasicState = useSelector((state: RootStore) => state.ServiceProviderBasicReducer)

    //Org Selector Modal
    const [showOrgSelectorToggle, setshowOrgSelector] = useState(false)
    const handleShow = () => setshowOrgSelector(true);
    const handleClose = () => setshowOrgSelector(false);
    //--

    function checkForDefaultOrg() {
        var hasDefaultOrg = false;

        serviceProviderBasicState.serviceProvider!.organisations.forEach(org => {
            if (org.isDefault) {
                dispatch(SetLocallySelectedOrg(org))
                hasDefaultOrg = true;
            }
        });
 
        if (!hasDefaultOrg) {
            handleShow();
        }
    }

    function selectOrg(selectedOrg?:IOrganisationBasic) {
        handleClose()
        dispatch(SetLocallySelectedOrg(selectedOrg))
    }

    useEffect(() => {
        dispatch(GetUserType());
    }, [])

    useEffect(() => {
        if (serviceProviderBasicState.serviceProvider != undefined || serviceProviderBasicState.serviceProvider != null) {
            checkForDefaultOrg()

            //TODO: handle empty or null organisations
            dispatch(SetOrgs(serviceProviderBasicState.serviceProvider!.organisations))
        } else {
            //TODO: Handle empty value in client
        }
    }, [serviceProviderBasicState.serviceProvider])

    return {
        serviceProviderBasicState: serviceProviderBasicState,
        showOrgSelector: showOrgSelectorToggle,
        selectOrg,
        handleShow
    };
}
