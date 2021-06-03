import {createSelector} from 'reselect';

const selectInventory = (state) => state.inventory;

export const selectCategoryList = createSelector(
    [selectInventory],
    (inventory) => inventory.categoryList,
);

export const selectBrandList = createSelector(
    [selectInventory],
    (inventory) => inventory.brandList,
);

export const selectProductsList = createSelector(
    [selectInventory],
    (inventory) => inventory.productsList,
);

export const selectProductUpdated = createSelector(
    [selectInventory],
    (inventory) => inventory.productUpdated,
);
