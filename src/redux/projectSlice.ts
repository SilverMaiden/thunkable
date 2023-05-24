import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: number;
  name: string;
  createdAt: string; // Added this line
}

interface ProjectState {
  projects: Project[];
}

const initialState: ProjectState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject: {
      reducer: (state, action: PayloadAction<Project>) => {
        state.projects.push(action.payload);
      },
      prepare: (name: string) => {
        const id = Date.now();
        const createdAt = new Date().toISOString(); // Added this line
        return { payload: { id, name, createdAt } }; // Added createdAt
      },
    },
    renameProject: (state, action: PayloadAction<{ id: number; newName: string }>) => {
      const { id, newName } = action.payload;
      const project = state.projects.find((project) => project.id === id);
      if (project) {
        project.name = newName;
      }
    },
    deleteProject: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter((project) => project.id !== action.payload);
    },
    reorderProjects: (state, action: PayloadAction<{ sourceIndex: number; destinationIndex: number }>) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const [removed] = state.projects.splice(sourceIndex, 1);
      state.projects.splice(destinationIndex, 0, removed);
    },
  },
});

export const { addProject, renameProject, deleteProject, reorderProjects } = projectSlice.actions;
export const selectProjects = (state: { project: ProjectState }) => state.project.projects;
export default projectSlice.reducer;
