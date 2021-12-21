import { createStore, applyMiddleware, combineReducers } from "redux"; 
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { orgReducer } from "./Reducers/OrganisationsReducer";

const rootReducer = combineReducers({
    Org: orgReducer
});

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducer>

export default Store