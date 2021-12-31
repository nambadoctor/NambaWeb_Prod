import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { SetOrgPickerModalToggle } from '../../Actions/Common/UIControlActions';
import { SetLocallySelectedOrg } from '../../Actions/OrganisationActions';
import useServiceProviderBasicHook from '../../CustomHooks/useGetUserTypeHook';
import { RootStore } from '../../store';
import IOrganisationBasic from '../../Types/ClientDataModels/OrganisationBasic';

export default function OrganisationInitialModalPickerComponent() {

    const dispatch = useDispatch();

    const uiTriggerState = useSelector((state: RootStore) => state.UITriggerReducer);
    const orgState = useSelector((state: RootStore) => state.OrgReducer);

    function selectOrg(selectedOrg?:IOrganisationBasic) {
        dispatch(SetOrgPickerModalToggle(false))
        dispatch(SetLocallySelectedOrg(selectedOrg))
    }

    return (
        <div>
            <Modal
                show={uiTriggerState.showOrgPickerModalToggle}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>

                <div style={{ width: '100%', textAlign: 'center', fontSize: 15, marginTop: 5 }}>Choose Organisation</div>

                {orgState.organisations.map(
                    (organisation: IOrganisationBasic, index: number) => (
                        <Button variant="primary" onClick={() => selectOrg(organisation)} style={{ maxWidth: 350, margin: 5 }}>
                            {organisation.name}
                        </Button>
                    )
                )}
            </Modal>
        </div>
    )
}
