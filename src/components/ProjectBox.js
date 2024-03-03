import "./projectBox.css";

const ProjectBox = ({ data }) => {
  console.log(data);
  return (
    <div className="project-box">
      <span>{data.NumberOfTasks}</span>
      <span>{data.name}</span>
      <button>+</button>
      <button>...</button>
      <button>+ Add new Task</button>
      <div>ProjectBox</div>
    </div>
  );
};

export default ProjectBox;
