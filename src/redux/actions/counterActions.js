// define counter action constants here
export const DECREAMENT_COUNTER = "Decrement Counter";
export const RESET_COUNTER = "Reset Counter";
export const INCREMENT_COUNTER = "Increment Counter";

// define counter action creators here
export const decrementCounter = () => ({ type: DECREAMENT_COUNTER });
export const resetCounter = () => ({ type: RESET_COUNTER });
export const incrementCounter = () => ({ type: INCREMENT_COUNTER });