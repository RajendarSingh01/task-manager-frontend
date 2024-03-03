import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    { id: 1, name: "Design", NumberOfTasks: 0 },
    { id: 2, name: "Front-End", NumberOfTasks: 0 },
    { id: 3, name: "Back-End", NumberOfTasks: 0 },
  ],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action) => {
      const project = {
        id: nanoid(),
        name: action.payload,
        NumberOfTasks: 0,
      };
      state.projects.push(project);
    },
    removeProject: (state, action) => {},
  },
});
export const { addProject } = projectSlice.actions;
export default projectSlice.reducer;
