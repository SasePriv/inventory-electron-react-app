import CompanyActionTypes from './company-types';

export const setCurrentCompany = (company) => ({
    type: CompanyActionTypes.SET_CURRENT_COMPANY,
    payload: company
});

