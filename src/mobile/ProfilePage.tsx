import { useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import useAuthHook from '../service-actions/LoginActions';
import { RootState } from '../store';

export type ProfilePageProps = {};

export const ProfilePage = () => {
    const serviceProviderProfileState = useSelector(
        (state: RootState) =>
            state.CurrentServiceProviderState.serviceProvider
                ?.serviceProviderProfile,
    );

    const orgState = useSelector(
        (state: RootState) => state.OrgState.selectedOrganisation,
    );

    const { SignOut } = useAuthHook();

    return (
        <div className="flex flex-col justify-center items-center my-2 mx-2 gap-2">
            <span className="text-xl font-bold">Profile</span>
            <object
                className=" h-24 w-24"
                data="/assets/NDLogo.png"
                type="image/png"
            >
                <img
                    width={96}
                    height={96}
                    src={serviceProviderProfileState?.profilePictureUrl}
                    alt="Profile picture"
                />
            </object>
            <span className="text-lg font-semibold">
                Dr. {serviceProviderProfileState?.firstName}{' '}
                {serviceProviderProfileState?.lastName}
            </span>
            <span>{orgState?.name}</span>
            <div className="w-full mt-16">
                <CustomButton
                    isPurple={false}
                    title="Sign out"
                    small={false}
                    onClick={SignOut}
                />
            </div>
        </div>
    );
};

ProfilePage.defaultProps = {};
