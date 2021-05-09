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
import InventoryReducer from './inventory/inventory-reducer';
import ErrorInputsReducer from './errorsInputs/errorsInputs-reducer';
import VendorReducer from './vendor/vendor-reducer';
import ClientReducer from './client/client-reducer';

const reducer = combineReducers({
  user: UserReducer,
  signin: SignInReducer,
  signup: SigunUpReducer,
  company: CompanyReducer,
  errorInputs: ErrorInputsReducer,
  inventory: InventoryReducer,
  vendor: VendorReducer,
  client: ClientReducer,
});

const middlewares = [thunk, logger];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
