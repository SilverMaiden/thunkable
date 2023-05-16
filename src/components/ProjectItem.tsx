// src/components/ProjectItem.tsx
import { Button } from "antd";
import Input from "antd/es/input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProject, renameProject } from "../redux/projectSlice";

interface ProjectItemProps {
  project: {
    id: number;
    name: string;
  };
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [editProjectName, setEditProjectName] = useState(project.name);

  const handleDelete = () => {
    dispatch(deleteProject(project.id));
  };

  const handleSubmitRename = () => {
    const finalName = editProjectName || "New Project";
    dispatch(renameProject({ id: project.id, newName: finalName }));
    setEditMode(false);
  };

  return (
    <div
      style={{
        width: "500px",
        padding: "20px",
        display: "flex",
        border: "2px pink solid",
        justifyContent: "space-between",
      }}
    >
      {editMode ? (
        <Input
          style={{ width: "200px" }}
          value={editProjectName}
          onChange={(e) => setEditProjectName(e.target.value)}
          onPressEnter={handleSubmitRename}
          onBlur={handleSubmitRename}
          autoFocus
          allowClear={true}
        />
      ) : (
        <div style={{display: "flex", justifyContent:"space-between", alignItems:'center', width: "250px"}}>
          <div>{project.name}</div>
          <Button onClick={() => setEditMode(true)}>Edit</Button>
        </div>
      )}
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default ProjectItem;
