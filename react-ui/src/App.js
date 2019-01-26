import React, { Component } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";
import ReactDOM from "react-dom";

import MainForm from "./components/main_form";
import Map from "./components/map";

import moment from "moment";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "rc-time-picker/assets/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MapTunes.io</h1>
          <p>
            {" "}
            Visualize data from February 19, 2018 using parameters of your
            choice!{" "}
          </p>
          <hr
            style={{
              color: "black",
              backgroundColor: "black",
              height: 2,
              width: "30%"
            }}
          />

          <Map />

          <MainForm />
        </header>
      </div>
    );
  }
}

export default App;
