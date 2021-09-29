import shopItems from './shop.data'

const INITIAL_STATE = {
  shopCollection: shopItems
}

export const shopItemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: return state
  }
}