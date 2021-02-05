import { createSelector } from "reselect";

const selectSignIn = state => state.signin;

export const selectSignUpFormData = createSelector(
    [selectSignIn],
    signin => signin.formData
);

export const selectIsSigningIn = createSelector(
    [selectSignIn],
    signin => signin.isSigningIn
)