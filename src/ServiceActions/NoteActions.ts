import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { toast } from "react-toastify";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { SetLinearLoadingBarToggle, SetNonFatalError } from "../Actions/Common/UIControlActions";
import { SetNotes } from "../Actions/CurrentCustomerActions";
import { DeleteCustomerNoteEndPoint, GetCustomerAllNotesEndPoint, GetCustomerNotesEndPoint, SetCustomerNoteEndPoint } from "../Helpers/EndPointHelpers";
import { deleteCall, getCall, postCall, putCall } from "../Http/http-helpers";
import { RootState } from "../store";
import SetTrackTrace from "../Telemetry/SetTrackTrace";
import { INoteIncomingData } from "../Types/IncomingDataModels/NoteIncoming";
import { INoteOutgoingData } from "../Types/OutgoingDataModels/NoteOutgoing";

export const GetNotes = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

    const customer = getState().CurrentCustomerState.Customer

    try {
        let response = await getCall({} as Array<INoteIncomingData>, GetCustomerAllNotesEndPoint(customer?.organisationId ?? "", customer?.customerId ?? ""), "GetAllNotes");

        if (response) {
            dispatch(SetNotes(response.data))
        }
    } catch (error) {
        dispatch(SetNonFatalError("Could not get all notes for this patient"))
    }
}

export const UploadNote = (note: INoteOutgoingData): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    try {
        let response = await postCall({} as any, SetCustomerNoteEndPoint(), note, "UploadNote")

        if (response) {
            dispatch(GetNotes())
            toast.success("Upload Note Success")
        }
    } catch (error) {
        dispatch(SetNonFatalError("Could not upload note"))
    }
}

export const EditNote = (note: INoteOutgoingData): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    try {
        let response = await putCall({} as any, SetCustomerNoteEndPoint(), note, "EditNote")

        if (response) {
            dispatch(GetNotes())
            toast.success("Edit Note Success")
        }
    } catch (error) {
        dispatch(SetNonFatalError("Could not edit note"))
    }
}

export const DeleteNote = (noteId:string): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {

    dispatch(SetLinearLoadingBarToggle(true))
    
    SetTrackTrace("Enter Delete Note Action", "DeleteNote", SeverityLevel.Information)
  
    try {
      let response = await deleteCall({} as any, DeleteCustomerNoteEndPoint(noteId), "DeleteNote")
  
      if (response) {
        dispatch(GetNotes());
  
        dispatch(SetLinearLoadingBarToggle(false))
        toast.success("Note Deleted")
      }
    } catch (error) {
      dispatch(SetNonFatalError("Could not delete note"))
    }
  };