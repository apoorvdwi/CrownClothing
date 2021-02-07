import React from "react";
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";
import "./signInSignUpPage.scss";

const SignInSignUpPage = () => (
  <div className="signInSignUp">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
