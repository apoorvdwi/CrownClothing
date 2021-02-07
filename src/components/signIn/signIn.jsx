import React, { Component } from "react";
import FormInput from "../formInput/formInput";
import CustomButton from "../customButton/customButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./signIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      Password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { Email, Password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(Email, Password);
    } catch (error) {
      console.error(error);
    }

    this.setState({ Email: "", Password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signIn">
        <h2>I already have an account</h2>
        <span>SignIn with your Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="Email"
            type="email"
            value={this.state.Email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="Password"
            type="password"
            value={this.state.Password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
