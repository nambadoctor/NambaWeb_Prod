import { appInsights } from "./AppInsights";

export default function SetTrackTrace(message: string, componentName: string) {
    appInsights.trackTrace(
        { message: message },
        { componentName: componentName })
}