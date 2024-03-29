import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SetOrgPickerModalToggle } from '../../actions/common/UIControlActions';
import { SetSelectedOrg } from '../../actions/OrganisationActions';
import { RootState } from '../../store';
import IOrganisationBasic from '../../types/IncomingDataModels/OrganisationBasic';

export default function OrganisationInitialModalPickerComponent() {
    const dispatch = useDispatch();

    const uiTriggerState = useSelector(
        (state: RootState) => state.UITriggerState,
    );
    const orgState = useSelector((state: RootState) => state.OrgState);

    function selectOrg(selectedOrg?: IOrganisationBasic) {
        dispatch(SetOrgPickerModalToggle(false));
        dispatch(SetSelectedOrg(selectedOrg));
    }

    return (
        <div>
            <Modal
                show={uiTriggerState.showOrgPickerModalToggle}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        fontSize: 15,
                        marginTop: 5,
                    }}
                >
                    Choose Organisation
                </div>

                {orgState.organisations.map(
                    (organisation: IOrganisationBasic, _index: number) => (
                        <Button
                            variant="primary"
                            key={organisation.organisationId}
                            onClick={() => selectOrg(organisation)}
                            style={{ maxWidth: 350, margin: 5 }}
                        >
                            {organisation.name}
                        </Button>
                    ),
                )}
            </Modal>
        </div>
    );
}
