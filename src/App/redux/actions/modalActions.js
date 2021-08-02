import { CHANGE_MODAL } from './actionTypes';

export const changeModal = (data) => {
   return {
      type: CHANGE_MODAL,
      payload: data,
   };
};
