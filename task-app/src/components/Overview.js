import close from "./images/close.svg";

const Overview = ({ taskArr, handleDelete, handleEdit }) => {
  return (
    <ul className="overview" style={{ listStyleType: "none" }}>
      {taskArr.map((element) => (
        <li className="task-list" key={element.id}>
          <h2>
            {taskArr.indexOf(element) + 1 + ". "}
            {element.title}
          </h2>
          <p>
            {element.details} {""}
            <img
              src={close}
              alt="close"
              onClick={() => handleDelete(element.id)}
              title="remove task"
            />
          </p>
          <button onClick={() => handleEdit(element.id)}>edit</button>
        </li>
      ))}
    </ul>
  );
};

export default Overview;
