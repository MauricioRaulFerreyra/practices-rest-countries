import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentPage: 1,
  order:""
}

const slicePagination = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload
    },
    setOrder: (state, action) => {
      state.order = action.payload
    }
  }
})

export const { setPage,setOrder } = slicePagination.actions

export default slicePagination.reducer