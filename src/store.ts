import { createStore, applyMiddleware, combineReducers } from "redux"; 
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { orgReducer } from "./Reducers/OrganisationsReducer";
import { serviceProviderBasicReducer } from "./Reducers/Common/ServiceProviderBasicReducer";
import { appointmentReducer } from "./Reducers/AppointmentsReducer";
import { appointmentCategoryReducer } from "./Reducers/AppointmentCategoryReducer";
import { selectedDateReducer } from "./Reducers/SelectedDateReducer";
import { customerReducer } from "./Reducers/CustomersReducer";
import { uiTriggerReducer } from "./Reducers/Common/UITriggerReducer";
import { currentServiceProviderReducer } from "./Reducers/CurrentServiceProviderReducer";
import { addPatientReducer } from "./Reducers/AddPatientReducer";
import { ConsultationReducer } from "./Reducers/ConsultationReducer";

const rootReducer = combineReducers({
    OrgState: orgReducer,
    ServiceProviderBasicState: serviceProviderBasicReducer,
    AppointmentState: appointmentReducer,
    AppointmentCategoryState: appointmentCategoryReducer,
    SelectedDatesState: selectedDateReducer,
    CustomersState: customerReducer,
    UITriggerState: uiTriggerReducer,
    CurrentServiceProviderState: currentServiceProviderReducer,
    AddPatientState: addPatientReducer,
    ConsultationState: ConsultationReducer
});

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store

export type RootState = ReturnType<typeof rootReducer>