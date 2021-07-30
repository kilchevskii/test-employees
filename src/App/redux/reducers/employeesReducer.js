import {
    GET_EMPLOYEES_REQUESTED,
    GET_EMPLOYEES_SUCCESS,
    EMPLOYEES_FAILED,
  } from "../actions/actionTypes";
  
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  export default function employeesReducer(state = initialState, action) {
    switch (action.type) {
      case GET_EMPLOYEES_REQUESTED:
        return { ...state, loading: true };
      case GET_EMPLOYEES_SUCCESS:
        return { ...state, loading: false, data: action.payload };
        case EMPLOYEES_FAILED:
              return {
                  ...state,
                  error: action.message,
              };        
  
      default:
        return state;
    }
  }