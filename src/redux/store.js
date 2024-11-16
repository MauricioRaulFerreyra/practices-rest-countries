import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from './sliceCountries';
import activitiesReducer from './sliceActivities';
import paginationReducer from './slicePagination';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    activities: activitiesReducer,
    pagination: paginationReducer
  }
});

export default store;