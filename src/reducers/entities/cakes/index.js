import * as actionTypes from '../../../constants/actionTypes';
import merge from 'lodash/merge';

const cakes = (state = {}, action) => {
  console.log('action', action);
  switch (action.type) {
    case actionTypes.FETCH_CAKES_SUCCESS:
    case actionTypes.SAVE_CAKE:
      if (action.response
      && action.response.entities
      && action.response.entities.cakes) {
        return merge({}, state, action.response.entities.cakes);
      }
      return state;
    case actionTypes.FETCH_CAKES_FAILURE:
      return state;
    case actionTypes.SEARCH_CAKES:
      return {
        ...action.response.entities.cakes,
      }
    default:
      return state;
  }
};

export default cakes;
