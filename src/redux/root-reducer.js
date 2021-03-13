import {combineReducers} from 'redux';

import userReducer from './user-reducer-action/user.reducer';
import cartReducer from './cart-reducer/cart.reducer';

export default combineReducers(
  {
    user:userReducer,
    cart:cartReducer
  }
);