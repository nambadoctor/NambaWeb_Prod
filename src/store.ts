import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginReducer } from "./Reducers/Common/LoginReducer";
import { orgReducer } from "./Reducers/OrganisationsReducer";
import { serviceProviderBasicReducer } from "./Reducers/Common/ServiceProviderBasicReducer";
import { appointmentReducer } from "./Reducers/AppointmentsReducer";
import { appointmentCategoryReducer } from "./Reducers/AppointmentCategoryReducer";
import { selectedDateReducer } from "./Reducers/SelectedDateReducer";
import { loggedInUserStateReducer } from "./Reducers/Common/LoggedInUserStateReducer";
import { selectedUserTabReducer } from "./Reducers/SelectedTabReducer";
import { customerReducer } from "./Reducers/CustomersReducer";

const rootReducer = combineReducers({
  LoginReducer: loginReducer,
  OrgReducer: orgReducer,
  ServiceProviderBasicReducer: serviceProviderBasicReducer,
  AppointmentReducer: appointmentReducer,
  AppointmentCategoryReducer: appointmentCategoryReducer,
  SelectedDatesReducer: selectedDateReducer,
  LoggedInUserStateReducer: loggedInUserStateReducer,
  SelectedUserTabStateReducer: selectedUserTabReducer,
  CustomersReducer: customerReducer,
});

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;

export type RootStore = ReturnType<typeof rootReducer>;
