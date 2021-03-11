import {createSelector} from 'reselect';

const selectUser = (state) => state.user;

export const selectIsUserAuthenticated = createSelector(
    [selectUser],
    (user) => user.isAuthenticated,
);
