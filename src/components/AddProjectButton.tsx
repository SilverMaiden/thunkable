// src/components/AddProject.tsx
import { useDispatch } from "react-redux";
import "../App.css";
import plusSign from "../assets/Plus Sign.svg";
import { addProject } from "../redux/projectSlice";

const AddProjectButton = () => {
  const dispatch = useDispatch();

  const handleAddProject = () => {
    const defaultName = "New Project";
    dispatch(addProject(defaultName));
  };

  return (
    <button
      className="button"
      onClick={handleAddProject}
    >
      <img alt={"plus-sign"} src={plusSign} />
    </button>
  );
};

export default AddProjectButton;
