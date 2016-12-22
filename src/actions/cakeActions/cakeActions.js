import * as actionTypes from '../../constants/actionTypes';
import { normalize } from 'normalizr';
import { Schemas } from '../../schemas/cake';
import uhttp from 'uhttp';

export const fetchCakes = () => (dispatch) => {
  dispatch({
    type: actionTypes.FETCH_CAKES,
  });

  uhttp.get('https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json')
  .then((res) => {
    dispatch({
      type: actionTypes.FETCH_CAKES_SUCCESS,
      response: normalize(res, Schemas.CAKES),
    });
  })
  .catch((err) => {
    dispatch({
      type: actionTypes.FETCH_CAKES_FAILURE,
      error: err,
    });
  });
}

export const searchCakes = (value) => (dispatch) => {
  uhttp.get('https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json')
  .then((res) => {
    const filteredResponse = res.filter((cake) => cake.title.toLowerCase().search(value.toLowerCase()) !== -1 );
    dispatch({
      type: actionTypes.SEARCH_CAKES,
      response: normalize(filteredResponse, Schemas.CAKES),
    });
  })
  .catch((err) => {
    dispatch({
      type: actionTypes.FETCH_CAKES_FAILURE,
      error: err,
    });
  });

};
