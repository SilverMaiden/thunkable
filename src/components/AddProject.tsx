// src/components/AddProject.tsx
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/projectSlice';

const AddProject = () => {
  const dispatch = useDispatch();

  const handleAddProject = () => {
    const defaultName = 'New Project';
    dispatch(addProject(defaultName));
  };

  return (
    <Button onClick={handleAddProject} type="primary">+</Button>
  );
};

export default AddProject;
