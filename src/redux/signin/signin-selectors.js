import {createSelector} from 'reselect';
// import {create} from '../../../backend/models/user';

const selectSignIn = (state) => state.signin;

export const selectSignUpFormData = createSelector(
    [selectSignIn],
    (signin) => signin.formData,
);

export const selectIsSigningIn = createSelector(
    [selectSignIn],
    (signin) => signin.isSigningIn,
);

export const selectSignInFailure = createSelector(
    [selectSignIn],
    (signin) => signin.signInFailure,
);

export const selectSignInError = createSelector(
    [selectSignIn],
    (signin) => signin.signInError,
);
