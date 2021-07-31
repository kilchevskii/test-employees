import {
    GET_EMPLOYEES_REQUESTED,
    ADD_EMPLOYEE,
    REMOVE_EMPLOYEE
  } from './actionTypes';
  
  
  export const getEmployees = (data) => {
   return {
       type: GET_EMPLOYEES_REQUESTED,
       payload: data,
   };
  };

  export const createEmployee = (data) => {
    return {
       type: ADD_EMPLOYEE,
       payload: data,
    };
 };
 
 export const removeEmployee = (data) => {
    return {
       type: REMOVE_EMPLOYEE,
       payload: data,
    };
 };
 