import { createSelector } from 'reselect';

const getSearchValue = (state) => state.searchValue;
const getlist = (state) => state.list;

export const getCurrentId = createSelector(
  [getlist],
  list => {
    return list.length !== 0 ? list[list.length - 1].id : 0;
  },
);

export const getVisibleList = createSelector(
  [getSearchValue, getlist],
  (text = '', list) => {
    return list.filter(
      item => item.Song.toUpperCase().includes(text.toUpperCase())
        || item.Singer.toUpperCase().includes(text.toUpperCase()),
    );
  },
);
