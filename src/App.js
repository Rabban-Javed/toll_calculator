// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVehicleType, calculateToll } from './redux/tollReducer';
import MenuBar from './redux/MenuBar';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const vehicleType = useSelector((state) => state.toll.vehicleType);
  const tollAmount = useSelector((state) => state.toll.tolls[vehicleType] || 0);
  const todaysTotal = useSelector((state) => state.toll.todaysTotal);

  const handleVehicleChange = (event) => {
    const selectedVehicleType = event.target.value;
    dispatch(setVehicleType(selectedVehicleType));
  };

  const handleCalculateToll = () => {
    dispatch(calculateToll());
  };

  return (
    
    <div id="tollCalculatorApp" className="app-container">
      <MenuBar/>
      <h1 id="appHeading">Toll Calculator App</h1>
      <div className="form-container">
        <label htmlFor="vehicleTypeSelector">Select Vehicle Type:</label>
        <select id="vehicleTypeSelector" value={vehicleType} onChange={handleVehicleChange}>
          <option value="car">Car</option>
          <option value="truck">Truck</option>
          <option value="bus">Bus</option>
          <option value="bike">Bike</option>
          <option value="minibus">Minibus</option>
          {/* Add more vehicle types as needed */}
        </select>
      </div>
      <button id="calculateTollButton" className="calculate-button" onClick={handleCalculateToll}>
        Calculate Toll
      </button>
      <div id="resultContainer" className="result-container">
        <h2 id="tollAmountHeading">Toll Amount for {vehicleType}:</h2>
        <p id="tollAmountValue">{tollAmount}</p>
        <h2 id="todaysTotalHeading">Total Toll Amount for Today:</h2>
        <p id="todaysTotalValue">{todaysTotal}</p>
      </div>
      <div id="userEducation" className="user-education">
        <h2>User Education</h2>
        <p>
          Learn about how toll calculations are performed and factors affecting toll costs.
        </p>
        {/* Add an interactive guide or tooltips here */}
        <div className="tooltip">
          <span className="tooltiptext">Basic toll calculator app you just choose the vehicle the cost associated with it will be added with the previous todays toll cost</span>
          <button>show</button>
        </div>
      </div>
    </div>
  );
};

export default App;
