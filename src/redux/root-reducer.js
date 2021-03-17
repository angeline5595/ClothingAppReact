import {combineReducers} from 'redux';
import userReducer from './user-reducer-action/user.reducer';
import cartReducer from './cart-reducer/cart.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// this is for session storsge:import sessionStorage from 'redux-presist/lib/storage';

export const persistConfig={
  key:'root',
  storage,
  whitelist:['cart']
};


export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);