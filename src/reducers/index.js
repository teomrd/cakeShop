import { combineReducers } from 'redux';
import entities from './entities';
import loading from './loading';
import manageCakes from './manageCakes';

const reducers = combineReducers({
  entities,
  loading,
  manageCakes,
})

export default reducers;
