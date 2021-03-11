import {createSelector} from 'reselect';

const selectErrorInput = (state) => state.errorInputs;

export const selectErrorInputsData = createSelector(
    [selectErrorInput],
    (errorInputs) => errorInputs,
);
