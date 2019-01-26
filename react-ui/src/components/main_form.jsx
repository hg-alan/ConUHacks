import React, { Component } from "react";

import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";
import ReactDOM from "react-dom";

import moment from "moment";

const format = "h:mm A";

const now = moment()
  .hour(0)
  .minute(0);

function onChange(value) {
  console.log(value && value.format(format));
}

function handleSubmit(event) {
  let startDate = "2019-01-01T00:00:00.000Z";
  let endDate = "2019-01-02T00:00:00.000Z";
  //event.preventDefault();
}

class MainForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: -1,
      endTime: -1,
      artist: false,
      genre: false,
      song: false
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={handleSubmit}>
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
        <div>
          <div class="checkbox-inline">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="true"
                name="artist"
              />
              {" Artist "}
            </label>
          </div>
          <div class="checkbox-inline">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="true"
                name="genre"
              />
              {" Genre "}
            </label>
          </div>
          <div class="checkbox-inline">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="true"
                name="song"
              />
              {" Song "}
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default MainForm;
