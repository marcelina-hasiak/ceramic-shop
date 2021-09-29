import { createSelector } from 'reselect'

const selectCollections = state => state.collections

export const selectItems = createSelector(
  [selectCollections],
  collections => collections.items
)