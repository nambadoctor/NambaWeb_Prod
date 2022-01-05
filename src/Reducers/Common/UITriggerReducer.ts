import { SeverityLevel } from "@microsoft/applicationinsights-web";
import SetTrackTrace from "../../Telemetry/SetTrackTrace";
import { Action } from "../../Types/ActionType"

export enum UITrigger_Types {
  SET_ORG_PICKER_MODAL_TOGGLE = "SET_ORG_PICKER_MODAL_TOGGLE"
}

export interface UITriggerState {
  showOrgPickerModalToggle: boolean
}

const initialState: UITriggerState = {
  showOrgPickerModalToggle: false
}

export const uiTriggerReducer = (state: UITriggerState = initialState, action: Action): UITriggerState => {
  SetTrackTrace("Entered UI Trigger Reducer: " + action.type, "UiTriggerReducer", SeverityLevel.Information)
  switch (action.type) {
    case UITrigger_Types.SET_ORG_PICKER_MODAL_TOGGLE:
      SetTrackTrace("UI Trigger Reducer SET_ORG_PICKER_MODAL_TOGGLE SUCCESS" + action.payload, "UiTriggerReducer", SeverityLevel.Information)
      return { showOrgPickerModalToggle: action.payload }
    default:
      SetTrackTrace("UI Trigger Reducer Hits default switch: Returns original state", "UiTriggerReducer", SeverityLevel.Error)
      return state
  }
};
