import { ADD_VALUE } from '../constants/ActionTypes';
import { initialState } from '../store/initialState';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_VALUE:
      return {
        ...state,
        list: [
          ...state.list,
          action.record,
        ],
      };
    default:
      return state;
  }
}
