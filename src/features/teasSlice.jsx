import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const url = 'https://boonakitea.cyclic.app/api/all';

export const fetchTeas = createAsyncThunk('teas/fetchTeas', async () => {
  const response = await fetch('https://boonakitea.cyclic.app/api/all');

  if (!response.ok) {
    return Promise.reject('Unable to fetch status: ' + response.status);
  }

  const data = await response.json();
  return data;
});

const initialState = {
  teasArray: [],
  isLoading: true,
  errMsg: '',
};

const teasSlice = createSlice({
  name: 'teas',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTeas.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTeas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errMsg = '';
        state.teasArray = action.payload;
      })
      .addCase(fetchTeas.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error ? action.error.message : 'Fetch failed';
      });
  },
});

export const teasReducer = teasSlice.reducer;

export const selectAllTeas = state => {
  return state.teas.teasArray;
};

export const selectTeaById = id => state => {
  return state.teas.teasArray.find(tea => tea.id === parseInt(id));
};

export const selectTeaBySlug = state => {
  return {
    slugItem: state.teas.teasArray.find(tea => tea.slug),
    isLoading: state.teas.isLoading,
    errMsg: state.teas.errMsg,
  };
};
