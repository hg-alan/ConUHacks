import React, { Component } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";
import ReactDOM from "react-dom";

import MainForm from "./components/main_form";

import moment from "moment";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "rc-time-picker/assets/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>music.io</h1>
          <hr
            style={{
              color: "white",
              backgroundColor: "white",
              height: 2,
              width: "30%"
            }}
          />

          <MainForm />
        </header>
      </div>
    );
  }
}

export default App;
