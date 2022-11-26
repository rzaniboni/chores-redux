import { createAction, createSlice, nanoid } from "@reduxjs/toolkit";

const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignedTo: ''
})

const initialState = [
  createTask('Order more energy drinks'),
  createTask('Write a cool Redux app'),
  createTask('New task')
];

export const taksSlice = createSlice({  
  name: 'tasks',
  initialState,
  reducers: {
    add: {  
      reducer(state, action) {
        const task = createTask(action.payload);
        state.push(task);
      },
    },
    toggle: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      task.completed = !task.completed;
    },
    assignToUser: (state, action) => {
      const task = state.find(t => t.id === action.payload.taskId);
      task.assignedTo = action.payload.humanId;
    }
  }
})

export const toggleTask = createAction('tasks/toggle', (taskId, completed) => ({
  payload: taskId, completed
}));
