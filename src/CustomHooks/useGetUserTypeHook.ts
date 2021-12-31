import { RootStore } from "../store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetServiceProviderBasic } from "../Actions/Common/ServiceProviderBasicActions";
import IOrganisationBasic from "../Types/ClientDataModels/OrganisationBasic";
import { SetLocallySelectedOrg, SetOrgs } from "../Actions/OrganisationActions";
import { SetOrgPickerModalToggle } from "../Actions/Common/UIControlActions";

export default function useServiceProviderBasicHook() {
    const dispatch = useDispatch();

    const serviceProviderBasicState = useSelector((state: RootStore) => state.ServiceProviderBasicReducer)

    useEffect(() => {
        dispatch(GetServiceProviderBasic());
    }, [])

    useEffect(() => {
        if (serviceProviderBasicState.serviceProvider != undefined || serviceProviderBasicState.serviceProvider != null) {
            checkForDefaultOrg()

            //TODO: handle empty or null organisations

            //Setting orgs of that service provider in org state
            dispatch(SetOrgs(serviceProviderBasicState.serviceProvider!.organisations))
        } else {
            //TODO: Handle empty value in client
        }
    }, [serviceProviderBasicState.serviceProvider])

    function checkForDefaultOrg() {
        var hasDefaultOrg = false;

        serviceProviderBasicState.serviceProvider!.organisations.forEach(org => {
            if (org.isDefault) {
                dispatch(SetLocallySelectedOrg(org))
                hasDefaultOrg = true;
            }
        });
 
        if (!hasDefaultOrg) {
            dispatch(SetOrgPickerModalToggle(true))
        }
    }

    return {
        serviceProviderBasicState: serviceProviderBasicState
    };
}
