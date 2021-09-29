import { combineReducers } from 'redux'
import { userReducer } from './user/user.reducer'
import { cartReducer } from './cart/cart.reducer'
import { collectionsReducer } from './collections/collections.reducer'
import { shopItemsReducer } from './shop/shop.reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import expireReducer from "redux-persist-expire";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
  transforms: [
    expireReducer('cart', {
      expireSeconds: 86400,
      expiredState: {
        hidden: true,
        cartItems: []
      },
      autoExpire: true
    })
  ]
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  collections: collectionsReducer,
  shopItems: shopItemsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer


