import IOrganisationBasic from "../Types/ClientDataModels/OrganisationBasic";

export function checkForDefaultOrgHelpers(organisations:IOrganisationBasic[]) : IOrganisationBasic | null {
    var hasDefaultOrg = false;
    var defaultOrg = { } as IOrganisationBasic
    organisations.forEach(org => {
        if (org.isDefault) {
            hasDefaultOrg = true;
            defaultOrg = org
        }
    });

    if (!hasDefaultOrg) {
        return null;
    } else {
        return defaultOrg;
    }
}