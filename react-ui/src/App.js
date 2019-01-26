import React, { Component } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";
import ReactDOM from "react-dom";

import moment from "moment";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "rc-time-picker/assets/index.css";

const format = "h:mm A";

const now = moment()
  .hour(0)
  .minute(0);

function onChange(value) {
  console.log(value && value.format(format));
}

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

          <form>
            <div class="form-group">
              <small>Start Time</small>
              <div>
                {" "}
                <TimePicker
                  id="start-date"
                  showSecond={false}
                  defaultValue={now}
                  className="xxx"
                  onChange={onChange}
                  format={format}
                  use12Hours
                  inputReadOnly
                />
              </div>
            </div>
            <div class="form-group">
              <small>End Time</small>
              <div>
                {" "}
                <TimePicker
                  id="start-date"
                  showSecond={false}
                  defaultValue={now}
                  className="xxx"
                  onChange={onChange}
                  format={format}
                  use12Hours
                  inputReadOnly
                />
              </div>
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                {" Artist "}
              </label>
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                {" Genre "}
              </label>
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox3"
                  value="option3"
                />
                {" Song "}
              </label>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
