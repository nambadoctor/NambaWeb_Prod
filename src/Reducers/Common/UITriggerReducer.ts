import { SeverityLevel } from "@microsoft/applicationinsights-web";
import SetTrackTrace from "../../Telemetry/SetTrackTrace";
import { Action } from "../../Types/ActionType"

export enum UITrigger_Types {
  SET_ORG_PICKER_MODAL_TOGGLE = "SET_ORG_PICKER_MODAL_TOGGLE",
  SET_SHOW_LINEAR_LOADING_BAR_TOGGLE = "SET_SHOW_LINEAR_LOADING_BAR_TOGGLE",
  SET_FATAL_ERROR = "SET_FATAL_ERROR"
}

export interface UITriggerState {
  showOrgPickerModalToggle: boolean,
  showLinearLoadingBarToggle: boolean,
  FatalError: { toggle: boolean, message: string | null }
}

const initialState: UITriggerState = {
  showOrgPickerModalToggle: false,
  showLinearLoadingBarToggle: false,
  FatalError: { toggle: false, message: null }
}

export const uiTriggerReducer = (state: UITriggerState = initialState, action: Action): UITriggerState => {
  SetTrackTrace("Entered UI Trigger Reducer: " + action.type, "UiTriggerReducer", SeverityLevel.Information)
  switch (action.type) {
    case UITrigger_Types.SET_ORG_PICKER_MODAL_TOGGLE:
      SetTrackTrace("UI Trigger Reducer SET_ORG_PICKER_MODAL_TOGGLE SUCCESS" + action.payload, "UiTriggerReducer", SeverityLevel.Information)
      return {
        ...state,
        showOrgPickerModalToggle: action.payload
      }
    case UITrigger_Types.SET_SHOW_LINEAR_LOADING_BAR_TOGGLE:
      SetTrackTrace("UI Trigger Reducer SET_SHOW_LINEAR_LOADING_BAR_TOGGLE SUCCESS" + action.payload, "UiTriggerReducer", SeverityLevel.Information)
      return {
        ...state,
        showLinearLoadingBarToggle: action.payload
      }
    case UITrigger_Types.SET_FATAL_ERROR:
      SetTrackTrace("UI Trigger Reducer SET_FATAL_ERROR SUCCESS" + action.payload, "UiTriggerReducer", SeverityLevel.Information)
      return {
        ...state,
        FatalError: action.payload
      }
    default:
      SetTrackTrace("UI Trigger Reducer Hits default switch: Returns original state", "UiTriggerReducer", SeverityLevel.Error)
      return state
  }
};
