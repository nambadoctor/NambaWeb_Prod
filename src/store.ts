import { createStore, applyMiddleware, combineReducers } from "redux"; 
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { orgReducer } from "./Reducers/OrganisationsReducer";
import { userStateReducer } from "./Reducers/Common/UserStateReducer";
import { appointmentReducer } from "./Reducers/AppointmentsReducer";
import { appointmentCategoryReducer } from "./Reducers/AppointmentCategoryReducer";
import { selectedDateReducer } from "./Reducers/SelectedDateReducer";

const rootReducer = combineReducers({
    OrgReducer: orgReducer,
    UserStateReducer: userStateReducer,
    AppointmentReducer: appointmentReducer,
    AppointmentCategoryReducer: appointmentCategoryReducer,
    SelectedDatesReducer: selectedDateReducer
});

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducer>

export default Store