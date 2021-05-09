import {createSelector} from 'reselect';

const selectClient = (state) => state.client;

export const selectClientList = createSelector(
    [selectClient],
    (client) => client.clientList,
);

export const selectOneClient = createSelector(
    [selectClient],
    (client) => client.oneClient,
);

export const selectInvoiceOfClientList = createSelector(
    [selectClient],
    (client) => client.invoiceListOfClient,
);
