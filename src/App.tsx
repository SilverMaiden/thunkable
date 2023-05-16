// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AddProject from './components/AddProject';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Project Management</h1>
        <AddProject />
        <ProjectList />
      </div>
    </Provider>
  );
}

export default App;
