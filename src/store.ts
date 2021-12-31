import { createStore, applyMiddleware, combineReducers } from "redux"; 
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { orgReducer } from "./Reducers/OrganisationsReducer";
import { serviceProviderBasicReducer } from "./Reducers/Common/ServiceProviderBasicReducer";
import { appointmentReducer } from "./Reducers/AppointmentsReducer";
import { appointmentCategoryReducer } from "./Reducers/AppointmentCategoryReducer";
import { selectedDateReducer } from "./Reducers/SelectedDateReducer";
import { selectedUserTabReducer } from "./Reducers/SelectedTabReducer";
import { customerReducer } from "./Reducers/CustomersReducer";
import { uiTriggerReducer } from "./Reducers/Common/UIControlReducer";

const rootReducer = combineReducers({
    OrgReducer: orgReducer,
    ServiceProviderBasicReducer: serviceProviderBasicReducer,
    AppointmentReducer: appointmentReducer,
    AppointmentCategoryReducer: appointmentCategoryReducer,
    SelectedDatesReducer: selectedDateReducer,
    SelectedUserTabStateReducer: selectedUserTabReducer,
    CustomersReducer: customerReducer,
    UITriggerReducer: uiTriggerReducer
});

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducer>

export default Store