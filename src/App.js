import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [number, setNumber] = useState('')
  const [result, setResult] = useState('')

  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  const squareHandler = () => {
    axios.post('http://52.226.50.253:8000/square', { "number": number })
      .then(res => {
        setResult(res.data)
      })
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h1 className="text-center">Square a Number</h1>
                <h6 className="text-center">DevOps Project - Canary Update Testing</h6>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="numberInput" className="text-dark">Type Your Number</label>
                  <input
                    id="numberInput"
                    type="number"
                    className="form-control"
                    onChange={event => setNumber(event.target.value)}
                    placeholder='Number'
                  />
                </div>
                <div className="text-center mt-3">
                  <button className="btn btn-outline-primary" style={{ 'borderRadius': '50px', "fontWeight": "bold" }} onClick={squareHandler}>Square</button>
                </div>
                <hr />
                <div className="text-center">
                  <h5 className="text-dark">Your Result</h5>
                  <h1>{result}</h1>
                </div>
              </div>
              <div className="card-footer bg-warning text-center py-2">
                <small>DevOps - 2023, All rights reserved &copy;</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
