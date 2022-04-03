import { AppointmentSettingsOutgoing } from './AppointmentSettingsOutgoing';
import { FollowupSettingsOutgoing } from './FollowupSettingsOutgoing';
import { ReferralWhitelistOutgoing } from './ReferralWhitelistOutgoing';

export default interface SettingsConfigurationOutgoing {
    organisationId: string;
    serviceProviderId: string;
    appointmentSettings: AppointmentSettingsOutgoing;
    referralWhitelist: ReferralWhitelistOutgoing;
    followupSettings: FollowupSettingsOutgoing;
}
