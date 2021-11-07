import { combineReducers } from 'redux';

import GeneralReducer from './GeneralReducer';
const moduleState = {
  general: GeneralReducer,
};

export default combineReducers(moduleState);
