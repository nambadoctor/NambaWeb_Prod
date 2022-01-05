import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { appInsights } from "./AppInsights";

export default function SetTrackTrace(message: string, calledFrom: string = "", severityLevel: SeverityLevel) {
    appInsights.trackTrace(
        {
            message: message,
            severityLevel: severityLevel
        },
        //Custom Dimensions Start
        {
            calledFrom: calledFrom
        },
        //Custom Dimensions End
    )
}