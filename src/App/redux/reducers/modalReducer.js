import { CHANGE_MODAL } from '../actions/actionTypes';

const initialState = {
   isModalVisible: false,
};

export default function modulesReducer(state = initialState, action) {
   switch (action.type) {
      case CHANGE_MODAL:
         return { ...state, isModalVisible: action.payload };
      default:
         return state;
   }
}
