import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from './sliceCountries';
import activitiesReducer from './sliceActivities';
import paginationReducer from './slicePagination';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    activities: activitiesReducer,
    pagination: paginationReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Aumentar el threshold
        warnAfter: 1000,
        // O deshabilitarlo completamente
        // ignoredActions: ['YOUR_ACTION_TYPE']
      },
    }),
});

export default store;