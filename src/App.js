import React from 'react';
import './App.css';
import DatePicker from 'react-date-picker';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Option Grant Calculator</h1>
      </header>
      <fieldset className="form-group">
        <legend>Option Grant Info</legend>
        <div className="form-group">
          <label>Number of Shares Granted</label>
          <input className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label>Number of Shares Total</label>
          <input className="form-control" type="text"/>
        </div>
        <div className="form-group">
          <label>Strike Price</label>
          <input className="form-control" type="text"/>
        </div>
        <div className="form-group">
          <label>Strike Date</label>
          <div className="d-block">
            <DatePicker />
          </div>
        </div>
      </fieldset>
      <div>
        <button className="btn btn-outline-primary">Add Another Grant</button>
        <button className="btn btn-primary">Calculate Exit Value &gt;</button>
      </div>
    </div>
  );
}

export default App;
