// add counter action creators imports here
import {
    INCREMENT_COUNTER,
    DECREAMENT_COUNTER,
    RESET_COUNTER
  } from "../actions/counterActions";
const INITIAL_STATE = { count: 0 };

// define counter reducer function here
export const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case RESET_COUNTER:
        return { isRunning: false, count: 0 };
      case INCREMENT_COUNTER:
        return { ...state, count: ++state.count };
      case DECREAMENT_COUNTER:
        return { ...state, count: --state.count };
      default:
        return state;
    }
  };
