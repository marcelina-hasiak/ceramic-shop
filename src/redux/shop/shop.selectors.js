import { createSelector } from 'reselect'

const selectShopItems = state => state.shopItems

export const selectCollectionItems = createSelector(
  [selectShopItems],
  shopItems => shopItems.shopCollection
)