import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { usePatientTableStyles } from '../UIHelperComponents/TableStyles';
import useTreatmentsHook from '../../CustomHooks/useTreatmentsHook';
import TreatmentPlanView from './TreatmentPlanView';

export default function TreatmentPlanPopupView() {
    const { treatmentPlans } = useTreatmentsHook();

    const showTreatmentPopup = useSelector(
        (state: RootState) => state.TreatmentState.showTreatmentPlanPopup,
    );

    return (
        <div>
            {showTreatmentPopup && treatmentPlans && treatmentPlans.length > 0 && (
                <Modal
                    show={true}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <div style={{ padding: 20 }}>
                        <h1>{treatmentPlans[0].treatmentPlanName}</h1>
                        <TreatmentPlanView></TreatmentPlanView>
                    </div>
                </Modal>
            )}
        </div>
    );
}
