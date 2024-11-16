import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  allcountries: [],
  activities: [],
  details: {},
  loading: true,
  error: null
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = null; // Limpiar errores previos
    },
    getAll: (state, action) => {
      state.countries = action.payload;
      state.allcountries = action.payload;
      state.loading = false; // Termina la carga
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false; // Termina la carga con error
    },
    filterByContinents: (state, action) => {
      state.countries =
        action.payload === "All"
          ? state.countries
          : state.countries.filter((c) => c.continent[0] === action.payload);
    },
    searchByName: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.countries = state.countries.filter((c) =>
        c.name.toLowerCase().includes(searchTerm))
      state.loading = false // Termina la carga
    },
    filterById: (state, action) => {
      const id = action.payload;
      state.details = state.allcountries.find((c) => c.id === id) || null;
      state.loading = false; // Termina la carga
    },
    orderAscDesc: (state, action) => {
      state.countries.sort((a, b) =>
        action.payload === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    },
    orderByPopulation: (state, action) => {
      state.countries.sort((a, b) =>
        action.payload === "less"
          ? a.population - b.population
          : b.population - a.population
      )
    }
  }
});

// Exportar acciones y reducer
export const {
  getAll,
  startLoading,
  setError,
  filterByContinents,
  searchByName,
  orderAscDesc,
  orderByPopulation,
  filterById
} = countriesSlice.actions;

export default countriesSlice.reducer;