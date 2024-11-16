import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activities: [],
  loading: false,
  error: null
};

const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    createActivity: (state, action) => {
      state.activities.push(action.payload);
    },
    getAllActivities: (state, action) => {
      state.activities = action.payload;
    },
    filterByActivity: (state, action) => {
      if (action.payload === "all") {
        state.countries = [...state.copyCountries];
      } else {
        const activitiesCountries = [];
        state.copyCountries.forEach((c) => {
          c.activities?.forEach((e) => {
            if (e.name === action.payload) {
              activitiesCountries.push(c);
            }
          });
        });
        state.countries = activitiesCountries;
      }
    },
    filterById: (state, action) => {
      state.details = action.payload;
    }
  }
});

export const { 
  createActivity,
  getAllActivities,
  filterByActivity,
  filterById
} = activitiesSlice.actions;

export default activitiesSlice.reducer;