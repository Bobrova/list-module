import {
  EDIT_ITEM,
  SET_SINGER_EDIT,
  SET_SONG_EDIT,
} from '../constants/ActionTypes';

import { initialState } from '../store/initialState';

export default function edit(state = initialState.edit, action) {
  switch (action.type) {
    case EDIT_ITEM:
      return {
        ...state,
        idEdit: action.idEdit,
      };

    case SET_SINGER_EDIT:
      return {
        ...state,
        singer: action.singer,
      };

    case SET_SONG_EDIT:
      return {
        ...state,
        song: action.song,
      };

    default:
      return state;
  }
}
