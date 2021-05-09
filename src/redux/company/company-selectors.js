import {createSelector} from 'reselect';

const selectCompany = (state) => state.company;

export const selectCompanyInfo = createSelector(
  [selectCompany],
  (company) => company.currentCompany
);