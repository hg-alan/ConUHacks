import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

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
              <small>Start Date</small>
              <input
                type="text"
                class="form-control"
                id="start-date"
                placeholder="Enter start date"
              />
            </div>
            <div class="form-group">
              <small>End Date</small>
              <input
                type="text"
                class="form-control"
                id="start-date"
                placeholder="Enter end date"
              />
            </div>

            <div class="form-group">
              <small>Artist ID</small>
              <input
                type="text"
                class="form-control"
                id="start-date"
                placeholder="Enter artist date"
              />
            </div>
            <div class="form-group">
              <small>Song ID</small>
              <input
                type="text"
                class="form-control"
                id="artist-id"
                placeholder="Enter song ID"
              />
            </div>
            <div class="form-group">
              <small>Offset</small>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter offset"
              />
            </div>
            <div class="form-group">
              <small>Pagination Limit</small>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter limit"
              />
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
