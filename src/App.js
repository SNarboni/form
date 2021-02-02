import React from "react";
import "./App.css";
import Form from "./component/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      classEmail: "form-control is-invalid",
      classPassword: "form-control is-invalid",
      classButton: "btn btn-primary disabled",
      emailResult: false,
      passwordResult: false,
    };
  }

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
    let reg = /^\S+@\S+\.\S+$/g;
    if (reg.test(this.state.email)) {
      this.setState({ classEmail: "form-control is-valid", emailResult: true });
    } else {
      this.setState({
        classEmail: "form-control is-invalid",
        emailResult: false,
      });
    }
    this.buttonUnlock();
  };
  onPasswordChange = (a) => {
    this.setState({ password: a.target.value });
    if (this.state.password.length >= 5) {
      this.setState({
        classPassword: "form-control is-valid",
        passwordResult: true,
      });
    } else {
      this.setState({
        classPassword: "form-control is-invalid",
        passwordResult: false,
      });
    }
    this.buttonUnlock();
  };

  buttonUnlock = () => {
    if (this.state.emailResult === true && this.state.passwordResult === true) {
      this.setState({ classButton: "btn btn-primary" });
    } else {
      this.setState({ classButton: "btn btn-primary disabled" });
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Login</h1>
        <main className="row">
          <Form
            emailTKT={this.onEmailChange}
            passwordTKT={this.onPasswordChange}
            classEmail={this.state.classEmail}
            classPassword={this.state.classPassword}
            classButton={this.state.classButton}
            methode={this.buttonUnlock}
          />
        </main>
      </div>
    );
  }
}

export default App;
