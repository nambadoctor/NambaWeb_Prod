import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "../Types/ActionType";
import ICustomerIncomingData from "../Types/IncomingDataModels/CustomerIncoming";
import { ClearAddPatientState } from "./AddPatientActions";
import { ClearAllValuesForConsultation } from "./ConsultationActions";
import { ClearCurrentCustomerState } from "./CurrentCustomerActions";

export const ClearContext = (): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    dispatch(ClearAddPatientState());
    dispatch(ClearCurrentCustomerState());
    dispatch(ClearAllValuesForConsultation());
}