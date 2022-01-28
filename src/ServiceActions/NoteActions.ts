import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { SetNonFatalError } from "../Actions/Common/UIControlActions";
import { SetCustomerNoteEndPoint } from "../Helpers/EndPointHelpers";
import { postCall } from "../Http/http-helpers";
import { RootState } from "../store";
import { INoteOutgoingData } from "../Types/OutgoingDataModels/NoteOutgoing";

export const UploadNote = (): ThunkAction<void, RootState, null, Action> => async (dispatch, getState) => {
    let currentConsultationAppointment = getState().ConsultationState.currentAppointment

    var x = {
        Note: "AYEOOO",
        NoteId: "",
        AppointmentId: currentConsultationAppointment?.appointmentId ?? "",
        ServiceRequestId: currentConsultationAppointment?.serviceRequestId ?? ""
    } as INoteOutgoingData;

    try {
        let response = await postCall({} as any, SetCustomerNoteEndPoint(), x, "UploadReport")

        if (response) {
            
        }
    } catch (error) {
        dispatch(SetNonFatalError("Could not upload note"))
    }

}