import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState('')

  const [featuresFlag, setFeaturesFlag] = useState(false)

  useEffect(() => {
    axios.get('https://do-flag.azurewebsites.net/api/features')
      .then(res => {
        setFeaturesFlag(res.data)
      })
  }, [])


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
              {featuresFlag && featuresFlag['title'] ? <h1 className="text-center">Math Operation</h1> : null}
              <div className="form-group">
                {
                  featuresFlag && featuresFlag['input'] ? <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Number 1"
                    onChange={event => setNumber1(event.target.value)}
                  /> : null
                }

                {
                  featuresFlag && featuresFlag['input'] ? <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Number 2"
                    onChange={event => setNumber2(event.target.value)}
                  /> : null
                }
                <select
                  className="form-control mb-2"
                  onChange={event => setOperation(event.target.value)}
                >
                {featuresFlag && featuresFlag['addition'] ? <option value="+">Add</option> : null}
                {featuresFlag && featuresFlag['subtraction'] ? <option value="-">Subtract</option> : null}
                {featuresFlag && featuresFlag['multiplication'] ? <option value="*">Multiply</option> : null}
                {featuresFlag && featuresFlag['division'] ? <option value="/">Divide</option> : null}
                </select>
                {featuresFlag && featuresFlag['submit'] ? <button className="btn btn-primary btn-block" onClick={calculateHandler}>Calculate</button> : null}
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
