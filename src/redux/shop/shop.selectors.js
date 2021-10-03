import { createSelector } from 'reselect'

const selectShopItems = state => state.shopItems

export const selectCollectionItems = createSelector(
  [selectShopItems],
  shopItems => shopItems.shopCollection
)

export const selectCollectionsForPreview = createSelector(
  [selectCollectionItems],
  items => Object.keys(items).map(item => items[item])
)

export const selectCollection = collectionID => {
  return createSelector(
    [selectCollectionItems],
    items => items[collectionID]
  )
}
