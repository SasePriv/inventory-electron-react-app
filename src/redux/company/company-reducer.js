import { Switch } from 'react-router-dom';
import CompanyActionTypes from './company-types';

const INITIAL_STATE = {
    currentCompany: null,
    companyStatus: undefined,
}

const CompanyReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CompanyActionTypes.SET_CURRENT_COMPANY:
            return {
                ...state,
                currentCompany: payload
            }
    
        default:
            return state;
    }
}

export default CompanyReducer;