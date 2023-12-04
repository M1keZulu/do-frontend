import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState('')

  const calculateHandler = () => {
    axios.post('http://4.157.206.252:8000/calculate', { "number1": number1, "number2": number2, "operation": operation })
      .then(res => {
        setResult(res.data['result'])
      })
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              <h1 className="text-center mb-4">Math Operations - v1.0</h1>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control mb-2"
                  onChange={event => setNumber1(event.target.value)}
                  placeholder='Number 1'
                />
                <input
                  type="number"
                  className="form-control mb-2"
                  onChange={event => setNumber2(event.target.value)}
                  placeholder='Number 2'
                />
                <select
                  className="form-control mb-2"
                  onChange={event => setOperation(event.target.value)}
                >
                  <option value="+">Addition (+)</option>
                  <option value="-">Subtraction (-)</option>
                  <option value="*">Multiplication (*)</option>
                  <option value="/">Division (/)</option>
                </select>
                <button className="btn btn-primary btn-block" onClick={calculateHandler}>Calculate</button>
              </div>
              <hr />
              <div className="text-center">
                <h4>Result:</h4>
                <h2>{result}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
