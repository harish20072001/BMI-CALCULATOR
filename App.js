import React, { useState } from "react";
import "./App.css";






function App() {

  const[weight,setWeight] = useState();
  const[height,setHeight] = useState();
  const[bmi,setBmi] = useState('');
  const[message,setMessage] = useState('');

  //Logic
  function calcBmi(e) {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    }

    else {
      let bmi = (weight / (height * height) * 703);
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage('your  are under weight');
      }
      else if (bmi >= 25 && bmi < 30) {
        setMessage('your a Healthy weight');
      }
      else {
        setMessage('your over weight');
      }
    }

  }
  //reload
  let reload = () => {
    window.location.reload()
  }


  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter the weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (lbs)</label>
            <input
              type="text"
              placeholder="Enter the height value"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
