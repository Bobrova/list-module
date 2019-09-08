import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.todoFilters;
const getlist = (state) => state.list;

export const getCurrentId = createSelector(
  [getlist],
  list => {
    return list.length !== 0 ? list[list.length - 1].id : 0;
  },
);
