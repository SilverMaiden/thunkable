// src/components/ProjectList.tsx
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { reorderProjects, selectProjects } from "../redux/projectSlice";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  const projects = useSelector(selectProjects);
  const dispatch = useDispatch();

  const handleDragEnd = (result: { destination: any; source?: any }) => {
    if (!result.destination) return;
    const { source, destination } = result;

    dispatch(
      reorderProjects({
        sourceIndex: source.index,
        destinationIndex: destination.index,
      })
    );
  };

  return (
    <div className="projectList">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="projectList">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {projects.map((project, index) => (
                <Draggable
                  key={project.id}
                  draggableId={String(project.id)}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ProjectItem
                        project={project}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ProjectList;
