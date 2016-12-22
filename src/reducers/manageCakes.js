import * as actionTypes from '../constants/actionTypes';

const initState = {
  mode: 'closed',
  title: '',
  description: '',
};

const manageCakes = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_CAKE:
      return {
        ...state,
        mode: 'editing',
        title: action.title,
        description: action.description,
      };
    case actionTypes.ADD_CAKE:
      return {
        ...state,
        mode: 'adding',
      };
    case actionTypes.SAVE_CAKE:
      return {
        ...state,
        mode: 'closed',
      };
    case actionTypes.CANCEL_CAKE:
      return {
        ...state,
        mode: 'closed',
        title: '',
        description: '',
      };
    default:
      return state;
  }
};

export default manageCakes;
