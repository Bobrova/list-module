import { ADD_ITEM, SET_SONG, SET_SINGER, DEL_ITEM } from '../constants/ActionTypes';
import { initialState } from '../store/initialState';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [
          ...state.list,
          action.record,
        ],
        formValue: {
          song: '',
          singer: '',
        },
      };
      case DEL_ITEM:
        return state.list.filter(item => item.id !== action.id);
      case SET_SONG:
      return {
        ...state,
        formValue: {
          ...state.formValue,
          song:action.song,
        },
      };
      case SET_SINGER:
      return {
        ...state,
        formValue: {
          ...state.formValue,
          singer:action.singer,
        },
      };
    default:
      return state;
  }
}
