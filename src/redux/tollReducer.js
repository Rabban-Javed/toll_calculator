// src/redux/tollReducer.js
const initialState = {
    vehicleType: '',
    tolls: {
      car: 10,    
      truck: 25,
      bike: 5,
      bus: 10,
      minibus: 15,
       },
    totalTolls: {},
    todaysTotal: 0, // New property to track total toll amount for the day
  };
  
  // Action Types
  const SET_VEHICLE_TYPE = 'SET_VEHICLE_TYPE';
  const CALCULATE_TOLL = 'CALCULATE_TOLL';
  
  // Action Creators
  export const setVehicleType = (vehicleType) => ({
    type: SET_VEHICLE_TYPE,
    payload: vehicleType,
  });
  
  export const calculateToll = () => ({ type: CALCULATE_TOLL });
  
  const tollReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_VEHICLE_TYPE:
        return { ...state, vehicleType: action.payload };
      case CALCULATE_TOLL:
        const selectedVehicleType = state.vehicleType;
        const tollAmount = state.tolls[selectedVehicleType] || 0; // Default to 0 if the type is not found
        const totalTolls = {
          ...state.totalTolls,
          [selectedVehicleType]: (state.totalTolls[selectedVehicleType] || 0) + tollAmount,
        };
        const todaysTotal = state.todaysTotal + tollAmount;
        return { ...state, totalTolls, todaysTotal };
      default:
        return state;
    }
  };
  
  export default tollReducer;
  