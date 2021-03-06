import { uniqueId, getRandomColor } from '../../utils';
import { REMOVE_USER, ADD_USER } from '../../actions';

export const initialState = [
  {
    id: uniqueId('user'),
    name: 'Etienne',
    color: getRandomColor(),
  },
  {
    id: uniqueId('user'),
    name: 'Farid',
    color: getRandomColor(),
  },
  {
    id: uniqueId('user'),
    name: 'Superman',
    color: getRandomColor(),
  },
];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case REMOVE_USER:
      return state.filter(user => user.id !== action.payload);
    default:
      return state;
  }
};
