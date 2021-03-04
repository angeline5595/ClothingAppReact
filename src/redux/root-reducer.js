import {combineReducers} from 'redux';

import userReducer from './user-reducer-action/user.reducer';

export default combineReducers(
  {
    user:userReducer
  }
);