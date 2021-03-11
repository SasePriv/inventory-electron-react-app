import Store from './storeClass';

export const store = new Store({
  configName: 'user-preferences',
  defaults: {
    userData: {
      userId: null,
      companyId: null,
    },
    appConfig: {

    },
  },
});
