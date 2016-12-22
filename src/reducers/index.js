import { combineReducers } from 'redux';
import entities from './entities';
import loading from './loading';

const reducers = combineReducers({
  entities,
  loading,
})

export default reducers;
