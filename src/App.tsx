// src/App.tsx
import { Provider } from "react-redux";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ProjectList />
      </div>
    </Provider>
  );
}

export default App;
