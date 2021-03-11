// React Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// Reducers
import UserReducer from './user/user-reducer';
import SignInReducer from './signin/signin-reducer';
import SigunUpReducer from './signup/signup-reducer';
import CompanyReducer from './company/company-reducer';
import ErrorInputsReducer from './errorsInputs/errorsInputs-reducer';

const reducer = combineReducers({
  user: UserReducer,
  signin: SignInReducer,
  signup: SigunUpReducer,
  company: CompanyReducer,
  errorInputs: ErrorInputsReducer,
});

const middlewares = [thunk, logger];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
