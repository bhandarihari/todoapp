import React, { Component } from "react";
import LoginUi from "./LoginComponent";


const defaultForm = {
  email: "",
  password: "",
};

class LoginLogic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ...defaultForm,
      },
      error: {
        ...defaultForm,
      },
      isValidForm: false,
      isSubmitingForm: false,
    };
  }


  onChange = (e) => {
    let { name, value } = e.target;
    this.setState(
      (pre) => ({
        data: {
          ...pre.data,
          [name]: value,
        },
      }),
      () => {
        this.formValidation(name);
      }
    );
  };

  formValidation = (name) => {
    let errMsg = "";
    const fieldName = this.state.data[name];
    switch (name) {
      case "email":
        errMsg = fieldName
          ? fieldName.includes("@") && fieldName.includes(".")
            ? ""
            : "invalid email"
          : "required field*";
        break;
      case "password":
        errMsg = fieldName ? "" : "required field*";
        break;
      default:
        break;
    }
    this.setState(
      (pre) => ({
        error: {
          ...pre.error,
          [name]: errMsg,
        },
      }),
      () => {
        let errorObj = Object.values(this.state.error).filter((err) => err);

        let dataObj = Object.values(this.state.data).filter(
          (data) => data === ""
        );

        if (errorObj.length > 0 || dataObj.length > 0) {
          this.setState({
            isValidForm: false,
          });
        } else {
          this.setState({
            isValidForm: true,
          });
        }
      }
    );
  };

  render() {
    return (
      <>
        <LoginUi
          onChange={this.onChange}
          errors={this.state.error}
          isValidForm={this.state.isValidForm}
          isSubmitingForm={this.state.isSubmitingForm}
          data={this.state.data}
          topic="Login Form"
        />
      </>
    );
  }
}

export default LoginLogic;
