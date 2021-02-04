import { createStore, combineReducers } from 'redux';
import UserReducer from './user/user-reducer';
import SignInReducer from'./signin/signin-reducer';
import SigunUpReducer from './signup/signup-reducer';
import CompanyReducer from './company/company-reducer'
// import { composeWithDevTools  } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import logger from "redux-logger";

const reducer = combineReducers({
    user: UserReducer,
    signin: SignInReducer,
    signup: SigunUpReducer,
    company: CompanyReducer
})

// const middlewares = [thunk, logger];

const store = createStore(reducer);

export default store;  