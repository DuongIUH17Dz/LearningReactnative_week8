import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create async thunk to fetch products from API
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://67301ada66e42ceaf15f5ae0.mockapi.io/car');
    const data = await response.json();
    return data;
  }
);

// Create the slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload); // Add a new product
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;