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
  switch (action.type) {
    case UITrigger_Types.SET_ORG_PICKER_MODAL_TOGGLE:
      return { showOrgPickerModalToggle: action.payload }
    default:
      return state
  }
};
