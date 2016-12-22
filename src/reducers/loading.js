import * as actionTypes from '../constants/actionTypes';

const initState = {
  cakes: false,
};

const loading = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CAKES:
      return {
        ...state,
        cakes: true,
      };
    case actionTypes.FETCH_CAKES_SUCCESS:
    case actionTypes.FETCH_CAKES_FAILURE:
      return {
        ...state,
        cakes: false,
      };
    default:
      return state;
  }
};

export default loading;
