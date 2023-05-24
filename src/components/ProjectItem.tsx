import { Button, Modal } from "antd";
import Input from "antd/es/input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import deleteIcon from "../assets/DeleteIcon.svg";
import editIcon from "../assets/EditIcon.svg";
import questionIcon from "../assets/Question.svg";
import beaverIcon from "../assets/defaultProjectIcon_2x.png";
import { deleteProject, renameProject } from "../redux/projectSlice";
const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString)
    .toLocaleString("en-US", options)
    .replace(",", "")
    .replace("PM", "pm")
    .replace("AM", "am");
};

interface ProjectItemProps {
  project: {
    id: number;
    name: string;
    createdAt: string;
  };
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editProjectName, setEditProjectName] = useState(project.name);

  const handleDelete = () => {
    Modal.confirm({
      title: "Are you sure you want to delete this project?",
      icon: <img src={questionIcon} alt="question-icon" width={"22px"} height={"22px"}/>,
      content: "This action can't be undone.",
      okText: "Yes",
      cancelText: "No",
      onOk() {
        dispatch(deleteProject(project.id));
      },
    });
  };

  const handleSubmitRename = () => {
    const finalName = editProjectName || "New Project";
    dispatch(renameProject({ id: project.id, newName: finalName }));
    setEditMode(false);
  };

  return (
    <div className="projectItem">
      <div className="projectDetail">
        <img src={beaverIcon} alt={"beaver-icon"} className="projectImage" />
        {editMode ? (
          <Input
            className="inputField"
            value={editProjectName}
            onChange={(e) => setEditProjectName(e.target.value)}
            onPressEnter={handleSubmitRename}
            onBlur={handleSubmitRename}
            autoFocus
            allowClear={true}
          />
        ) : (
          <div className="projectName">{project.name}</div>
        )}
        {!editMode && (
          <Button
            className="editButton"
            icon={<img src={editIcon} alt={"edit-icon"} />}
            onClick={() => setEditMode(true)}
          />
        )}
      </div>
      <div className="date">{formatDate(project.createdAt)}</div>

      <Button
        className="deleteButton"
        icon={<img src={deleteIcon} alt={"delete-icon"} />}
        onClick={handleDelete}
      />
    </div>
  );
};

export default ProjectItem;
