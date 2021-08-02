import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
const apiUrl = "https://reqres.in/api/users?per_page=12";
const getEmployees = () =>
   axios
      .get(apiUrl)
      .then((result) => result.data.data)
      .catch((error) => {
         throw error;
      });
    


function* fetchEmployees() {
  try {
      const usersModules = yield call(getEmployees);
      yield put({ type: 'GET_EMPLOYEES_SUCCESS', payload: usersModules });
  } catch (error) {
      yield put({ type: 'EMPLOYEES_FAILED', message: error.message });
  }
}


function* employeesSaga() {
    yield takeEvery('GET_EMPLOYEES_REQUESTED', fetchEmployees);
 }

 export { employeesSaga }