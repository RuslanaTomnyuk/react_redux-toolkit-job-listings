export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const addFilterAction = (filter) => ({
  type: ADD_FILTER,
    filter,
});

export const removeFilterAction = (filter) => ({
  type: REMOVE_FILTER,
  filter,
});

export const clearFilterAction  = {
  type: CLEAR_FILTER,
};
