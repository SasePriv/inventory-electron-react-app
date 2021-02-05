import { createSelector } from "reselect";

const selectSignUp = state => state.signup;

export const selectSignUpFormData = createSelector(
    [selectSignUp],
    signup => signup.formData
);

export const selectIsSignUpIn = createSelector(
    [selectSignUp],
    signup => signup.isSignupIn
)