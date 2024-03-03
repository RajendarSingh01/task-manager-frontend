import "./taskBoard.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../features/Projects/projectSlice";
import ProjectBox from "./ProjectBox";
const TaskBoard = () => {
  const [formClass, setFormClass] = useState(false);
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  const createProjextbar = function () {
    setFormClass(false);
    dispatch(addProject(taskName));
    setTaskName("");
  };

  return (
    <div>
      <div className="main-container">
        {projects.map((project) => (
          <ProjectBox key={project.id} data={project} />
        ))}
        <button onClick={() => setFormClass(true)}>+</button>
      </div>
      <div className={` form ${formClass ? "form-show" : ""}`}>
        <button onClick={() => setFormClass(false)}>*</button>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={() => createProjextbar()}>Add</button>
      </div>
    </div>
  );
};

export default TaskBoard;
