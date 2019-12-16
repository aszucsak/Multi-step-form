import React, { Component, Fragment } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export class Success extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Fragment>
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions</p>
          </Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Success;
