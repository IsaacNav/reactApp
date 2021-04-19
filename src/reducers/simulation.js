import { ADD_SIMULATION } from '../constants/utils';

const defaultState = () => false;

export const simulationReducer = (state = defaultState(), action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SIMULATION:
      return { ...state, ...payload, status: true };
    default:
      return state;
  }
};

export const getClientState = (state) => state.simulationReducer;
