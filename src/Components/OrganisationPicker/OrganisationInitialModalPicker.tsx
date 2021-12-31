import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import useServiceProviderBasicHook from '../../CustomHooks/useGetUserTypeHook';
import { RootStore } from '../../store';
import IOrganisationBasic from '../../Types/ClientDataModels/OrganisationBasic';

export default function OrganisationInitialModalPicker() {

    const { showOrgSelector, selectOrg } = useServiceProviderBasicHook();
    const orgState = useSelector((state: RootStore) => state.OrgReducer);

    return (
        <div>
            <Modal
                show={showOrgSelector}
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
