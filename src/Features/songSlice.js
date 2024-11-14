import { createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'songs',
  initialState: { list: [], loading: false, error: null },
  reducers: {
    fetchSongsStart: (state) => { state.loading = true },
    fetchSongsSuccess: (state, action) => { state.list = action.payload; state.loading = false },
    fetchSongsFailure: (state, action) => { state.error = action.payload; state.loading = false },
    addSongSuccess: (state, action) => { state.list.push(action.payload) },
    updateSongSuccess: (state, action) => {
      const index = state.list.findIndex(song => song.id === action.payload.id);
      if (index >= 0) state.list[index] = action.payload;
    },
    deleteSongSuccess: (state, action) => {
      state.list = state.list.filter(song => song.id !== action.payload);
    },
  }
});

export const {
  fetchSongsStart, fetchSongsSuccess, fetchSongsFailure,
  addSongSuccess, updateSongSuccess, deleteSongSuccess
} = songSlice.actions;

export default songSlice.reducer;
// Thunk action to dispatch mock data
export const loadMockSongs = () => (dispatch) => {
  dispatch(fetchSongsStart());
  
  // Mock data to simulate API response
  const mockSongs = [
    { id: 1, title: "Shape of You", artist: "Ed Sheeran" },
    { id: 2, title: "Shake It Off", artist: "Taylor Swift" },
    { id: 3, title: "Billie Jean", artist: "Michael Jackson" },
    { id: 4, title: "Halo", artist: "Beyoncé" }
  ];

  // Simulate a successful fetch
  dispatch(fetchSongsSuccess(mockSongs));
};