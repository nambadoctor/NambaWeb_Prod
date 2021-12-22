import { Action } from "../../Types/ActionType";
import { ThunkAction } from "redux-thunk";
import http from "../../http-common";
import { GetUserType_Types, UserTypeState } from "../../Reducers/Common/GetUserTypeReducer";
import GetHeaderHelper from "./GetHeaderHelper";

function setUserTypeAction(userType: string) {
    return {
        type: GetUserType_Types.SET_LOCAL_USER_TYPES,
        payload: userType
    };
}

export const setUserType = (userType: string): Action => (setUserTypeAction(userType));

export const GetUserType = (): ThunkAction<void, UserTypeState, null, Action> => async dispatch => {
    let headersVals = await GetHeaderHelper();
    console.log(headersVals)
    let response = await http.get<string>("/UserType", {headers : headersVals});
    console.log(response.data)
    dispatch(setUserType(response.data));
};
