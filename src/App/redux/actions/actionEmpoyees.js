import {
    GET_EMPLOYEES_REQUESTED
  } from './actionTypes';
  
  
  export const getEmployees = (data) => {
   return {
       type: GET_EMPLOYEES_REQUESTED,
       payload: data,
   };
  };