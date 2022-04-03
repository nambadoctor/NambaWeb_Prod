export interface ReferralWhitelistOutgoing {
    isEnabled: boolean;
    referralContacts: ReferralContactOutgoing[];
}

export interface ReferralContactOutgoing {
    contactName: string;
    phoneNumber: string;
}
