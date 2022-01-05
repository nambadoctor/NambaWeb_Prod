import { SeverityLevel } from "@microsoft/applicationinsights-web";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import IOrganisationBasic from "../Types/ClientDataModels/OrganisationBasic";

export function checkForDefaultOrgHelpers(organisations:IOrganisationBasic[]) : IOrganisationBasic | null {
    SetTrackTrace("Start Check For Default Org: " + organisations.length, "checkForDefaultOrgHelpers", SeverityLevel.Information);
    var hasDefaultOrg = false;
    var defaultOrg = { } as IOrganisationBasic
    organisations.forEach(org => {
        if (org.isDefault) {
            SetTrackTrace("Found Default Org Default Org: " + defaultOrg, "checkForDefaultOrgHelpers", SeverityLevel.Information);
            hasDefaultOrg = true;
            defaultOrg = org
        }
    });

    if (!hasDefaultOrg) {
        SetTrackTrace("DID NOT FIND Default Org: " + defaultOrg, "checkForDefaultOrgHelpers", SeverityLevel.Warning);
        return null;
    } else {
        SetTrackTrace("Found Default Org: " + defaultOrg, "checkForDefaultOrgHelpers", SeverityLevel.Information);
        return defaultOrg;
    }
}