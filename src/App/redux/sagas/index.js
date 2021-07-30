import { all } from 'redux-saga/effects';
import { employeesSaga } from './employeesSaga';


export default function* rootSaga() {

   yield all([
    employeesSaga(),
   ]);

}