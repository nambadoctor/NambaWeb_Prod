import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function NonExistentUserDisplayComponent() {
    const loadingBarInProgress = useSelector(
        (state: RootState) => state.UITriggerState.showLinearLoadingBarToggle,
    );

    function EmptyDisplay() {
        return <div></div>;
    }

    function NonExistentUser() {
        return <div>TODO: Handle Non Existent User</div>;
    }

    return (
        <div>{loadingBarInProgress ? EmptyDisplay() : NonExistentUser()}</div>
    );
}
