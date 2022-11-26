import { configureStore } from '@reduxjs/toolkit';
import { humansSlice } from './humansSlice';
import { taksSlice } from './tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: taksSlice.reducer,
    humans: humansSlice.reducer
  }
});
