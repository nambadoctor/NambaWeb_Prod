import { createStore, compose, applyMiddleware, combineReducers } from "redux"; 
import thunk, {ThunkMiddleware} from "redux-thunk";
import { OrganisationState, orgReducer } from "./Reducers/OrganisationsReducer";
import { Action } from "./Types/ActionType";

const rootReducer = combineReducers({
    Org: orgReducer,
});

interface rootState extends
    OrganisationState
{}

export interface DispatchAction extends Action {
    payload: Partial<rootState>;
}

const middleware = thunk as ThunkMiddleware<rootState, DispatchAction>;

const ReduxDevTools =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
    rootReducer,
    compose(applyMiddleware(middleware),ReduxDevTools)
);
