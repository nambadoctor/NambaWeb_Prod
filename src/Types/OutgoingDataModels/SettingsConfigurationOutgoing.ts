import { AppointmentSettingsOutgoing } from './AppointmentSettingsOutgoing';
import { ReferralWhitelistOutgoing } from './ReferralWhitelistOutgoing';

export default interface SettingsConfigurationOutgoing {
    organisationId: string;
    serviceProviderId: string;
    appointmentSettings: AppointmentSettingsOutgoing;
    referralWhitelist: ReferralWhitelistOutgoing;
}
