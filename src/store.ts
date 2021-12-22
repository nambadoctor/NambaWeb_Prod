import { createStore, applyMiddleware, combineReducers } from "redux"; 
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { orgReducer } from "./Reducers/OrganisationsReducer";
import { userStateReducer } from "./Reducers/Common/UserStateReducer";
import { appointmentReducer } from "./Reducers/AppointmentsReducer";

const rootReducer = combineReducers({
    OrgReducer: orgReducer,
    UserStateReducer: userStateReducer,
    AppointmentReducer: appointmentReducer
});

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducer>

export default Store