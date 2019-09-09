import {
  ADD_ITEM,
  SET_SONG,
  SET_SINGER,
  DEL_ITEM,
  SET_SEARCH,
  EDIT_ITEM,
  SET_SINGER_EDIT,
  SET_SONG_EDIT,
} from '../constants/ActionTypes';

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
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.id),
      };

    case SET_SONG:
      return {
        ...state,
        formValue: {
          ...state.formValue,
          song: action.song,
        },
      };

    case SET_SINGER:
      return {
        ...state,
        formValue: {
          ...state.formValue,
          singer: action.singer,
        },
      };

    case SET_SEARCH:
      return {
        ...state,
        searchValue: action.text,
      };

    case EDIT_ITEM:
      return {
        ...state,
        idEdit: action.idEdit,
      };

    case SET_SINGER_EDIT:
      return {
        ...state,
        list:
          state.list.map(item => (item.id === state.idEdit
            ? {
              ...item,
              Singer: action.singer,
            }
            : item
          )),
      };

    case SET_SONG_EDIT:
      return {
        ...state,
        list:
          state.list.map(item => item.id === state.idEdit
            ? { ...item, Song: action.song }
            : item),
      };
    default:
      return state;
  }
}
