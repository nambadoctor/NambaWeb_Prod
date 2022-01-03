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
import { uiTriggerReducer } from "./Reducers/Common/UITriggerReducer";
import { currentServiceProviderReducer } from "./Reducers/CurrentServiceProviderReducer";

const rootReducer = combineReducers({
    OrgState: orgReducer,
    ServiceProviderBasicState: serviceProviderBasicReducer,
    AppointmentState: appointmentReducer,
    AppointmentCategoryState: appointmentCategoryReducer,
    SelectedDatesState: selectedDateReducer,
    SelectedUserTabState: selectedUserTabReducer,
    CustomersState: customerReducer,
    UITriggerState: uiTriggerReducer,
    CurrentServiceProviderState: currentServiceProviderReducer
});

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store

export type RootState = ReturnType<typeof rootReducer>