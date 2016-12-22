import { combineReducers } from 'redux';
import cakes from './cakes';

const entities = combineReducers({
  cakes,
});

export default entities;
