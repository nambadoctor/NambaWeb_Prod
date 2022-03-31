import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { orgReducer } from './reducers/OrganisationsReducer';
import { serviceProviderBasicReducer } from './reducers/Common/ServiceProviderBasicReducer';
import { appointmentReducer } from './reducers/AppointmentsReducer';
import { selectedDateReducer } from './reducers/SelectedDateReducer';
import { customerReducer } from './reducers/CustomersReducer';
import { uiTriggerReducer } from './reducers/Common/UITriggerReducer';
import { currentServiceProviderReducer } from './reducers/CurrentServiceProviderReducer';
import { addPatientReducer } from './reducers/AddPatientReducer';
import { ConsultationReducer } from './reducers/ConsultationReducer';
import { LoadedStatesReducer } from './reducers/LoadedStatesReducer';
import { CurrentCustomerReducer } from './reducers/CurrentCustomerReducer';
import { treatmentsReducer } from './reducers/TreatmentsReducers';
import { LoginReducer } from './reducers/LoginReducer';
import { MobileOrDesktopViewReducer } from './reducers/MobileOrDesktopViewReducer';

const rootReducer = combineReducers({
    OrgState: orgReducer,
    ServiceProviderBasicState: serviceProviderBasicReducer,
    AppointmentState: appointmentReducer,
    SelectedDatesState: selectedDateReducer,
    CustomersState: customerReducer,
    UITriggerState: uiTriggerReducer,
    CurrentServiceProviderState: currentServiceProviderReducer,
    AddPatientState: addPatientReducer,
    ConsultationState: ConsultationReducer,
    CurrentCustomerState: CurrentCustomerReducer,
    LoadedState: LoadedStatesReducer,
    loginState: LoginReducer,
    mobileOrDesktopViewReducer: MobileOrDesktopViewReducer,
    TreatmentState: treatmentsReducer,
});

const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default Store;

export type RootState = ReturnType<typeof rootReducer>;
