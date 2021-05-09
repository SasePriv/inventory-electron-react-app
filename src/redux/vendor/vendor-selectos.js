import {createSelector} from 'reselect';

const selectVendor = (state) => state.vendor;

export const selectVendorList = createSelector(
    [selectVendor],
    (vendor) => vendor.vendorList,
);

export const selectOneVendor = createSelector(
    [selectVendor],
    (vendor) => vendor.oneVendor,
);

export const selectInvoiceOfVendorList = createSelector(
    [selectVendor],
    (vendor) => vendor.invoiceListOfVendor,
);
