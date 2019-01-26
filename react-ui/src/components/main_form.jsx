import React, { Component } from "react";

import TimePicker from "react-time-picker";

class MainForm extends Component {
  constructor(props) {
    super(props);

    this.updateStartTime = this.updateStartTime.bind(this);
    this.updateEndTime = this.updateEndTime.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      startTime: "12:00",
      endTime: "13:00",
      artist: false,
      genre: false,
      song: false
    };
  }

  updateStartTime = startTime => this.setState({ startTime });

  updateEndTime = endTime => this.setState({ endTime });

  handleCheckboxChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert(
      `Start time: ${this.state.startTime}\nEnd time: ${
        this.state.endTime
      }\nArtist: ${this.state.artist}\nGenre: ${this.state.genre}\nSong: ${
        this.state.song
      }`
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <small>Start Time</small>
          <div>
            {" "}
            <TimePicker
              onChange={this.updateStartTime}
              value={this.state.startTime}
              disableClock={true}
            />
          </div>
        </div>
        <div class="form-group">
          <small>End Time</small>
          <div>
            {" "}
            <TimePicker
              onChange={this.updateEndTime}
              value={this.state.endTime}
              disableClock={true}
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
                onChange={this.handleCheckboxChange}
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
                onChange={this.handleCheckboxChange}
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
                onChange={this.handleCheckboxChange}
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
